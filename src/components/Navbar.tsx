import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { site, navLinks } from '../data/site';
import { EASE } from '../lib/motion';
import BrandLogo from './BrandLogo';
import { PhoneIcon, FacebookIcon } from './icons';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav-inner">
        <a className="nav-logo" href="#home" onClick={() => setOpen(false)}>
          <BrandLogo />
          <span className="nav-logo-text">
            SARDAR <em>Bakery</em>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-phone" href={`tel:${site.phonePrimary.tel}`}>
            {site.phonePrimary.display}
          </a>
          <a className="btn btn-gold nav-call" href={`tel:${site.phonePrimary.tel}`}>
            <PhoneIcon />
            Call Now
          </a>
          <button
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <nav aria-label="Mobile">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 * i, ease: EASE }}
                >
                  <span className="nav-mobile-index">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="nav-mobile-foot"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28, ease: EASE }}
            >
              <a className="btn btn-gold nav-mobile-call" href={`tel:${site.phonePrimary.tel}`} onClick={() => setOpen(false)}>
                <PhoneIcon />
                Call Now — {site.phonePrimary.display}
              </a>
              <a className="nav-mobile-facebook" href={site.facebook.url} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                <FacebookIcon />
                {site.facebook.label}
              </a>
              <p className="nav-mobile-address">{site.addressShort}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}