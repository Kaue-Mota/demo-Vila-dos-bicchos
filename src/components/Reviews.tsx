import { reviews } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

export default function Reviews() {
  return (
    <section className="py-20 md:py-28" aria-label="Avaliações de clientes">
      <div className="container-x">
        <SectionHeading
          eyebrow="Quem confia recomenda"
          title="O Que Nossos Clientes Dizem"
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ReviewCard
              key={r.id}
              index={i}
              text={r.text}
              author={r.author}
              rating={r.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ReviewCardProps {
  index: number;
  text: string;
  author: string;
  rating: number;
}

function ReviewCard({ index, text, author, rating }: ReviewCardProps) {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className="reveal relative bg-white rounded-3xl p-8 border border-subtle shadow-soft transition-all duration-500 hover:shadow-card hover:-translate-y-1"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <span
        aria-hidden="true"
        className="absolute top-5 right-6 font-display text-6xl text-subtle leading-none"
      >
        &ldquo;
      </span>
      <div className="flex gap-1 text-accent mb-5" aria-label={`${rating} de 5 estrelas`}>
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
            <path d="M12 2l2.9 6.9 7.5.6-5.7 4.9 1.8 7.3L12 17.8 5.5 21.7l1.8-7.3L1.6 9.5l7.5-.6L12 2z" />
          </svg>
        ))}
      </div>
      <p className="text-ink/90 text-sm leading-relaxed relative z-10">{text}</p>
      <div className="mt-7 pt-5 border-t border-subtle flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary text-white flex items-center justify-center text-sm font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-primary text-sm">{author}</p>
          <p className="text-xs text-muted">Cliente verificada</p>
        </div>
      </div>
    </article>
  );
}
