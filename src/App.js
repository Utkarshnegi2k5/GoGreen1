import React from "react";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import SectionPage from "./pages/SectionPage";
import AboutUs from "./pages/aboutus";
import Footer from "./components/footer";
import ProfilePage from "./pages/ProfilePage"; // <-- Add this import
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/section/:section" element={<SectionPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<ProfilePage />} /> {/* Add this route */}
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;