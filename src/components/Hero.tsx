import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { site, images, badgeRingText } from '../data/site';
import { EASE } from '../lib/motion';
import RotatingBadge from './RotatingBadge';
import { ArrowRightIcon, PhoneIcon, MapPinIcon } from './icons';
import './Hero.css';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 110]);
  const fade = useTransform(scrollYProgress, [0, 0.72], [1, 0.15]);

  const r = reduce;

  return (
    <section id="home" className="hero" ref={ref}>
      <motion.div
        className="hero-bg"
        aria-hidden="true"
        initial={r ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <div className="grain grain--gold" aria-hidden="true" />
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />

      <motion.div style={{ opacity: fade }} className="container hero-inner">
        <motion.div style={{ y: yText }} className="hero-copy">
          <motion.p
            className="eyebrow hero-eyebrow"
            initial={r ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          >
            Est. {site.established} • Khanna
          </motion.p>

          <h1 className="hero-brand" aria-label={site.brand}>
            <span className="hero-brand-line" aria-hidden="true">
              <motion.span
                className="hero-brand-reveal"
                initial={r ? false : { clipPath: 'inset(0 100% 0 0)', y: 12 }}
                animate={{ clipPath: 'inset(0 0% 0 0)', y: 0 }}
                transition={{ duration: 1.05, delay: 0.4, ease: EASE }}
              >
                SARDAR
              </motion.span>
            </span>
            <span className="hero-brand-line" aria-hidden="true">
              <motion.span
                className="hero-brand-reveal"
                initial={r ? false : { clipPath: 'inset(0 100% 0 0)', y: 12 }}
                animate={{ clipPath: 'inset(0 0% 0 0)', y: 0 }}
                transition={{ duration: 1.05, delay: 0.58, ease: EASE }}
              >
                BAKERY
              </motion.span>
            </span>
          </h1>

          <motion.h2
            className="hero-title"
            initial={r ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.82, ease: EASE }}
          >
            Where Tradition
            <br />
            <span className="hero-title-accent">Bakes Trust.</span>
          </motion.h2>

          <motion.p
            className="hero-sub"
            initial={r ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.98, ease: 'easeOut' }}
          >
            Freshly prepared favourites, celebration cakes and bakery classics —
            made for generations of Khanna.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={r ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.14, ease: EASE }}
          >
            <a className="btn btn-gold" href="#menu">
              Explore the Menu
              <ArrowRightIcon />
            </a>
            <a className="btn btn-ghost" href={`tel:${site.phonePrimary.tel}`}>
              <PhoneIcon />
              Call to Order
            </a>
          </motion.div>

          <motion.div
            className="hero-quick"
            initial={r ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.3, ease: 'easeOut' }}
          >
            <a className="hero-phone" href={`tel:${site.phonePrimary.tel}`}>
              <span className="hero-phone-dot" aria-hidden="true" />
              Call Now
              <span className="hero-phone-num">{site.phonePrimary.display}</span>
            </a>
            <a className="hero-ghost-link" href={site.maps.directionsUrl} target="_blank" rel="noreferrer">
              <MapPinIcon />
              Get Directions
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" style={{ y: yVisual }}>
          <div className="hero-halo" aria-hidden="true" />

          <motion.div
            className="hero-visual-track"
            initial={r ? false : { opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
          >
            <div className="hero-arch">
              <img
                src={images.heroCake}
                alt="Premium chocolate celebration cake with rich frosting — baked fresh at Sardar Bakery"
                width={1200}
                height={1200}
                decoding="async"
              />
            </div>
            <div className="hero-ring" aria-hidden="true" />
          </motion.div>

          <motion.div
            className="hero-float hero-float--pizza"
            initial={r ? false : { opacity: 0, y: 26, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: EASE }}
          >
            <div className="hero-float-media">
              <img
                src={images.heroPizza}
                alt="Freshly baked pizza from the fast-food counter at Sardar Bakery"
                width={700}
                height={700}
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="hero-float-cap">Freshly Prepared</span>
          </motion.div>

          <motion.div
            className="hero-float hero-float--bread"
            initial={r ? false : { opacity: 0, y: 26, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1, ease: EASE }}
          >
            <div className="hero-float-media">
              <img
                src={images.heroBread}
                alt="Freshly baked bread loaves from the bakery counter"
                width={700}
                height={700}
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="hero-float-cap">Baked Daily</span>
          </motion.div>

          <motion.div
            className="hero-badge"
            initial={r ? false : { opacity: 0, scale: 0.6, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1.35, ease: EASE }}
          >
            <RotatingBadge text={badgeRingText} center={`${site.established}`} />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        className="hero-scroll"
        href="#about"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <span>Scroll</span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </motion.a>
    </section>
  );
}