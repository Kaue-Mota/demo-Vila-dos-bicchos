import { stats } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Stats() {
  return (
    <section className="py-20 md:py-28" aria-label="Números da clínica">
      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <StatCard key={s.id} index={i} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  index: number;
  value: string;
  label: string;
}

function StatCard({ index, value, label }: StatCardProps) {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal bg-white rounded-3xl p-7 md:p-9 border border-subtle text-center md:text-left transition-all duration-500 hover:border-accent/50 hover:shadow-soft"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <p className="font-display font-extrabold text-accent text-4xl md:text-6xl leading-none tracking-tight">
        {value}
      </p>
      <p className="mt-3 md:mt-4 text-muted text-sm md:text-base">{label}</p>
    </div>
  );
}
