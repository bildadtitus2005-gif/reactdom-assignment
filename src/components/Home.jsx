import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> INDEPENDENT DIGITAL DESIGNER & DEVELOPER</p>
          <h1><span>Making digital</span><br />feel more human.</h1>
          <div className="hero-intro">
            <p className="hero-description">I bring thoughtful ideas to life through clear design and useful technology.</p>
            <div className="hero-actions">
              <NavLink className="hero-button hero-button-primary" to="/contact">Get in touch <span aria-hidden="true">↗</span></NavLink>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <img
            className="hero-image"
            src="/images/coding-camp.jpg"
            alt="Students learning to code together at a summer camp"
          />
        </div>
      </section>
    </main>
  );
}
