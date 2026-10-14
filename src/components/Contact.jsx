import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xeaerboe', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        setStatus('Your message could not be sent. Please try again or email me directly.');
        return;
      }

      form.reset();
      setStatus('Thanks for reaching out! Your message has been sent.');
    } catch {
      setStatus('There was a connection problem. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="page-shell inner-page contact-page">
      <p className="eyebrow"><span className="eyebrow-dot" /> THE START OF SOMETHING</p>
      <div className="contact-layout">
        <div className="contact-intro">
          <h1>Have a good<br />one in mind<span className="heading-period">?</span></h1>
          <p>Tell me what you’re thinking. The early, half-formed idea is very welcome here.</p>
          <div className="contact-email"><span className="eyebrow">OR SEND A NOTE</span><a href="mailto:bildadtitus2005@gmail.com">bildadtitus2005@gmail.com <span>↗</span></a></div>
          <p className="availability"><span className="eyebrow-dot" /> AVAILABLE FOR SELECT PROJECTS</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name<input id="name" name="name" type="text" autoComplete="name" placeholder="What should I call you?" required /></label>
          <label htmlFor="email">Email address<input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
          <label htmlFor="message">A little about the project<textarea id="message" name="message" rows="4" placeholder="The big idea, the small details, or somewhere in between…" required /></label>
          <div className="form-bottom"><button className="submit-button" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send a note'} <span aria-hidden="true">↗</span></button><span className="form-hint">No pitch deck required.</span></div>
          <p className="form-status" aria-live="polite">{status}</p>
        </form>
      </div>
    </main>
  );
}
