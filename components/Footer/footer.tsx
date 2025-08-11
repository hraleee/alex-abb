export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-100 pt-10 pb-6 mt-16 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 px-4">
        {/* Logo e descrizione */}
        <div className="flex flex-col items-start gap-3 max-w-xs">
          <img
            src="/alex_logo_abb.png"
            alt="Alex Abbigliamento logo"
            className="w-20 h-20 object-contain rounded bg-white p-1 mb-2"
          />
          <span className="text-xl font-bold tracking-wide">Alex Abbigliamento</span>
          <span className="text-sm text-gray-400">Abbigliamento uomo e accessori a Pagani. Qualità, stile e cortesia dal 2015.</span>
        </div>
        {/* Link utili */}
        <div className="flex flex-col gap-2 min-w-[120px]">
          <span className="font-semibold mb-1">Link utili</span>
          <a href="/" className="hover:text-yellow-300 transition">Home</a>
          <a href="/chi-siamo" className="hover:text-yellow-300 transition">Chi siamo</a>
          <a href="/contattaci" className="hover:text-yellow-300 transition">Contattaci</a>
          <a href="/dove-siamo" className="hover:text-yellow-300 transition">Dove siamo</a>
          <a href="/promozioni" className="hover:text-yellow-300 transition">Promozioni</a>
        </div>
        {/* Contatti */}
        <div className="flex flex-col gap-2 min-w-[160px]">
          <span className="font-semibold mb-1">Contatti</span>
          <a href="https://wa.me/3336876386" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition">
            <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-5 h-5 inline" /> WhatsApp
          </a>
          <a href="mailto:alexabbigliamento@gmail.com" className="hover:text-blue-300 transition">alexabbigliamento@gmail.com</a>
          <span className="text-gray-400 text-sm">Via Costantino Astarita, 25, 84016 Pagani (SA)</span>
        </div>
        {/* Social */}
        <div className="flex flex-col gap-2 min-w-[120px]">
          <span className="font-semibold mb-1">Seguici</span>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/Sal.Alexuomo.03" className="hover:text-blue-400 transition" aria-label="Facebook"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
            <a href="https://www.instagram.com/salvatorealex03?igsh=MTczdWtlOXR2bGU1aQ==" className="hover:text-pink-400 transition" aria-label="Instagram"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.292 2.393 1.272 3.373.98.98 2.092 1.213 3.373 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.292 3.373-1.272.98-.98 1.213-2.092 1.272-3.373.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.292-2.393-1.272-3.373-.98-.98-2.092-1.213-3.373-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-8 border-t border-gray-800 pt-4 px-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-2">
        <span>&copy; 2025 Alex Abbigliamento Uomo Pagani. Tutti i diritti riservati.</span>
        <span>Realizzato con ❤️ da Alex Abbigliamento</span>
      </div>
    </footer>
  );
}
