import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promozioni | Alex Abbigliamento",
  description: "Scopri le promozioni e le offerte in negozio.",
};

export default function PromozioniPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-28 pb-16">
      <h1 className="text-3xl font-bold mb-4">Promozioni</h1>
      <p className="text-gray-700">
        Al momento non ci sono promozioni attive. Torna a trovarci presto!
      </p>
    </main>
  );
}


