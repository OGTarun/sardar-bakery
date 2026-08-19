import { Reveal } from './Reveal';
import { site, images } from '../data/site';
import './Heritage.css';

const timeline = [
  { year: '1950', label: 'The Beginning', text: 'Sardar Bakery opens its doors in Khanna.' },
  { year: 'Tradition', label: 'The Craft', text: 'Traditional baking methods and recipes, kept alive every day.' },
  { year: 'Today', label: 'Still Baking', text: 'Cakes, pastries and favourites for every generation of Khanna.' },
];

export default function Heritage() {
  return (
    <section id="about" className="section heritage">
      <div className="grain" aria-hidden="true" />
      <div className="container heritage-inner">
        <div className="heritage-copy">
          <Reveal>
            <p className="eyebrow">A Legacy of Baking</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heritage-title">
              A Legacy
              <br />
              of <em>Baking</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="heritage-est">
              Est. <span>{site.established}</span>
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="heritage-tagline">{site.tagline}.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="heritage-body">
              For generations, Sardar Bakery has been part of Khanna's everyday
              celebrations, cravings and special moments — a traditional bakery
              that keeps baking the way it always has, with the same craft and care.
            </p>
          </Reveal>
          <Reveal delay={0.36}>
            <a className="heritage-link" href="#menu">
              Explore What We Bake
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="heritage-visual">
          <div className="heritage-visual-frame">
            <img
              src={images.logo}
              alt="The Sardar Bakery brand mark, established 1950"
              width={1456}
              height={860}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="heritage-crest" aria-hidden="true">
            <span className="heritage-crest-year">{site.established}</span>
            <span className="heritage-crest-label">Since</span>
          </div>
        </Reveal>
      </div>

      <div className="container">
        <div className="heritage-timeline">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={0.1 + i * 0.1} className="heritage-tl-item">
              <span className="heritage-tl-dot" aria-hidden="true" />
              <span className="heritage-tl-year">{t.year}</span>
              <span className="heritage-tl-label">{t.label}</span>
              <span className="heritage-tl-text">{t.text}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}