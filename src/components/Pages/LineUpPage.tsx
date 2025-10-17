import LineaUp from '../../assets/Lineaup1.jpeg';
import BackgroundImage from '../../assets/background.png';

const LineUpPage = () => {
    return (
        <div className="w-full h-1/2 flex flex-col items-center justify-center py-12 px-4 bg-black text-white relative overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            ></div>

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-tight">LINEUP</h1>
                <img 
                    src={LineaUp} 
                    alt="Line Up Lollapalooza 2025" 
                    className="max-h-[70vh] lg:max-h-[75vh] w-auto object-contain rounded-lg shadow-3xl border-4 border-yellow-100" 
                />
            </div>
        </div>
    );
}
export default LineUpPage;