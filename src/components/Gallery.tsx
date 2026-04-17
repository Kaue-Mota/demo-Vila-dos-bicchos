import { gallery } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  return (
    <section id="estrutura" className="py-20 md:py-28 bg-subtle/40" aria-label="Nossa estrutura">
      <div className="container-x">
        <SectionHeading
          eyebrow="Ambiente acolhedor"
          title="Nossa Estrutura"
          subtitle="Ambiente preparado para receber seu pet com todo o conforto."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {gallery.map((img, i) => (
            <GalleryTile
              key={img.id}
              index={i}
              src={img.src}
              alt={img.alt}
              tall={i === 0 || i === 4}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface GalleryTileProps {
  index: number;
  src: string;
  alt: string;
  tall?: boolean;
}

function GalleryTile({ index, src, alt, tall }: GalleryTileProps) {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal group relative overflow-hidden rounded-2xl md:rounded-3xl bg-subtle ${
        tall ? 'md:row-span-2 md:aspect-[4/5]' : 'aspect-[4/3]'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <p className="text-sm font-medium">{alt}</p>
      </div>
    </div>
  );
}
