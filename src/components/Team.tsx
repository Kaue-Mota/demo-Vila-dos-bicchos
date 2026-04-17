import { team } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

export default function Team() {
  return (
    <section id="equipe" className="py-20 md:py-28" aria-label="Nossa equipe">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nossos profissionais"
          title="Conheça Nossa Equipe"
          subtitle="Veterinários apaixonados pelo que fazem."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-7">
          {team.map((member, i) => (
            <MemberCard
              key={member.id}
              index={i}
              name={member.name}
              specialty={member.specialty}
              bio={member.bio}
              photo={member.photo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface MemberCardProps {
  index: number;
  name: string;
  specialty: string;
  bio: string;
  photo: string;
}

function MemberCard({ index, name, specialty, bio, photo }: MemberCardProps) {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className="reveal group bg-white rounded-3xl overflow-hidden border border-subtle transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-subtle">
        <img
          src={photo}
          alt={`Foto de ${name}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/70 to-transparent" />
        <span className="absolute top-5 left-5 bg-bg/90 backdrop-blur text-primary text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
          {specialty}
        </span>
      </div>
      <div className="p-7">
        <h3 className="font-display font-bold text-xl text-primary">{name}</h3>
        <p className="mt-3 text-muted text-sm leading-relaxed">{bio}</p>
      </div>
    </article>
  );
}
