import { useState } from 'react';
import { Mail, Clock, MapPin  } from 'lucide-react';

const LollapaloozaFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Email submitted:', email);
      alert('¡Gracias por suscribirte!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-b from-black to-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="px-6 py-16 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-4">
            <Mail className="w-12 h-12 text-yellow-400" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tight">
            Dejanos tu email para enterarte de todo.
          </h2>
          <p className="text-base md:text-lg mb-2 text-gray-300">
            Inscribite al Newsletter de Lollapalooza Argentina y enterate de las últimas noticias y
          </p>
          <p className="text-base md:text-lg mb-6 text-gray-300">
            actualizaciones que necesitas saber.
          </p>
          <p className="text-base md:text-lg mb-8 font-bold text-yellow-400">
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
      </div>

      {/* Links Section */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Festival Column */}
          <div>
            <h3 className="text-lg font-black mb-6 uppercase tracking-wider text-white flex items-center gap-2">
           
              Festival
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
                  Tickets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
                  Line Up
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
                  Horarios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
                  Sustentabilidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
                  LollaFam
                </a>
              </li>
            </ul>
          </div>

          {/* Ayuda Column */}
          <div>
            <h3 className="text-lg font-black mb-6 uppercase tracking-wider text-white flex items-center gap-2">
           
              Ayuda
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-lg font-black mb-6 uppercase tracking-wider text-white flex items-center gap-2">
             
              Social
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
               
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="text-lg font-black mb-6 uppercase tracking-wider text-white flex items-center gap-2">
              Info
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Hipódromo de San Isidro, Buenos Aires</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>13, 14 y 15 de Marzo 2026</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Enchastre Festival. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-lime-400 transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LollapaloozaFooter;