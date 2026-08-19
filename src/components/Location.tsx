import { Reveal } from './Reveal';
import { site } from '../data/site';
import { MapPinIcon, PhoneIcon, ClockIcon, FacebookIcon, ArrowRightIcon } from './icons';
import SectionHead from './SectionHead';
import './Location.css';

export default function Location() {
  return (
    <section id="contact" className="section section--cream visit">
      <div className="grain" aria-hidden="true" />
      <div className="container">
        <SectionHead
          eyebrow="Visit Us"
          align="left"
          title={
            <>
              Find Us <em>in Khanna</em>
            </>
          }
          sub="Sardar Bakery serves Khanna, Punjab — stop by for a bite, or call ahead and we'll have your order fresh and ready."
        />

        <div className="visit-grid">
          <Reveal className="visit-info">
            <div className="visit-card">
              <div className="visit-card-row">
                <span className="visit-icon">
                  <MapPinIcon />
                </span>
                <div>
                  <h3 className="visit-card-title">Location</h3>
                  <p className="visit-card-text">Khanna, Punjab</p>
                </div>
              </div>

              <div className="visit-card-row">
                <span className="visit-icon">
                  <PhoneIcon />
                </span>
                <div>
                  <h3 className="visit-card-title">Call Sardar Bakery</h3>
                  <a className="visit-card-text visit-link" href={`tel:${site.phonePrimary.tel}`}>
                    {site.phonePrimary.display}
                  </a>
                </div>
              </div>

              <div className="visit-card-row">
                <span className="visit-icon">
                  <ClockIcon />
                </span>
                <div>
                  <h3 className="visit-card-title">Opening Hours</h3>
                  <p className="visit-card-text">{site.hours.daily}</p>
                  <p className="visit-card-note">Listed timing, open daily</p>
                </div>
              </div>

              <div className="visit-card-row">
                <span className="visit-icon">
                  <FacebookIcon />
                </span>
                <div>
                  <h3 className="visit-card-title">Follow Us</h3>
                  <a className="visit-card-text visit-link" href={site.facebook.url} target="_blank" rel="noreferrer">
                    {site.facebook.label}
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>

              <p className="visit-note">
                Want to know what's fresh today or place a party bulk order? Give us a
                call — we're happy to help.
              </p>

              <div className="visit-actions">
                <a className="btn btn-dark" href={site.maps.directionsUrl} target="_blank" rel="noreferrer">
                  <MapPinIcon />
                  Get Directions
                </a>
                <a className="btn btn-line" href={`tel:${site.phonePrimary.tel}`}>
                  <PhoneIcon />
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="visit-map">
            <div className="visit-map-frame">
              <div className="visit-map-head">
                <span className="visit-map-dot" aria-hidden="true" />
                Sardar Bakery · Khanna, Punjab
              </div>
              <iframe
                title="Map showing Sardar Bakery in Khanna, Punjab"
                src={site.maps.embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a className="visit-map-float" href={site.maps.directionsUrl} target="_blank" rel="noreferrer">
                <MapPinIcon />
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}