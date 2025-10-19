import {  Clock, MapPin  } from 'lucide-react';

const LollapaloozaFooter = () => {
 
  return (
    <footer className="bg-black text-white">
      

      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
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

      <div className="border-t border-white/90 px-6 py-6">
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