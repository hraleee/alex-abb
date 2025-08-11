import Image from "next/image";

export default function Home() {
  return (
    <div className="relative font-sans min-h-screen p-0">
      {/* Sfondo immagine in alto */}
      <div className="absolute inset-0 w-full h-[70vh] md:h-[80vh] pointer-events-none select-none z-0">
        <img
          src="/alex_abb.webp"
          alt="Sfondo Alex Abbigliamento"
          className="w-full h-full object-cover object-center md:object-left-top"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Contenuto principale sopra lo sfondo */}
      <div className="relative z-10">
        {/* Hero */}
        <section className="h-[70vh] md:h-[80vh] max-w-5xl mx-auto px-4 flex items-end md:items-center">
          <div className="pb-8 md:pb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-white">Stile, qualità e cortesia</h1>
            <p className="text-gray-200 mt-3 max-w-2xl">
              Capi selezionati per un look curato e contemporaneo. Dal 2015 a Pagani, con attenzione a vestibilità e dettagli.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/promozioni" className="inline-block bg-white text-black px-5 py-2 rounded font-semibold hover:opacity-90">Scopri le promozioni</a>
              <a href="/contattaci" className="inline-block bg-black/80 text-white px-5 py-2 rounded font-semibold hover:bg-black">Contattaci</a>
            </div>
          </div>
        </section>

        {/* Valori */}
        <section className="max-w-5xl mx-auto px-4 mt-10">
          <h2 className="text-2xl font-semibold mb-6">Perché sceglierci</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[{title: "Qualità", desc: "Tessuti e finiture durevoli."},{title: "Stile", desc: "Capi attuali e facili da abbinare."},{title: "Consulenza", desc: "Ti aiutiamo a scegliere il meglio per te."}].map(({title, desc}) => (
              <div key={title} className="rounded-lg border border-gray-200 p-5 hover:shadow-sm transition bg-white">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-gray-700 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Galleria */}
        <section className="max-w-5xl mx-auto px-4 mt-12">
          <h2 className="text-2xl font-semibold mb-6">Uno sguardo in negozio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["/img1.jpg", "/img2.jpg", "/img3.jpg"].map((src, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-200"
              >
                <Image
                  src={src}
                  alt={`Vetrina ${idx + 1}`}
                  fill
                  className={`object-cover ${
                    idx === 0
                      ? "object-[50%_30%]" // img1: leggermente alta
                      : idx === 1
                      ? "object-[20%_80%]" // img2: un po' più in basso
                      : idx === 2
                      ? "object-[40%_60%]" // img2: un po' più in basso
                      : "object-center" // img3: centrale
                  }`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contatti rapidi */}
        <section className="max-w-5xl mx-auto px-4 mt-12 grid md:grid-cols-2 gap-8">
          <div className="rounded-lg border border-gray-200 p-6 bg-white">
            <h3 className="text-xl font-semibold">Contatti rapidi</h3>
            <div className="mt-4 space-y-3 text-gray-700">
              <p>
                WhatsApp: <a href="https://wa.me/3336876386" target="_blank" rel="noopener noreferrer" className="text-green-700 underline hover:opacity-80 font-medium">333 687 6386</a>
              </p>
              <p>
                Email: <a href="mailto:alexabbigliamento@gmail.com" className="text-blue-700 underline hover:opacity-80 font-medium">alexabbigliamento@gmail.com</a>
              </p>
              <p>Indirizzo: Via Costantino Astarita, 25, 84016 Pagani (SA)</p>
            </div>
            <div className="mt-4">
              <a href="/contattaci" className="inline-block bg-black text-white px-4 py-2 rounded hover:opacity-90 font-semibold">Vai alla pagina contatti</a>
            </div>
          </div>

          {/* Posizione */}
          <div className="rounded-lg border border-gray-200 p-6 bg-white">
            <h3 className="text-xl font-semibold">Dove trovarci</h3>
            <p className="text-gray-700 mt-2">Siamo in centro a Pagani. Apri la mappa per il percorso migliore.</p>
            <div className="mt-4">
              <a href="/dove-siamo" className="inline-block bg-black text-white px-4 py-2 rounded hover:opacity-90 font-semibold">Vai alla pagina dove siamo</a>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </div>

      {/* Pulsante WhatsApp flottante */}
      <a
        href="https://wa.me/3336876386"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700"
        aria-label="Scrivici su WhatsApp"
      >
        <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-5 h-5" />
        <span className="hidden sm:inline font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}
