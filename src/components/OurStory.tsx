import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function OurStory() {
  const textRef = useScrollAnimation<HTMLDivElement>();
  const imgRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-20 md:py-28" aria-label="Nossa história">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div ref={textRef} className="reveal">
          <span className="eyebrow">Nossa história</span>
          <h2 className="mt-4 section-title">
            Nascemos da paixão por cuidar de quem não pode falar.
          </h2>
          <div className="mt-7 space-y-5 text-muted text-base md:text-lg leading-relaxed">
            <p>
              A Vila dos Bichos nasceu da paixão por cuidar de quem não pode
              falar. Nossa clínica em Curitiba oferece atendimento veterinário
              completo, com foco em dermatologia e clínica geral, sempre com o
              cuidado e carinho que cada pet merece.
            </p>
            <p>
              Acreditamos que cada animal é único — e nosso atendimento reflete
              isso. Estrutura moderna, equipe especializada e uma abordagem
              humana fazem da Vila dos Bichos referência na região do Bom
              Retiro.
            </p>
          </div>

          <div className="mt-9 flex items-center gap-6 border-t border-subtle pt-7">
            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-xl">
              🐾
            </div>
            <div>
              <p className="font-display font-bold text-primary text-lg">
                Desde 2017 em Curitiba
              </p>
              <p className="text-sm text-muted">
                Cuidando de pets no coração do Bom Retiro.
              </p>
            </div>
          </div>
        </div>

        <div ref={imgRef} className="reveal relative">
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-card">
            <img
              src="https://images.unsplash.com/photo-1581888227599-779811939961?w=900&q=80&auto=format&fit=crop"
              alt="Veterinária examinando um cachorro com carinho"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-8 -left-8 w-48 h-48 rounded-3xl overflow-hidden shadow-card border-8 border-bg">
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80&auto=format&fit=crop"
              alt="Gato sendo acolhido"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
