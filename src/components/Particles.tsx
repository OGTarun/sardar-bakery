import { useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';
import './Particles.css';

type ParticlesProps = {
  count?: number;
  className?: string;
  palette?: string[];
};

export default function Particles({ count = 16, className = '', palette }: ParticlesProps) {
  const reduce = useReducedMotion();

  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 3 + Math.random() * 6,
        dur: 12 + Math.random() * 16,
        delay: -Math.random() * 24,
        drift: (Math.random() - 0.5) * 90,
        opacity: 0.25 + Math.random() * 0.5,
      })),
    [count],
  );

  if (reduce) return null;

  const paletteSet = palette ?? [
    'var(--gold)',
    'var(--terra)',
    'var(--gold-soft)',
    'var(--wine-3)',
  ];

  return (
    <div className={`particles ${className}`} aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          className="particle"
          style={
            {
              left: `${d.left}%`,
              width: `${d.size}px`,
              height: `${d.size}px`,
              background: paletteSet[d.id % paletteSet.length],
              '--dur': `${d.dur}s`,
              '--delay': `${d.delay}s`,
              '--drift': `${d.drift}px`,
              '--po': d.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}