"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full h-20 bg-white px-20 flex items-center justify-between text-white border-deep-green border-b-[1px] relative">
      {/* Logo Section */}
      <div id="logo-sec" className="text-4xl font-bold font-serif text-green-900">
        FullBari
      </div>

      {/* Search Bar - Centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 rounded-lg bg-white text-green-900 placeholder-gray-500 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 shadow-md transition duration-300"
        />
      </div>

      {/* Navigation Right Section */}
      <div id="nav-last" className="text-lg flex items-center space-x-10">
        <div id="profile" className="hover:text-green-400 transition duration-300 cursor-pointer text-green-800">
          <Link href="/auth/login">profile</Link>
        </div>
        <div id="cart" className="hover:text-green-400 transition duration-300 cursor-pointer text-green-800">
          <Link href="/homepage/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}
