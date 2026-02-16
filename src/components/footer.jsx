import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-12 py-4 bg-green-800 text-green-50 text-center text-sm">
      © {new Date().getFullYear()} GoGreen Marketplace. All rights reserved.
    </footer>
  );
}