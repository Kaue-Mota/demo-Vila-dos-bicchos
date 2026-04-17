interface LogoProps {
  variant?: 'light' | 'dark';
}

export default function Logo({ variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary';
  const iconBg = variant === 'light' ? 'bg-white/15' : 'bg-primary';
  const iconColor = variant === 'light' ? 'text-white' : 'text-white';

  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${iconBg} ${iconColor} w-10 h-10 rounded-xl flex items-center justify-center shadow-soft`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <circle cx="7" cy="7" r="2.2" />
          <circle cx="12" cy="5" r="2.2" />
          <circle cx="17" cy="7" r="2.2" />
          <circle cx="4.5" cy="12" r="1.9" />
          <circle cx="19.5" cy="12" r="1.9" />
          <path d="M12 10.5c-3.2 0-5.8 2.4-5.8 5.3 0 2 1.5 3.4 3.3 3.4 1.2 0 1.7-.5 2.5-.5s1.3.5 2.5.5c1.8 0 3.3-1.4 3.3-3.4 0-2.9-2.6-5.3-5.8-5.3z" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display font-extrabold text-lg ${textColor}`}>
          Vila dos Bichos
        </span>
        <span
          className={`text-[10px] tracking-[0.2em] uppercase ${
            variant === 'light' ? 'text-white/70' : 'text-muted'
          }`}
        >
          Veterinária
        </span>
      </div>
    </div>
  );
}
