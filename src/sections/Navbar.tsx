"use client";

import { useState } from "react";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/button";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-8 overflow-x-clip">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center rounded-full border border-white/15 px-4 p-2">
          <div>
            <Image src={logoImage} alt="Layers logo" className="h-12 w-auto ml-2" />
          </div>

          <div className="hidden lg:flex justify-center">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex justify-end items-center gap-4">
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            <Button variant="secondary" className="hidden md:inline-flex">
              <Link href="/login">Log In</Link>
            </Button>

            <Button variant="primary" className="hidden md:inline-flex">
              Sign Up
            </Button>
          </div>
        </div>

        {open && (
          <div className="mt-4 rounded-2xl border border-white/15 bg-neutral-950 p-6 md:hidden">
            <nav className="flex flex-col gap-4 text-center font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link href="/login" className="mt-4">
                Log In
              </Link>
              <Button variant="primary" className="mt-2 w-full">
                Sign Up
              </Button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}
