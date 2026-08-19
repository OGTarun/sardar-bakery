import { pastries } from '../data/menu';
import { images } from '../data/site';
import { Reveal } from './Reveal';
import SectionHead from './SectionHead';
import './Pastries.css';

export default function Pastries() {
  return (
    <section id="pastries" className="section pastries">
      <div className="grain" aria-hidden="true" />
      <div className="container">
        <SectionHead
          eyebrow="Sweet Counter"
          align="left"
          title={
            <>
              Pastries &amp; <em>Desserts</em>
            </>
          }
          sub="Everyday indulgence — pastries, puddings, cupcakes, donuts and more, baked fresh for the counter."
        />

        <div className="pastries-layout">
          <Reveal className="pastries-visual">
            <div className="pastries-visual-frame">
              <img
                src={images.cupcakes}
                alt="Cupcakes baked fresh at the Sardar Bakery sweet counter"
                width={900}
                height={1100}
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="pastries-visual-cap">Baked fresh, every day</span>
          </Reveal>

          <div className="pastries-grid">
            {pastries.map((item, i) => (
              <Reveal key={item.name} delay={(i % 3) * 0.06} className="pastry-card">
                <span className="pastry-name">{item.name}</span>
                <span className="pastry-leader" aria-hidden="true" />
                <span className="pastry-price">₹{item.price}</span>
              </Reveal>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}