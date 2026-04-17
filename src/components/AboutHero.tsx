export default function AboutHero() {
  return (
    <section
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden"
      aria-label="Sobre a Vila dos Bichos"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1600&q=80&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg" />
      </div>

      <div
        className="container-x opacity-0 animate-fade-in-up"
        style={{ animationDelay: '120ms' }}
      >
        <span className="eyebrow">Curitiba · Bom Retiro</span>
        <h1 className="mt-5 font-display font-extrabold text-primary leading-[1.05] text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
          Sobre a{' '}
          <span className="relative inline-block">
            <span className="relative z-10">Vila dos Bichos</span>
            <span className="absolute left-0 right-0 bottom-1 h-3 bg-accent/30 -z-0 rounded-sm" />
          </span>
        </h1>
        <p className="mt-6 text-muted text-base md:text-lg max-w-2xl leading-relaxed">
          Uma clínica feita por quem ama animais — para tutores que querem o
          melhor para seus pets.
        </p>
      </div>
    </section>
  );
}
