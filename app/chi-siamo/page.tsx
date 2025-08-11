import { Metadata } from "next";
import Image from "next/image";
import {
  ShieldCheck,
  Sparkles,
  ShoppingBag,
  Clock,
  Handshake,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Chi siamo | Alex Abbigliamento",
  description: "Scopri la storia e i valori di Alex Abbigliamento a Pagani.",
};

export default function ChiSiamoPage() {
  return (
    <main className="pt-20 md:pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[280px] md:h-[380px] w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Video negozio Alex Abbigliamento"
        >
          <source src="/abb_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-start">
          <div className="w-full max-w-5xl mx-auto px-4 pb-6 md:pb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Chi siamo</h1>
            <p className="text-gray-200 max-w-2xl mt-2">
              Dal 2015 selezioniamo capi per uno stile curato e contemporaneo, con
              attenzione a qualità, vestibilità e dettagli.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 mt-10">
        {/* Storia e mission */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-3">La nostra storia</h2>
            <p className="text-gray-700 leading-relaxed">
              Alex Abbigliamento nasce a Pagani dalla passione per il buon gusto e
              la cura del dettaglio. Selezioniamo brand e capi che uniscono
              materiali di qualità e linee versatili, adatti alla vita di tutti i
              giorni quanto alle occasioni speciali.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Il nostro obiettivo è consigliare con sincerità e competenza, per un
              guardaroba che rispecchi la tua personalità e ti faccia sentire a tuo agio.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-200">
            <Image
              src="/alex_logo_abb.png"
              alt="Alex Abbigliamento logo"
              fill
              className="object-contain p-6 bg-white"
            />
          </div>
        </section>

        {/* Valori */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">I nostri valori</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                Icon: ShieldCheck,
                title: "Qualità",
                desc: "Selezione attenta di tessuti e rifiniture durevoli.",
              },
              {
                Icon: Sparkles,
                title: "Stile",
                desc: "Capi attuali, facili da abbinare, sempre curati.",
              },
              {
                Icon: ShoppingBag,
                title: "Personalizzazione",
                desc: "Consigli su misura per il tuo gusto e la tua figura.",
              },
              {
                Icon: Clock,
                title: "Cura del tempo",
                desc: "Ti aiutiamo a scegliere in modo semplice e rapido.",
              },
              {
                Icon: Handshake,
                title: "Cortesia",
                desc: "Accoglienza e disponibilità prima di tutto.",
              },
              {
                Icon: Star,
                title: "Dettagli",
                desc: "Piccole attenzioni che fanno la differenza.",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-lg border border-gray-200 p-5 hover:shadow-sm transition-shadow bg-white"
              >
                <Icon className="w-6 h-6 text-black" />
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="text-gray-700 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Galleria */}
        <section className="mt-12">
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
      </div>
    </main>
  );
}


