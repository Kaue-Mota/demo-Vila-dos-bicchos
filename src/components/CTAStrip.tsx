import { business } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTAStrip() {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="py-16 md:py-24" aria-label="Chamada para ação">
      <div className="container-x">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-[2.5rem] bg-primary text-white p-10 md:p-16 lg:p-20"
        >
          <div className="relative z-10 grid lg:grid-cols-[1.5fr_auto] gap-8 items-center">
            <div>
              <span className="eyebrow text-accent/90">Estamos aqui por vocês</span>
              <h2 className="mt-4 font-display font-extrabold text-3xl md:text-5xl leading-tight">
                Pronto para cuidar do seu pet?
              </h2>
              <p className="mt-5 text-white/75 text-base md:text-lg max-w-xl">
                Agende uma consulta e descubra por que a Vila dos Bichos é
                referência em Curitiba.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={`tel:${business.phoneDigits}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-accent text-white font-semibold text-sm transition duration-300 hover:scale-[1.03] hover:brightness-110"
              >
                Agendar Consulta
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 backdrop-blur border-2 border-white/20 text-white font-semibold text-sm transition duration-300 hover:bg-white hover:text-primary"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute top-10 right-10 text-[14rem] opacity-[0.06] font-black select-none"
          >
            🐾
          </div>
        </div>
      </div>
    </section>
  );
}
