"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-900 text-white p-2 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-4xl font-bold shadow-lg ">
          <Image
            src="/logo.png" 
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="lg:flex hidden lg:space-x-8 mr-8 w-auto">
          <Link
            href="/"
            className="text-lg relative shadow-lg hover:text-slate-300 pb-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-slate-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            href="/products"  
            className="text-lg relative shadow-lg hover:text-slate-300 pb-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-slate-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-lg relative shadow-lg hover:text-slate-300 pb-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-slate-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white mr-4">
            <i className={`bx ${isOpen ? "bx-x" : "bx-menu"} text-3xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 p-4 absolute top-16 right-0 w-full">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="block text-lg hover:bg-slate-600 px-4 py-2 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/products"  
              className="block text-lg hover:bg-slate-600 px-4 py-2 rounded-lg"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-lg hover:bg-slate-600 px-4 py-2 rounded-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
