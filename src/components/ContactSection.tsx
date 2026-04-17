import { useState, type FormEvent } from 'react';
import { business } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  const formRef = useScrollAnimation<HTMLFormElement>();
  const infoRef = useScrollAnimation<HTMLDivElement>();
  const mapRef = useScrollAnimation<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-subtle/40" aria-label="Contato">
      <div className="container-x">
        <SectionHeading
          eyebrow="Fale com a gente"
          title="Contato & Localização"
          subtitle="Estamos no Bom Retiro, prontos para receber você e seu pet."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="reveal bg-white rounded-3xl p-8 md:p-10 border border-subtle shadow-soft"
            noValidate
          >
            <div className="space-y-5">
              <Field label="Nome" name="nome" type="text" placeholder="Seu nome completo" />
              <Field label="E-mail" name="email" type="email" placeholder="voce@email.com" />
              <Field label="Telefone" name="telefone" type="tel" placeholder="(41) 9 0000-0000" />
              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-primary mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  required
                  placeholder="Conte um pouco sobre seu pet e como podemos ajudar."
                  className="w-full px-4 py-3.5 rounded-2xl border border-subtle bg-bg focus:bg-white focus:border-accent transition-colors text-sm resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary mt-7 w-full sm:w-auto"
              disabled={submitted}
            >
              {submitted ? 'Mensagem enviada!' : 'Enviar Mensagem'}
            </button>
          </form>

          <div ref={infoRef} className="reveal space-y-5">
            <InfoCard
              icon="📍"
              title="Endereço"
              lines={[business.address, `${business.neighborhood}, ${business.city}`]}
            />
            <InfoCard
              icon="📞"
              title="Telefone"
              lines={[business.phone]}
              href={`tel:${business.phoneDigits}`}
            />
            <InfoCard
              icon="💬"
              title="WhatsApp"
              lines={['Atendimento rápido e prático']}
              href={business.whatsapp}
              external
            />
            <InfoCard
              icon="🕒"
              title="Horários"
              lines={business.hours.map((h) => `${h.day}: ${h.time}`)}
            />
          </div>
        </div>

        <div
          ref={mapRef}
          className="reveal mt-10 rounded-3xl overflow-hidden border border-subtle shadow-soft bg-white"
        >
          <iframe
            title="Localização da Vila dos Bichos"
            src={business.mapEmbed}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

function Field({ label, name, type, placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-primary mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full px-4 py-3.5 rounded-2xl border border-subtle bg-bg focus:bg-white focus:border-accent transition-colors text-sm"
      />
    </div>
  );
}

interface InfoCardProps {
  icon: string;
  title: string;
  lines: string[];
  href?: string;
  external?: boolean;
}

function InfoCard({ icon, title, lines, href, external }: InfoCardProps) {
  const content = (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 rounded-xl bg-subtle flex items-center justify-center text-xl shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs tracking-[0.2em] uppercase font-semibold text-accent">
          {title}
        </p>
        <div className="mt-2 space-y-1 text-sm text-ink">
          {lines.map((l) => (
            <p key={l} className="leading-relaxed">
              {l}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  const className =
    'block bg-white rounded-3xl p-6 border border-subtle transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5';

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
