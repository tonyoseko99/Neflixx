import React from "react";
import Link from "next/link";
import Logo from "./logo";
import Button from "./button";

function Navbar() {
  return (
    <>
      <nav className="w-full h-20 bg-gray-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full font-serif">
            <Link href="/">
              <p className="text-2xl">Neflixx</p>
            </Link>
            <ul className="hidden md:flex gap-x-6 text-white text-lg">
              <li className="hover:text-gray-400">
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li className="hover:text-gray-400">
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
