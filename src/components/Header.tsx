import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data';
import { useScrollHeader } from '../hooks/useScrollHeader';
import Logo from './Logo';

export default function Header() {
  const scrolled = useScrollHeader(16);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === '/sobre') return location.pathname === '/sobre';
    if (href.startsWith('/#')) return location.pathname === '/';
    return false;
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md shadow-soft'
          : 'bg-bg/70 backdrop-blur-sm'
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" aria-label="Ir para a página inicial">
          <Logo />
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            if (link.href.startsWith('/#')) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors ${
                    active ? 'text-primary' : 'text-ink/80 hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  active
                    ? 'text-primary after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:bg-accent after:rounded-full'
                    : 'text-ink/80 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="https://wa.me/5541987458356"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-primary"
        >
          Agendar Consulta
        </a>

        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-11 h-11 rounded-xl flex items-center justify-center bg-subtle text-primary"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-20 bg-bg transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav
          aria-label="Navegação móvel"
          className="container-x flex flex-col py-10 gap-2"
        >
          {navLinks.map((link, i) =>
            link.href.startsWith('/#') ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-4 text-2xl font-display font-bold text-primary border-b border-subtle"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="py-4 text-2xl font-display font-bold text-primary border-b border-subtle"
              >
                {link.label}
              </Link>
            ),
          )}
          <a
            href="https://wa.me/5541987458356"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 w-full"
          >
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
}
