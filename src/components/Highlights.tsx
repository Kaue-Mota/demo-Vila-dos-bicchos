import { highlights } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Highlights() {
  return (
    <section className="py-12 md:py-20" aria-label="Destaques da clínica">
      <div className="container-x grid md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <HighlightCard key={h.id} index={i} icon={h.icon} title={h.title} description={h.description} />
        ))}
      </div>
    </section>
  );
}

interface HighlightCardProps {
  index: number;
  icon: string;
  title: string;
  description: string;
}

function HighlightCard({ index, icon, title, description }: HighlightCardProps) {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className="reveal group bg-white rounded-3xl p-8 border border-subtle shadow-soft transition-all duration-500 hover:shadow-card hover:-translate-y-1"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-subtle flex items-center justify-center text-2xl mb-5 transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="font-display font-bold text-xl text-primary">{title}</h3>
      <p className="mt-3 text-muted text-sm leading-relaxed">{description}</p>
      <div className="mt-6 flex items-center gap-2 text-accent font-semibold text-sm">
        <span className="h-px w-6 bg-accent transition-all duration-500 group-hover:w-10" />
      </div>
    </article>
  );
}
