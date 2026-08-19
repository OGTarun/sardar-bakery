import { site } from '../data/site';
import { Reveal } from './Reveal';
import { LeafIcon, ShieldIcon, SparkIcon } from './icons';
import './Trust.css';

const pillars = [
  { icon: LeafIcon, label: 'Freshly Prepared' },
  { icon: ShieldIcon, label: 'Hygienic Ingredients' },
  { icon: SparkIcon, label: 'Great Taste' },
];

export default function Trust() {
  return (
    <section className="section trust">
      <div className="grain" aria-hidden="true" />
      <div className="container trust-inner">
        <Reveal className="trust-brand">
          <p className="eyebrow">Since {site.established}</p>
          <p className="trust-est">{site.established}</p>
          <p className="trust-brandline">{site.tagline}.</p>
        </Reveal>

        <div className="trust-pillars">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.label} delay={0.1 + i * 0.1} className="trust-pillar">
                <span className="trust-pillar-icon">
                  <Icon />
                </span>
                <span className="trust-pillar-label">{p.label}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}