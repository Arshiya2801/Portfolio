export const CONTACT_ENDPOINT = 'https://api.web3forms.com/submit';

// Web3Forms access keys are public form identifiers, not secret API credentials.
// Default key supplied for singharshiya.work@gmail.com.
const accessKey = import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY?.trim()
    || 'e2593b25-22c8-4d36-9e62-ecf45f91a69d';

export class ContactError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ContactError';
    }
}

export async function sendContactMessage(fields, { fetchImpl = fetch, timeoutMs = 20000 } = {}) {
    const name = fields.name.trim();
    const email = fields.email.trim();
    const message = fields.message.trim();

    if (!name || !message) {
        throw new ContactError('Please enter your name and a message. Spaces alone are not enough.');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new ContactError('Please enter a valid email address so I can reply.');
    }
    if (name.length > 100 || email.length > 254 || message.length > 5000) {
        throw new ContactError('Please keep your name under 100 characters and your message under 5,000 characters.');
    }
    if (fields.botcheck) {
        throw new ContactError('Your message could not be sent. Please email me directly.');
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const response = await fetchImpl(CONTACT_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            signal: controller.signal,
            body: JSON.stringify({
                access_key: accessKey,
                subject: 'New enquiry from Arshiya Singh’s portfolio',
                from_name: 'Arshiya Singh Portfolio',
                name,
                email,
                replyto: email,
                message,
                botcheck: false,
            }),
        });

        if (response.status === 429) {
            throw new ContactError('The contact service is receiving too many requests. Please try later or email me directly.');
        }
        const result = await response.json().catch(() => null);
        if (!response.ok || result?.success !== true) {
            throw new ContactError('The contact service could not accept your message. Your text is saved below; please try later or email me directly.');
        }
        return result;
    } catch (error) {
        if (error instanceof ContactError) throw error;
        if (controller.signal.aborted) {
            throw new ContactError('Sending took too long, so delivery could not be confirmed. Your text is still here. Please wait before retrying, or email me directly.');
        }
        throw new ContactError('Unable to reach the contact service. Check your connection and try again, or email me directly.');
    } finally {
        clearTimeout(timer);
    }
}
