import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import Worker from "../components/Worker";
import Slideshow from "../components/Slideshow";

const sections = [
	{
		to: "/section/land",
		label: "Land for Rent",
		bg: "bg-green-100",
		img: "https://img.icons8.com/color/96/000000/field.png",
		hover: "hover:bg-green-200",
	},
	{
		to: "/section/tractors",
		label: "Tractors & Equipment",
		bg: "bg-yellow-100",
		img: "https://img.icons8.com/color/96/000000/tractor.png",
		hover: "hover:bg-yellow-200",
	},
	{
		to: "/section/crops",
		label: "Crops for Sale",
		bg: "bg-blue-100",
		img: "https://img.icons8.com/color/96/000000/wheat.png",
		hover: "hover:bg-blue-200",
	},
	{
		to: "/section/seeds",
		label: "Seeds & Fertilizers",
		bg: "bg-purple-100",
		img: "https://img.icons8.com/color/96/000000/seeds.png",
		hover: "hover:bg-purple-200",
	},
];

export default function DashboardPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-6 px-2 relative">
			<div className="mb-6">
				<Searchbar />
			</div>
			{/* Slideshow Component */}
			<div className="mb-8">
				<Slideshow />
			</div>
			<div className="flex flex-col items-center justify-center mb-8 px-2">
				<h1 className="text-3xl sm:text-4xl font-bold text-green-800 text-center animate-fade-in mb-2">
					Welcome to Your Dashboard
				</h1>
				<p className="text-green-700 text-center text-base sm:text-lg max-w-2xl">
					Manage your agricultural needs, discover resources, and connect with the community.
				</p>
			</div>
			{/* Responsive grid: cards left, Worker right */}
			<div className="w-full flex flex-col lg:flex-row gap-8 items-start justify-between px-0 md:px-4">
				{/* Cards */}
				<div className="flex-1 w-full">
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
						{sections.map((section, idx) => (
							<Link
								key={section.to}
								to={section.to}
								className={`
                  ${section.bg} ${section.hover}
                  rounded-2xl shadow-lg flex flex-col items-center p-7
                  transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group
                  focus:outline-none focus:ring-2 focus:ring-green-400
                  animate-slide-up
                `}
								style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
							>
								<img
									src={section.img}
									alt={section.label}
									className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
								/>
								<span className="text-xl font-semibold text-green-900 group-hover:text-green-700 transition-colors text-center">
									{section.label}
								</span>
							</Link>
						))}
					</div>
				</div>
				{/* Worker */}
				<div
					className="w-full max-w-xs mx-auto lg:mx-0 lg:w-[340px] flex-shrink-0 flex justify-center"
				>
					<div className="w-full">
						<Worker />
					</div>
				</div>
			</div>
			{/* Custom Animations */}
			<style>
				{`
          .animate-fade-in {
            animation: fadeIn 1.2s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-slide-up {
            opacity: 0;
            animation: slideUp 0.8s forwards;
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
			</style>
		</div>
	);
}