import { images } from '../data/site';
import './BrandLogo.css';

type BrandLogoProps = {
  className?: string;
  lazy?: boolean;
};

export default function BrandLogo({ className = '', lazy = false }: BrandLogoProps) {
  return (
    <img
      className={`logo ${className}`}
      src={images.logo}
      alt="Sardar Bakery"
      width={1456}
      height={860}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
    />
  );
}