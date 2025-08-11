import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contattaci | Alex Abbigliamento",
  description: "Contatta Alex Abbigliamento: WhatsApp, email, indirizzo, orari e modulo.",
};

const orari = [
  { giorno: "Lunedì", ore: "16:30 - 20:30" },
  { giorno: "Martedì", ore: "10:00 - 13:00, 16:30 - 20:30" },
  { giorno: "Mercoledì", ore: "10:00 - 13:00, 16:30 - 20:30" },
  { giorno: "Giovedì", ore: "10:00 - 13:00, 16:30 - 20:30" },
  { giorno: "Venerdì", ore: "10:00 - 13:00, 16:30 - 20:30" },
  { giorno: "Sabato", ore: "10:00 - 13:00, 16:30 - 20:30" },
  { giorno: "Domenica", ore: "Chiuso" },
];

export default function ContattaciPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-28 pb-16">
      <h1 className="text-3xl font-bold mb-2">Contattaci</h1>
      <p className="text-gray-600 mb-8 text-lg max-w-2xl">
        Siamo sempre felici di aiutarti! Puoi contattarci tramite WhatsApp, email, telefono o venire a trovarci in negozio. Compila il modulo qui sotto per inviarci un messaggio diretto.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Info contatti */}
        <div className="space-y-6">
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <Image src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={24} height={24} />
              <a
                href="https://wa.me/3336876386"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 underline hover:opacity-80 font-medium"
              >
                333 687 6386
              </a>
            </div>
            <div className="flex items-center gap-3">
              {/* Envelope icon minimal */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="3" stroke="#2563eb" strokeWidth="2"/><path d="M4 6l8 7 8-7" stroke="#2563eb" strokeWidth="2" fill="none"/></svg>
              <a
                href="mailto:alexabbigliamento@gmail.com"
                className="text-blue-700 underline hover:opacity-80 font-medium"
              >
                alexabbigliamento@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <svg width="24" height="24" fill="none" viewBox="0 0 16 16"><g clipPath="url(#a)"><path fillRule="evenodd" clipRule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
              <span className="text-gray-800">Via Costantino Astarita, 25, 84016 Pagani (SA)</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="24" height="24" fill="none" viewBox="0 0 16 16"><path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 10.5A4.5 4.5 0 1 1 8 3.5a4.5 4.5 0 0 1 0 9z" fill="#f59e42"/></svg>
              <span className="text-gray-800">Orari di apertura:</span>
            </div>
            <ul className="ml-8 text-sm text-gray-600">
              {orari.map(({ giorno, ore }) => (
                <li key={giorno} className="flex justify-between w-64 max-w-full">
                  <span>{giorno}</span>
                  <span>{ore}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Mappa Google */}
          <div className="mt-6">
            <iframe
              title="Mappa negozio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.9649649649646!2d14.61383731531613!3d40.7499649793287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0e7e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sVia%20Costantino%20Astarita%2C%2025%2C%2084016%20Pagani%20SA!5e0!3m2!1sit!2sit!4v1680000000000!5m2!1sit!2sit"
              width="100%"
              height="220"
              className="rounded border border-gray-200 w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Form contatto */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Scrivici un messaggio</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/30"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/30"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700">Messaggio</label>
              <textarea
                id="messaggio"
                name="messaggio"
                rows={4}
                required
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/30"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition"
            >
              Invia messaggio
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}


