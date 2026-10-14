import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:morata2005@gmail.com?subject=${subject}&body=${body}`;
    setStatus('Your email app should open with your message ready to send.');
  }

  return (
    <main className="page-shell inner-page contact-page">
      <p className="eyebrow"><span className="eyebrow-dot" /> THE START OF SOMETHING</p>
      <div className="contact-layout">
        <div className="contact-intro">
          <h1>Have a good<br />one in mind<span className="heading-period">?</span></h1>
          <p>Tell me what you’re thinking. The early, half-formed idea is very welcome here.</p>
          <div className="contact-email"><span className="eyebrow">OR SEND A NOTE</span><a href="mailto:morata2005@gmail.com">morata2005@gmail.com <span>↗</span></a></div>
          <p className="availability"><span className="eyebrow-dot" /> AVAILABLE FOR SELECT PROJECTS</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name<input id="name" name="name" type="text" autoComplete="name" placeholder="What should I call you?" required /></label>
          <label htmlFor="email">Email address<input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
          <label htmlFor="message">A little about the project<textarea id="message" name="message" rows="4" placeholder="The big idea, the small details, or somewhere in between…" required /></label>
          <div className="form-bottom"><button className="submit-button" type="submit">Send a note <span aria-hidden="true">↗</span></button><span className="form-hint">No pitch deck required.</span></div>
          <p className="form-status" aria-live="polite">{status}</p>
        </form>
      </div>
    </main>
  );
}
