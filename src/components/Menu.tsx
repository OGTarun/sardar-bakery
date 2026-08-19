import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { snackCategories } from '../data/menu';
import { site } from '../data/site';
import { EASE } from '../lib/motion';
import SectionHead from './SectionHead';
import { Reveal } from './Reveal';
import { PhoneIcon } from './icons';
import './Menu.css';

export default function Menu() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const category = snackCategories[active];

  return (
    <section id="menu" className="section menu">
      <div className="grain" aria-hidden="true" />
      <div className="container">
        <SectionHead
          eyebrow="Our Menu"
          align="center"
          title={
            <>
              Something for <em>Every Craving</em>
            </>
          }
          sub="Crispy patties, rolls, burgers, sandwiches, pizza, pasta and vada pav — freshly prepared at the counter, with prices straight from our menu."
        />

        <Reveal className="menu-tabs-scroll">
          <div className="menu-tabs" role="tablist" aria-label="Menu categories">
            {snackCategories.map((cat, i) => {
              const selected = i === active;
              return (
                <button
                  key={cat.title}
                  role="tab"
                  aria-selected={selected}
                  className={`menu-tab${selected ? ' is-selected' : ''}`}
                  onClick={() => setActive(i)}
                >
                  {selected && (
                    <motion.span
                      className="menu-tab-pill"
                      layoutId="menu-pill"
                      transition={reduce ? { duration: 0 } : { duration: 0.45, ease: EASE }}
                    />
                  )}
                  <span className="menu-tab-label">{cat.title}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="menu-panel-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={category.title}
              role="tabpanel"
              className="menu-panel"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="menu-panel-head">
                <h3 className="menu-panel-title">{category.title}</h3>
                <span className="menu-panel-count">
                  {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
                </span>
              </div>

              <ul className="menu-list">
                {category.items.map((item) => (
                  <li className="menu-row" key={item.name}>
                    <span className="menu-name">{item.name}</span>
                    <span className="menu-leader" aria-hidden="true" />
                    <span className="menu-price">₹{item.price}</span>
                    <a
                      className="menu-order"
                      href={`tel:${site.phonePrimary.tel}`}
                      aria-label={`Order ${item.name}`}
                    >
                      Order
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </Reveal>

        <Reveal delay={0.1} className="menu-cta">
          <p className="menu-cta-label">Planning an order? Call the counter — we'll have it fresh and ready.</p>
          <a className="btn btn-dark" href={`tel:${site.phonePrimary.tel}`}>
            <PhoneIcon />
            Call to Order
          </a>
          <span className="menu-cta-note">Open daily {site.hours.daily}</span>
        </Reveal>
      </div>
    </section>
  );
}