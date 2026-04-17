import { business } from '../data';

export default function FloatingWhatsApp() {
  return (
    <a
      href={business.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white shadow-card animate-pulse-soft transition-transform duration-300 hover:scale-105"
    >
      <span className="flex items-center justify-center w-14 h-14 md:w-12 md:h-12 rounded-full">
        <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-6 md:h-6" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01a1.093 1.093 0 0 0-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.42 1.27 4.86L2 22l5.3-1.39A9.9 9.9 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      </span>
      <span className="hidden md:block pr-5 font-semibold text-sm">
        Agendar Consulta
      </span>
    </a>
  );
}
