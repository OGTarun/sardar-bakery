import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionHeadProps = {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: 'center' | 'left';
  tone?: 'cream' | 'wine';
};

export default function SectionHead({ eyebrow, title, sub, align = 'center', tone = 'cream' }: SectionHeadProps) {
  return (
    <div className={`section-head section-head--${align} section-head--${tone}`}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="section-sub">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}