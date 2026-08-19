import { site, navLinks } from '../data/site';
import { Reveal } from './Reveal';
import BrandLogo from './BrandLogo';
import { FacebookIcon, MapPinIcon, PhoneIcon, ClockIcon, ArrowRightIcon } from './icons';
import './Footer.css';

const footerLinks = navLinks.filter((l) =>
  ['Home', 'Our Menu', 'Cakes', 'About', 'Contact'].includes(l.label),
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="grain" aria-hidden="true" />
      <div className="container footer-inner">
        <Reveal className="footer-brand-col">
          <span className="footer-logo">
            <BrandLogo className="logo--xl" />
          </span>
          <p className="footer-brand">
            SARDAR <em>Bakery</em>
          </p>
          <p className="footer-est">Est. {site.established}</p>
          <p className="footer-tagline">{site.tagline}.</p>
        </Reveal>

        <Reveal delay={0.08} className="footer-col">
          <h4 className="footer-head">Explore</h4>
          <ul className="footer-links">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.14} className="footer-col">
          <h4 className="footer-head">Connect</h4>
          <ul className="footer-contact">
            <li>
              <a href={site.facebook.url} target="_blank" rel="noreferrer">
                <FacebookIcon />
                {site.facebook.label}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phonePrimary.tel}`}>
                <PhoneIcon />
                {site.phonePrimary.display}
              </a>
            </li>
            <li>
              <span className="footer-hours">
                <ClockIcon />
                {site.hours.daily}
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="footer-col">
          <h4 className="footer-head">Find Us</h4>
          <p className="footer-address">
            <MapPinIcon />
            {site.addressShort}
          </p>
          <div className="footer-actions">
            <a className="footer-btn" href={`tel:${site.phonePrimary.tel}`}>
              <PhoneIcon />
              Call Now
            </a>
            <a className="footer-btn" href={site.maps.directionsUrl} target="_blank" rel="noreferrer">
              <ArrowRightIcon />
              Get Directions
            </a>
          </div>
        </Reveal>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} {site.name} — Khanna, Punjab. All rights reserved.</p>
          <p className="footer-bottom-meta">Where Tradition Bakes Trust · Est. 1950</p>
        </div>
      </div>
    </footer>
  );
}