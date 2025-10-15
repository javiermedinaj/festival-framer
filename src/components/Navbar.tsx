import React from "react";
import Logo from "../assets/Logo.png";

const Navbar: React.FC = () => {
	return (
		<header className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-sm text-white z-50 border-b border-white/10">
			<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="h-20 flex items-center justify-between">
					{/* left: hamburger */}
					<div className="flex items-center md:w-1/3">
						<button
							aria-label="Open menu"
							className="p-3 text-white hover:bg-white/10 transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
						>
							<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>

					{/* center: logo */}
					<div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex md:justify-center md:items-center md:flex-1">
						<img src={Logo} alt="Logo" className="h-10 sm:h-12 object-contain transition-transform hover:scale-105 duration-300" />
					</div>

					{/* right: info text */}
					<div className="hidden md:flex items-center justify-end w-1/3">
						<div className="border-l-2 border-yellow-400/60 pl-5 pr-2">
							<div className="text-[11px] sm:text-xs font-medium tracking-wide text-white/80 uppercase">
								Hipódromo de San Isidro
							</div>
							<div className="text-[11px] sm:text-xs font-semibold tracking-wider text-yellow-400 mt-0.5">
								13, 14 y 15 de Marzo 2026
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;

