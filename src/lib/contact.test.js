import assert from 'node:assert/strict';
import test from 'node:test';
import { sendContactMessage } from './contact.js';

const enquiry = { name: '  Test Visitor  ', email: ' visitor@example.com ', message: '  Portfolio enquiry  ' };

test('submits trimmed visitor fields with a reply address and subject', async () => {
    let request;
    await sendContactMessage(enquiry, {
        fetchImpl: async (url, options) => {
            request = { url, ...options };
            return new Response(JSON.stringify({ success: true }), { status: 200 });
        },
    });
    const payload = JSON.parse(request.body);
    assert.equal(request.url, 'https://api.web3forms.com/submit');
    assert.equal(request.method, 'POST');
    assert.equal(request.headers['Content-Type'], 'application/json');
    assert.equal(payload.name, 'Test Visitor');
    assert.equal(payload.message, 'Portfolio enquiry');
    assert.equal(payload.replyto, 'visitor@example.com');
    assert.ok(payload.subject);
    assert.equal(payload.access_key, 'e2593b25-22c8-4d36-9e62-ecf45f91a69d');
});

test('rejects whitespace, invalid email, oversized messages and honeypot without a request', async () => {
    let requests = 0;
    const fetchImpl = async () => { requests++; };
    for (const fields of [
        { ...enquiry, name: '   ' },
        { ...enquiry, message: '   ' },
        { ...enquiry, email: 'not-an-email' },
        { ...enquiry, message: 'x'.repeat(5001) },
        { ...enquiry, botcheck: 'spam' },
    ]) {
        await assert.rejects(sendContactMessage(fields, { fetchImpl }));
    }
    assert.equal(requests, 0);
});

test('never reports success for HTTP errors, provider rejection or malformed responses', async () => {
    for (const response of [
        new Response(JSON.stringify({ success: true }), { status: 500 }),
        new Response(JSON.stringify({ success: false }), { status: 200 }),
        new Response('<html>Service unavailable</html>', { status: 200 }),
    ]) {
        await assert.rejects(sendContactMessage(enquiry, { fetchImpl: async () => response }), /could not accept/);
    }
});

test('explains rate limiting and network failure', async () => {
    await assert.rejects(sendContactMessage(enquiry, {
        fetchImpl: async () => new Response('', { status: 429 }),
    }), /too many requests/);
    await assert.rejects(sendContactMessage(enquiry, {
        fetchImpl: async () => { throw new TypeError('Failed to fetch'); },
    }), /Check your connection/);
});

test('aborts stalled requests without automatically resending', async () => {
    let requests = 0;
    await assert.rejects(sendContactMessage(enquiry, {
        timeoutMs: 5,
        fetchImpl: async (_url, { signal }) => {
            requests++;
            return new Promise((_resolve, reject) => signal.addEventListener('abort', () => reject(new Error('Aborted')), { once: true }));
        },
    }), /delivery could not be confirmed/);
    assert.equal(requests, 1);
});
