import { services } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-subtle/40" aria-label="Nossos serviços">
      <div className="container-x">
        <SectionHeading
          eyebrow="O que oferecemos"
          title="Nossos Serviços"
          subtitle="Atendimento completo para seu pet, com qualidade e carinho."
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((s, i) => (
            <ServiceCard
              key={s.id}
              index={i}
              icon={s.icon}
              name={s.name}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  index: number;
  icon: string;
  name: string;
  description: string;
}

function ServiceCard({ index, icon, name, description }: ServiceCardProps) {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className="reveal group bg-white rounded-2xl p-6 md:p-7 border border-subtle transition-all duration-500 hover:border-accent/50 hover:shadow-card hover:-translate-y-1"
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-subtle flex items-center justify-center text-xl mb-5 transition-all duration-500 group-hover:bg-accent group-hover:scale-110">
        <span className="transition-transform duration-500 group-hover:scale-110">
          {icon}
        </span>
      </div>
      <h3 className="font-display font-bold text-base md:text-lg text-primary">
        {name}
      </h3>
      <p className="mt-2 text-muted text-sm leading-relaxed">{description}</p>
    </article>
  );
}
