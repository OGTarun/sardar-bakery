import { bakerySpecials } from '../data/menu';
import { Reveal } from './Reveal';
import { site } from '../data/site';
import { PhoneIcon } from './icons';
import './Specials.css';

export default function Specials() {
  return (
    <section id="specials" className="section section--wine specials">
      <div className="grain grain--gold" aria-hidden="true" />
      <div className="specials-glow" aria-hidden="true" />
      <div className="container specials-inner">
        <Reveal className="specials-copy">
          <p className="eyebrow specials-eyebrow">Bakery Counter</p>
          <h2 className="specials-title">
            Bakery <em>Specials</em>
          </h2>
          <p className="specials-sub">
            A few of our bakery classics — dry cakes, atta cake and cream rolls —
            weighed and packed straight from the counter.
          </p>
        </Reveal>

        <ul className="specials-list">
          {bakerySpecials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.07} className="special-row">
              <span className="special-index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="special-text">
                <span className="special-name">{item.name}</span>
                {item.weight && <span className="special-weight">{item.weight}</span>}
              </div>
              <span className="special-price">₹{item.price}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.15} className="specials-cta">
          <a className="btn btn-gold" href={`tel:${site.phonePrimary.tel}`}>
            <PhoneIcon />
            Order These
          </a>
        </Reveal>
      </div>
    </section>
  );
}