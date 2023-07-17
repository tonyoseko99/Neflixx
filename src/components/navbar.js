import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-800 sticky top-0">
      <div className="container mx-auto flex justify-between px-4 py-2">
        <a href="/" className="text-white text-2xl font-bold">
          Neflixx
        </a>
        <ul className="flex space-x-4">
          <li className="text-white">
            <a href="/" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li className="text-white">
            <a href="/about" className="text-white hover:text-gray-400">
              About
            </a>
          </li>
          <li className="text-white">
            <a href="/contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
