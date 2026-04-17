export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden"
      aria-label="Seção principal"
    >
      <div className="container-x grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center min-h-[calc(85vh-5rem)]">
        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        >
          <span className="eyebrow">Veterinária em Curitiba</span>
          <h1 className="mt-5 font-display font-extrabold text-primary leading-[1.05] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            O melhor cuidado
            <br />
            para quem{' '}
            <span className="relative inline-block">
              <span className="relative z-10">você ama</span>
              <span className="absolute left-0 right-0 bottom-1 md:bottom-2 h-2.5 md:h-3.5 bg-accent/30 -z-0 rounded-sm" />
            </span>
            .
          </h1>
          <p className="mt-6 text-muted text-base md:text-lg max-w-lg leading-relaxed">
            Clínica veterinária no Bom Retiro com atendimento completo,
            dermatologia especializada e pet shop — tudo em um só lugar, com o
            cuidado que seu melhor amigo merece.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="https://wa.me/5541987458356"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Consulta
            </a>
            <a href="/sobre" className="btn-outline">
              Conheça a Clínica
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-bg bg-[url('https://images.unsplash.com/photo-1517849845537-4d257902454a?w=120&q=80')] bg-cover bg-center" />
              <div className="w-10 h-10 rounded-full border-2 border-bg bg-[url('https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=120&q=80')] bg-cover bg-center" />
              <div className="w-10 h-10 rounded-full border-2 border-bg bg-[url('https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=120&q=80')] bg-cover bg-center" />
            </div>
            <p className="text-muted">
              <span className="text-primary font-semibold">+5.000 pets</span>{' '}
              cuidados com carinho
            </p>
          </div>
        </div>

        <div
          className="relative opacity-0 animate-fade-in-up"
          style={{ animationDelay: '350ms' }}
        >
          <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[2.5rem] overflow-hidden shadow-card">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900&q=80&auto=format&fit=crop"
              alt="Cachorro feliz com o tutor"
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>

          <div className="hidden md:flex absolute -left-6 bottom-10 bg-white rounded-2xl shadow-card px-5 py-4 items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-subtle flex items-center justify-center text-xl">
              💚
            </div>
            <div>
              <p className="text-xs text-muted leading-none">Avaliação</p>
              <p className="text-primary font-bold text-lg leading-none mt-1">
                4.9 / 5.0
              </p>
            </div>
          </div>

          <div className="hidden md:flex absolute -right-4 top-10 bg-primary text-white rounded-2xl shadow-card px-5 py-4 items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-accent/30 flex items-center justify-center text-xl">
              🐾
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/70 leading-none">
                Bom Retiro · CWB
              </p>
              <p className="font-bold text-sm leading-none mt-1">
                Seg a Sáb
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/3 -left-32 w-80 h-80 bg-subtle rounded-full blur-3xl" aria-hidden="true" />
    </section>
  );
}
