import { services } from '../data/menu';
import { Reveal } from './Reveal';
import { TruckIcon, PackageIcon, PrinterIcon, CreamIcon } from './icons';
import './Services.css';

const icons = [TruckIcon, PackageIcon, PrinterIcon, CreamIcon];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="grain" aria-hidden="true" />
      <div className="container">
        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={s.title} delay={i * 0.08} className="service">
                <span className="service-icon">
                  <Icon />
                </span>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-text">{s.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}