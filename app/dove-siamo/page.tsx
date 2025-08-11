import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dove siamo | Alex Abbigliamento",
  description: "Come raggiungere Alex Abbigliamento a Pagani.",
};

const mapsQuery = encodeURIComponent(
  "Via Costantino Astarita, 25, 84016 Pagani (SA)"
);

export default function DoveSiamoPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-28 pb-16">
      <h1 className="text-3xl font-bold mb-2">Dove siamo</h1>
      <p className="text-gray-600 mb-8 text-lg max-w-2xl">
        Il nostro negozio si trova in una posizione centrale a Pagani, facilmente raggiungibile sia in auto che a piedi. Siamo a pochi passi da Piazza Sant'Alfonso, vicino alla scuola media "A. Criscuolo" e di fronte alla farmacia comunale. Nelle immediate vicinanze sono disponibili parcheggi pubblici gratuiti e a pagamento.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Info indirizzo e dettagli */}
        <div className="space-y-6">
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" fill="none" viewBox="0 0 16 16"><g clipPath="url(#a)"><path fillRule="evenodd" clipRule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
              <span className="text-gray-800">Via Costantino Astarita, 25, 84016 Pagani (SA)</span>
            </div>
            <div className="text-gray-700 text-base mt-4">
              <strong>Come arrivare:</strong>
              <ul className="list-disc ml-6 mt-1 text-sm">
                <li>In auto: facilmente raggiungibile da tutta la città, con parcheggi nelle vicinanze.</li>
                <li>In treno: a 10 minuti a piedi dalla stazione di Pagani.</li>
                <li>In autobus: fermata "Piazza Sant'Alfonso" a 2 minuti a piedi dal negozio.</li>
              </ul>
            </div>
            <div className="text-green-700 text-base mt-4">
              <strong>Parcheggi consigliati:</strong>
              <ul className="list-disc ml-6 mt-1 text-sm">
                <li>Parcheggio Piazza Sant'Alfonso (gratuito e a pagamento)</li>
                <li>Parcheggio Via Astarita (strisce blu)</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-4 py-2 rounded hover:opacity-90 font-semibold"
            >
              Apri su Google Maps
            </a>
          </div>
        </div>
        {/* Mappa Google */}
        <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            title="Mappa negozio"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.9649649649646!2d14.61383731531613!3d40.7499649793287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0e7e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sVia%20Costantino%20Astarita%2C%2025%2C%2084016%20Pagani%20SA!5e0!3m2!1sit!2sit!4v1680000000000!5m2!1sit!2sit"
            width="100%"
            height="320"
            className="w-full h-80"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}


