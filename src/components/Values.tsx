import { values } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

export default function Values() {
  return (
    <section className="py-20 md:py-28 bg-subtle/40" aria-label="Nossos valores">
      <div className="container-x">
        <SectionHeading
          eyebrow="O que nos move"
          title="Nossos Valores"
          subtitle="Princípios que guiam cada atendimento na Vila dos Bichos."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ValueCard
              key={v.id}
              index={i}
              icon={v.icon}
              title={v.title}
              description={v.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ValueCardProps {
  index: number;
  icon: string;
  title: string;
  description: string;
}

function ValueCard({ index, icon, title, description }: ValueCardProps) {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className="reveal group relative bg-white rounded-3xl p-9 border border-subtle overflow-hidden transition-all duration-500 hover:shadow-card hover:-translate-y-1"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <span
        aria-hidden="true"
        className="absolute top-5 right-6 font-display font-extrabold text-7xl text-subtle leading-none select-none transition-colors duration-500 group-hover:text-accent/20"
      >
        0{index + 1}
      </span>
      <div className="w-14 h-14 rounded-2xl bg-subtle flex items-center justify-center text-2xl mb-6 transition-all duration-500 group-hover:bg-accent group-hover:scale-110">
        {icon}
      </div>
      <h3 className="relative font-display font-bold text-2xl text-primary">
        {title}
      </h3>
      <p className="relative mt-3 text-muted leading-relaxed">{description}</p>
    </article>
  );
}
