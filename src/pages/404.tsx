import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black border-amber-200 text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-8">Página no encontrada</p>
           <button className="px-6 py-3 bg-amber-200 text-black font-semibold rounded hover:bg-amber-300 transition">
            <Link to="/">Volver al inicio</Link>
           </button>
        </div>
    );
};
export default NotFoundPage;

