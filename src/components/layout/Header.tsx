"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Define navigation links
const navigationLinks = [
  { name: "Why Choose Us", href: "/why-choose-us" },
  {
    name: "Book Now",
    href: "https://www.vagaro.com/fluxlashbarbook-now",
    external: true,
  },
  {
    name: "Pre-Care",
    href: "#",
    subItems: [
      { name: "Ombre Powder Brows", href: "/ombre-powder-brows" },
      { name: "Lip Blush", href: "/lip-blush" },
    ],
  },
  {
    name: "Aftercare",
    href: "#",
    subItems: [
      { name: "Brow Lamination Aftercare", href: "/brow-lamination-aftercare" },
      { name: "Lip Blush Aftercare", href: "/lip-blush-aftercare" },
      {
        name: "OMBRE POWDER BROWS AFTERCARE",
        href: "/ombre-power-brows-aftercare",
      },
    ],
  },
  { name: "Contact Us", href: "/contact-us" },
  { name: "FAQ", href: "/faq" },
  { name: "Meet the team", href: "/meet-the-team" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleSubmenuToggle = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top info bar */}
      <div className="bg-gray-100 py-2 px-4 text-center text-sm text-gray-700">
        <p>
          Call or Text <span className="font-semibold">(416) 912-5888</span> -
          18 Fred Varley Dr, Unit 1, Unionville, ON
        </p>
      </div>

      {/* Main header */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/flux-logo.png"
            alt="Flux Lash Bar"
            width={150}
            height={60}
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navigationLinks.map((link) => (
              <li key={link.name} className="relative group">
                {link.subItems ? (
                  <>
                    <button
                      className="flex items-center font-medium text-gray-800 hover:text-pink-500 group"
                      onClick={() => handleSubmenuToggle(link.name)}
                    >
                      {link.name}
                      <svg
                        className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:text-pink-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {/* Dropdown menu */}
                    <div
                      className={`absolute left-0 mt-2 w-60 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 transition-all ${
                        openSubmenu === link.name
                          ? "opacity-100"
                          : "invisible opacity-0"
                      }`}
                    >
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    className="font-medium text-gray-800 hover:text-pink-500"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact and Booking */}
        <div className="hidden items-center md:flex">
          <div className="mr-4 flex items-center">
            <svg
              className="mr-2 h-5 w-5 text-pink-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="font-bold">(416) 912-5888</span>
          </div>
          <Link href="https://www.vagaro.com/fluxlashbar" target="_blank">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">
              BOOK NOW
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-500 hover:bg-gray-100 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg`}
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {navigationLinks.map((link) => (
            <div key={link.name}>
              {link.subItems ? (
                <>
                  <button
                    className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-pink-500"
                    onClick={() => handleSubmenuToggle(link.name)}
                  >
                    {link.name}
                    <svg
                      className={`ml-auto h-5 w-5 transform transition-transform ${
                        openSubmenu === link.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openSubmenu === link.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-pink-500"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-pink-500"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col space-y-2 px-3">
            <div className="flex items-center">
              <svg
                className="mr-2 h-5 w-5 text-pink-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-bold">(416) 912-5888</span>
            </div>
            <Link
              href="https://www.vagaro.com/fluxlashbar"
              target="_blank"
              className="w-full"
            >
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                BOOK NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
