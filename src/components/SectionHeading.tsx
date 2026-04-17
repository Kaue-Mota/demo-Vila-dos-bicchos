import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${
        align === 'center' ? 'text-center mx-auto' : 'text-left'
      } max-w-3xl ${align === 'center' ? 'items-center' : ''}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`section-title ${eyebrow ? 'mt-4' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
