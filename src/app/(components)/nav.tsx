
"use client";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Nav() {
    return (
        <nav className="bg-black sticky top-0 opacity-80">
          <div className="flex justify-between items-center w-[95%] h-20 mx-auto px-10">
            <Link href="/" className="hover:underline font-bold text-white">Pordon School of Catalan</Link>
              <ul className="flex items-center gap-8">
                <li className="hover:underline text-white">
                  <Link href="/about">About me</Link>
                </li>
                <li className="hover:underline text-white">
                  <Link href="/lessons">My Lessons</Link>
                </li>
                <li className="hover:underline text-white">
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <ThemeToggle />
                </li>
              </ul>
          </div>
              
          </nav>
    )
}
