import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaUserCircle, FaSignInAlt, FaUserPlus, FaTachometerAlt, FaInfoCircle } from "react-icons/fa";

const mockUser = {
  name: "Amit Sharma",
  avatar: "", // Optional avatar image
};

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-700 to-green-500 px-4 py-3 flex items-center justify-between shadow-lg relative z-50">
      {/* Logo & Brand */}
      <Link to="/" className="text-white font-bold text-xl flex items-center gap-2">
        <img
          src="https://img.icons8.com/color/48/000000/tractor.png"
          alt="logo"
          className="w-8 h-8"
        />
        <span className="tracking-wide">Agri Marketplace</span>
      </Link>

      {/* Center Tagline */}
      <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-white font-semibold text-lg italic tracking-wider whitespace-nowrap">
        
        </span>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>

      {/* Links */}
      <div
        className={`flex-col md:flex-row md:flex items-center absolute md:static top-full left-0 w-full md:w-auto bg-green-700 md:bg-transparent z-40 
          transition-all duration-300 ease-in-out ${open ? "flex" : "hidden md:flex"}
        `}
      >
        <NavLink icon={<FaInfoCircle />} to="/about" label="About Us" setOpen={setOpen} />
        <NavLink icon={<FaSignInAlt />} to="/login" label="Login" setOpen={setOpen} />
        <NavLink icon={<FaUserPlus />} to="/register" label="Register" setOpen={setOpen} />
        <NavLink icon={<FaTachometerAlt />} to="/dashboard" label="Dashboard" setOpen={setOpen} />

        {/* Profile */}
        <Link
          to="/profile"
          className="flex items-center gap-2 md:ml-4 mt-2 md:mt-0 px-4 py-2 bg-green-900 hover:bg-green-800 text-white rounded-full transition duration-200"
          onClick={() => setOpen(false)}
        >
          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm overflow-hidden">
            {mockUser.avatar ? (
              <img
                src={mockUser.avatar}
                alt="profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              getInitials(mockUser.name)
            )}
          </div>
          <span className="hidden sm:inline-block">Profile</span>
        </Link>
      </div>
    </nav>
  );
}

function NavLink({ icon, to, label, setOpen }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 text-green-100 hover:text-yellow-200 font-medium px-4 py-2 transition duration-200"
      onClick={() => setOpen(false)}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
