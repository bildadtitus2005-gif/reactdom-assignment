import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';

function LiveClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="clock" aria-label={`Local time ${now.toLocaleTimeString()}`}>
      <span className="clock-label">LOCAL TIME</span>
      <time dateTime={now.toISOString()}>
        {new Intl.DateTimeFormat(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now)}
      </time>
      <span className="clock-indicator" aria-hidden="true" />
    </div>
  );
}

function BrowserChrome() {
  return (
    <div className="browser-chrome" aria-hidden="true">
      <div className="window-controls"><span /><span /><span /></div>
      <div className="browser-address">bildad.design</div>
      <div className="browser-actions"><span>↗</span><span>＋</span><span>•••</span></div>
    </div>
  );
}

function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <NavLink className="wordmark" to="/" aria-label="Bildad home">
        <span className="wordmark-mark">B<span>.</span></span>
        <span className="wordmark-name">Bildad</span>
      </NavLink>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact <span aria-hidden="true">↗</span></NavLink>
      </nav>
      <div className="header-tools">
        <button
          className="theme-toggle"
          type="button"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={theme === 'dark'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={onToggleTheme}
        >
          <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
        </button>
        <LiveClock />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Bildad</span>
      <span>morataconnect <span className="footer-spark">✳</span></span>
      <a href="mailto:morata2005@gmail.com">Email me ↗</a>
    </footer>
  );
}

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => (
    window.localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'
  ));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <BrowserChrome />
      <Header theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
