"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="h-12 w-full bg-white text-black border-b-[0.5px] border-deep-green flex items-center justify-center shadow-lg text-lg font-mono">
      <ul className="flex items-center space-x-16">
        <li
          className={`font-medium transition ease-in duration-500 hover:cursor-pointer text-black hover:text-deep-green hover:underline hover:underline-offset-8 ${
            pathname === "/"
              ? "text-deep-green underline underline-offset-8 text-xl"
              : " hover:text-deep-green hover:underline hover:underline-offset-8"
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`font-medium transition duration-300 hover:cursor-pointer ${
            pathname === "/homepage/about"
              ? "text-deep-green underline underline-offset-8 text-xl"
              : "text-black hover:text-deep-green hover:underline hover:underline-offset-8"
          }`}
        >
          <Link href="/homepage/about">About</Link>
        </li>
        <li
          className={`font-medium transition duration-300 hover:cursor-pointer ${
            pathname === "/homepage/products"
              ? "text-deep-green underline underline-offset-8 text-xl"
              : "text-black hover:text-deep-green hover:underline hover:underline-offset-8"
          }`}
        >
          <Link href="/homepage/products">Products</Link>
        </li>
        <li
          className={`font-medium transition duration-300 hover:cursor-pointer ${
            pathname === "/homepage/contact"
              ? "text-deep-green underline underline-offset-8 text-xl"
              : "text-black hover:text-deep-green hover:underline hover:underline-offset-8"
          }`}
        >
          <Link href="/homepage/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
