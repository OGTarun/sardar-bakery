import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { images } from '../data/site';
import { EASE } from '../lib/motion';
import SectionHead from './SectionHead';
import './Gallery.css';

export default function Gallery() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const ySlow = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 24, reduce ? 0 : -24]);

  return (
    <section id="gallery" className="section gallery" ref={ref}>
      <div className="grain" aria-hidden="true" />
      <div className="container">
        <SectionHead
          eyebrow="The Gallery"
          align="left"
          title={
            <>
              Fresh From <em>the Counter</em>
            </>
          }
          sub="Cakes, pastries, patties, pizzas and everyday bakes — a glimpse of what keeps the counter at Sardar Bakery busy."
        />

        <motion.div className="gal-grid" style={{ y: ySlow }}>
          {images.gallery.map((img, i) => (
            <motion.figure
              className={`gal-item g${i + 1}`}
              key={img.src + i}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: (i % 3) * 0.09, ease: EASE }}
            >
              <img src={img.src} alt={img.alt} width={800} height={1000} loading="lazy" decoding="async" />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}