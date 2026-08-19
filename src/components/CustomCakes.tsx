import { customCakeThemes } from '../data/menu';
import { site, images } from '../data/site';
import { Reveal } from './Reveal';
import { PhoneIcon, ArrowRightIcon } from './icons';
import './CustomCakes.css';

export default function CustomCakes() {
  return (
    <section id="custom-cakes" className="section custom">
      <div className="grain" aria-hidden="true" />
      <div className="container custom-inner">
        <Reveal className="custom-visual">
          <div className="custom-visual-frame">
            <img
              src={images.cakeNew}
              alt="A custom designed cake made to order at Sardar Bakery"
              width={900}
              height={1100}
              loading="lazy"
              decoding="async"
            />
          </div>
          <span className="custom-visual-stamp" aria-hidden="true">
            Custom
            <br />
            Cakes
          </span>
        </Reveal>

        <div className="custom-copy">
          <Reveal>
            <p className="eyebrow">Designer &amp; Customized Cakes</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="custom-title">
              Your Idea.
              <br />
              <em>Our Cake.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="custom-body">
              Customised cakes for every occasion — decorated the way you imagine,
              charged as per design. Tell us the theme and we'll bake it to your idea.
            </p>
          </Reveal>

          <Reveal delay={0.22} className="custom-themes">
            <h3 className="custom-themes-label">Popular themes</h3>
            <ul className="custom-theme-list">
              {customCakeThemes.map((t) => (
                <li key={t} className="custom-theme">
                  <span aria-hidden="true" className="custom-theme-dot" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="custom-note">Customised cakes available — charged as per design.</p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="custom-actions">
              <a className="btn btn-dark" href={`tel:${site.phonePrimary.tel}`}>
                <PhoneIcon />
                Enquire for Custom Cake
              </a>
              <a className="custom-call" href={`tel:${site.phonePrimary.tel}`}>
                or call {site.phonePrimary.display}
                <ArrowRightIcon />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}