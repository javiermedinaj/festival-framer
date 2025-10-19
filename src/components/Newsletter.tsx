import { Mail } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    if (email) {
      console.log("Email submitted:", email);
      alert("¡Gracias por suscribirte!");
      setEmail("");
    }
  };
  return (
    <div className="px-6 py-16 text-center bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tight">
          Dejanos tu email para enterarte de todo.
        </h2>
        <p className="text-2xl text-gray-300">
          Inscribite al Newsletter de Enchastre Argentina y enterate de las
          últimas noticias y
        </p>
        <p className="leading-relaxed text-1xl mb-6 text-gray-300">
            actualizaciones que necesitas saber.
        </p>
        <p className="text-1xl mb-8 font-bold text-yellow-400">
          ¿Qué estás esperando?
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-0 max-w-2xl mx-auto shadow-2xl">
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Tu email aquí..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-12 py-4 w-full text-black bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 font-black uppercase whitespace-nowrap transition-all flex items-center justify-center gap-2 hover:gap-3 group"
          >
            Suscribirme
          </button>
        </div>
      </div>
      <hr className="border-t border-gray-700 mt-16" />
    </div>
  );
};

export default Newsletter;
