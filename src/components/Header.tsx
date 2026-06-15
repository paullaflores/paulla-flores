"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Início", href: "/", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
  { label: "Quem sou", href: "/#quem-sou", onClick: undefined },
  { label: "Microfisioterapia", href: "/microfisioterapia", onClick: undefined },
  { label: "Música", href: "/#musica", onClick: undefined },
  { label: "Livro", href: "/livro", onClick: undefined },
  { label: "Palestras", href: "/#palestras", onClick: undefined },
  { label: "Projetos Sociais", href: "/projetos-sociais", onClick: undefined },
  { label: "Contato", href: "/#contato", onClick: undefined },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-bege shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Paulla Flores"
              width={160}
              height={80}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={item.onClick}
                className="text-[17px] text-[#1a1a1a] hover:text-coral transition-colors font-medium whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger button */}
          <button
            className="xl:hidden p-2 text-[#1a1a1a] rounded-lg hover:bg-black/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="xl:hidden py-4 border-t border-black/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-[17px] text-[#1a1a1a] hover:text-coral transition-colors font-medium"
                onClick={() => { setIsOpen(false); item.onClick?.(); }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
