import React from 'react';
import { NavLink } from 'react-router-dom';

export default function About() {
  return (
    <main className="page-shell inner-page about-page">
      <p className="eyebrow"><span className="eyebrow-dot" /> A LITTLE CONTEXT</p>
      <div className="about-intro">
        <h1>Curious by nature.<br /><span>Thoughtful by design.</span></h1>
        <div className="about-copy">
          <p className="lead">I’m Bildad, an independent designer and developer partnering with good people to make useful things feel extraordinary.</p>
          <p>My practice lives between visual identity and the web. I like clear ideas, considered details, and work that earns its place in someone’s day. From the first sketch to the final line of code, I stay close to the craft.</p>
          <p>Over the last eight years, I’ve worked with early-stage teams, established brands, and the occasional very ambitious coffee shop.</p>
          <NavLink className="text-link" to="/contact">Have a project in mind? <span>↗</span></NavLink>
        </div>
      </div>
      <div className="about-divider" />
      <div className="about-details">
        <div className="detail-block"><p className="eyebrow">WHAT I DO</p><ul><li>Digital experiences</li><li>Visual identity</li><li>Creative development</li><li>Art direction</li></ul></div>
        <div className="detail-block"><p className="eyebrow">HOW I WORK</p><p>Small, focused teams. Open conversations. Good questions before clever answers. Every engagement is shaped around the people and the problem.</p></div>
        <div className="detail-block detail-note"><span className="detail-star" aria-hidden="true">✳</span><p>Currently taking on select projects for winter 2025.</p></div>
      </div>
    </main>
  );
}
