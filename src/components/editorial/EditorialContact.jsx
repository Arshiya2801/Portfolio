import { useRef, useState } from 'react';
import { Github, Linkedin, Mail, Phone, Send, Twitter } from 'lucide-react';
import { sendContactMessage } from '../../lib/contact';
import { EnvelopeScene } from './Scenes';
const contacts = [{
  title: 'Email',
  label: 'singharshiya.work@gmail.com',
  href: 'mailto:singharshiya.work@gmail.com',
  Icon: Mail,
  desc: 'Reach out via email. I usually reply within 24-48 hours.'
}, {
  title: 'Phone',
  label: '+91 9821937286',
  href: 'tel:+919821937286',
  Icon: Phone,
  desc: 'For quicker communication, feel free to drop a message or call.'
}, {
  title: 'GitHub',
  label: 'Arshiya2801',
  href: 'https://github.com/Arshiya2801',
  Icon: Github,
  desc: 'Check out my repositories and open source contributions.'
}, {
  title: 'LinkedIn',
  label: '/in/arshiya-singh',
  href: 'https://linkedin.com/in/arshiya-singh',
  Icon: Linkedin,
  desc: 'Connect with me professionally on LinkedIn.'
}, {
  title: 'Twitter (X)',
  label: '@ash240272',
  href: 'https://x.com/ash240272',
  Icon: Twitter,
  desc: 'Follow me for tech discussions and updates.'
}];
export default function EditorialContact() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const inFlight = useRef(false);
  const change = event => {
    setFields(previous => ({
      ...previous,
      [event.target.name]: event.target.value
    }));
    if (status !== 'sending') setStatus('idle');
  };
  const submit = async event => {
    event.preventDefault();
    if (inFlight.current || !event.currentTarget.reportValidity()) return;
    const botcheck = new FormData(event.currentTarget).get('botcheck');
    inFlight.current = true;
    setStatus('sending');
    setError('');
    try {
      await sendContactMessage({
        ...fields,
        botcheck
      });
      setStatus('success');
      setFields({
        name: '',
        email: '',
        message: ''
      });
    } catch (failure) {
      setStatus('error');
      setError(failure.message);
    } finally {
      inFlight.current = false;
    }
  };
  const sending = status === 'sending';
  return <section id="contact" className="contact-section grain">
        <div className="section-shell">
            <div className="section-kicker"><span>GOT SOMETHING IN MIND?</span><span>LET’S MAKE IT HAPPEN.</span></div>
            <div className="contact-heading"><h2>LET’S WORK<br /><span>TOGETHER.</span></h2><a className="envelope-link" href="mailto:singharshiya.work@gmail.com" aria-label="Email Arshiya Singh"><EnvelopeScene /></a></div>
            <div className="contact-grid">
                <div className="contact-intro"><p className="large-copy">A project, a role, or a good conversation.<br />My inbox is open.</p><a className="contact-email" href="mailto:singharshiya.work@gmail.com">singharshiya.work@gmail.com</a><p className="microcopy">Based in India. Open to remote work and relocation.</p>
                    <div className="contact-directory">{contacts.map(({
              title,
              label,
              href,
              Icon,
              desc
            }) => <div key={title}><a href={href} {...href.startsWith('https:') ? {
                target: '_blank',
                rel: 'noopener noreferrer'
              } : {}}><Icon size={18} /><span>{label}</span></a><p>{desc}</p></div>)}</div>
                </div>
                <form className="contact-form" onSubmit={submit} aria-busy={sending} aria-describedby="contact-status">
                    <div hidden aria-hidden="true"><label htmlFor="contact-botcheck">Leave this field empty</label><input id="contact-botcheck" name="botcheck" tabIndex={-1} autoComplete="off" /></div>
                    <div className="form-pair"><label htmlFor="name">Full name <span>*</span><input id="name" name="name" autoComplete="name" maxLength={100} required disabled={sending} value={fields.name} onChange={change} placeholder="Jane Doe" /></label><label htmlFor="email">Email address <span>*</span><input id="email" type="email" name="email" autoComplete="email" maxLength={254} required disabled={sending} value={fields.email} onChange={change} placeholder="jane@example.com" /></label></div>
                    <label htmlFor="message">Your message <span>*</span><textarea id="message" name="message" rows={5} maxLength={5000} required disabled={sending} value={fields.message} onChange={change} placeholder="Tell me about your project or role…" /></label>
                    <button className="button button-crimson" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'}<Send size={17} /></button>
                    <div id="contact-status" className="contact-status" role="status" aria-live="polite" aria-atomic="true">{sending && <p>Sending your message…</p>}{status === 'success' && <p>Thank you for reaching out! Your message has been sent successfully.</p>}{status === 'error' && <p>{error} <a href="mailto:singharshiya.work@gmail.com">Email Arshiya directly</a>.</p>}</div>
                </form>
            </div>
        </div>
    </section>;
}
