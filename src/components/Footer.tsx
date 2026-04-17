import { Link } from 'react-router-dom';
import { business } from '../data';
import Logo from './Logo';

const quickLinks = [
  { label: 'A Clínica', href: '/sobre', type: 'route' as const },
  { label: 'Serviços', href: '/#servicos', type: 'anchor' as const },
  { label: 'Equipe', href: '/#equipe', type: 'anchor' as const },
  { label: 'Contato', href: '/#contato', type: 'anchor' as const },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-x py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-white/70 text-sm leading-relaxed max-w-xs">
            {business.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.25em] uppercase text-accent font-semibold mb-5">
            Contato
          </h3>
          <address className="not-italic space-y-3 text-sm text-white/80 leading-relaxed">
            <p>
              {business.address}
              <br />
              {business.neighborhood}, {business.city}
            </p>
            <p>
              <a
                href={`tel:${business.phoneDigits}`}
                className="hover:text-accent transition-colors"
              >
                {business.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${business.email}`}
                className="hover:text-accent transition-colors"
              >
                {business.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.25em] uppercase text-accent font-semibold mb-5">
            Horários
          </h3>
          <ul className="space-y-3 text-sm text-white/80">
            {business.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="font-medium">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.25em] uppercase text-accent font-semibold mb-5">
            Links Rápidos
          </h3>
          <ul className="space-y-3 text-sm text-white/80">
            {quickLinks.map((l) =>
              l.type === 'route' ? (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ) : (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-accent transition-colors">
                    {l.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <p>© 2025 Vila dos Bichos Veterinária. Todos os direitos reservados.</p>
          <p>Curitiba · Paraná · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
