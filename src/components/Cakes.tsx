import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cakeGroups } from '../data/menu';
import { site, images } from '../data/site';
import { EASE } from '../lib/motion';
import SectionHead from './SectionHead';
import { Reveal } from './Reveal';
import { PhoneIcon } from './icons';
import './Cakes.css';

type Size = 'half' | 'full';

export default function Cakes() {
  const [size, setSize] = useState<Size>('half');
  const reduce = useReducedMotion();

  return (
    <section id="cakes" className="section cakes">
      <div className="grain grain--gold" aria-hidden="true" />
      <div className="cakes-glow" aria-hidden="true" />
      <div className="container">
        <SectionHead
          eyebrow="The Cake Counter"
          align="center"
          tone="wine"
          title={
            <>
              Celebrate <em>With Sardar</em>
            </>
          }
          sub="Fresh cakes in every flavour — classic, chocolate and premium signature collections, baked for your occasion."
        />

        <Reveal className="cakes-size">
          <span className="cakes-size-label">Choose a size</span>
          <div className="cakes-size-toggle" role="group" aria-label="Cake size">
            {(['half', 'full'] as Size[]).map((s) => {
              const selected = size === s;
              const label = s === 'half' ? '½ Kg' : '1 Kg';
              return (
                <button
                  key={s}
                  className={`cakes-size-btn${selected ? ' is-selected' : ''}`}
                  aria-pressed={selected}
                  onClick={() => setSize(s)}
                >
                  {selected && (
                    <motion.span
                      className="cakes-size-pill"
                      layoutId="cakes-size-pill"
                      transition={reduce ? { duration: 0 } : { duration: 0.45, ease: EASE }}
                    />
                  )}
                  <span className="cakes-size-text">{label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="cakes-grid">
          <Reveal className="cakes-visual">
            <div className="cakes-visual-frame">
              <img
                src={images.cakeClassic}
                alt="A classic celebration cake from the Sardar Bakery counter"
                width={900}
                height={1200}
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="cakes-visual-tag">
              Est. {site.established} — Fresh, daily
            </span>
          </Reveal>

          <div className="cakes-groups">
            {cakeGroups.map((group, gi) => (
              <Reveal key={group.title} delay={0.06 * gi} className="cakes-group">
                <h3 className="cakes-group-title">
                  <span className="cakes-group-index">0{gi + 1}</span>
                  {group.title}
                </h3>
                <ul className="cakes-list">
                  {group.items.map((item) => (
                    <li className="cakes-row" key={item.name}>
                      <span className="cakes-name">{item.name}</span>
                      <span className="cakes-leader" aria-hidden="true" />
                      <span className="cakes-size-tag">{size === 'half' ? '½ Kg' : '1 Kg'}</span>
                      <span className="cakes-price">₹{size === 'half' ? item.half : item.full}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.12} className="cakes-cta">
          <p className="cakes-cta-label">
            Ordering a cake? {size === 'half' ? '½ Kg' : '1 Kg'} prices above — call ahead and we'll have it ready.
          </p>
          <div className="cakes-cta-actions">
            <a className="btn btn-gold" href={`tel:${site.phonePrimary.tel}`}>
              <PhoneIcon />
              Call to Order
            </a>
            <a className="cakes-cta-phone" href={`tel:${site.phonePrimary.tel}`}>
              {site.phonePrimary.display}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}