import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-2">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <img
          src="https://img.icons8.com/color/144/000000/tractor.png"
          alt="GoGreen Marketplace"
          className="w-28 mb-6 animate-bounce-slow"
        />
        <h1 className="text-4xl font-bold text-green-800 mb-2 tracking-wide text-center">
          About GoGreen Marketplace
        </h1>
        <p className="text-lg text-green-700 mb-8 text-center">
          Connecting Farmers, Buyers, and Nature for a Greener Tomorrow
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Who We Are */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-green-50 group">
            <div className="mb-4">
              <svg className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-green-700 mb-2 text-center">Who We Are</h2>
            <p className="text-green-900 text-center">
              GoGreen is an online agricultural marketplace dedicated to empowering farmers and connecting them directly with buyers. We believe in sustainable agriculture, fair trade, and building a vibrant community that supports local producers.
            </p>
          </div>
          {/* Our Mission */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-green-50 group">
            <div className="mb-4">
              <svg className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-green-700 mb-2 text-center">Our Mission</h2>
            <ul className="list-disc pl-4 text-green-900 space-y-1 text-left">
              <li>Support farmers with a fair and transparent platform</li>
              <li>Promote organic and eco-friendly practices</li>
              <li>Enable buyers to access fresh, local produce</li>
              <li>Foster a sustainable and green future for all</li>
            </ul>
          </div>
          {/* Why Choose Us */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-green-50 group">
            <div className="mb-4">
              <svg className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-green-700 mb-2 text-center">Why Choose Us?</h2>
            <ul className="list-disc pl-4 text-green-900 space-y-1 text-left">
              <li>Direct farm-to-table connections</li>
              <li>Verified and trusted sellers</li>
              <li>Eco-conscious packaging and delivery</li>
              <li>Community-driven support and resources</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="text-green-800 font-bold text-lg text-center animate-fade-in">
            Join us in cultivating a greener tomorrow!
          </div>
          <Link
            to="/dashboard"
            className="inline-block px-8 py-3 rounded-full bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
      {/* Custom Animations */}
      <style>
        {`
          .animate-bounce-slow {
            animation: bounce 2.5s infinite;
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-12px);}
          }
          .animate-fade-in {
            animation: fadeIn 1.2s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
}