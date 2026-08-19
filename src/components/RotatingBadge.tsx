import './RotatingBadge.css';

type RotatingBadgeProps = {
  text?: string;
  center?: string;
};

export default function RotatingBadge({
  text = 'Cakes · Bakery · Fast Food · Fresh Daily · ',
  center = 'S',
}: RotatingBadgeProps = {}) {
  const multi = center.length > 1;
  return (
    <div className="badge">
      <svg className="badge-ring" viewBox="0 0 100 100">
        <defs>
          <path id="badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text>
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className={`badge-center${multi ? ' badge-center--small' : ''}`} aria-hidden="true">
        {center}
      </span>
    </div>
  );
}