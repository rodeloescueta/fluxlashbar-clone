"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Info Section */}
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase text-gray-800">
              Info
            </h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact-us"
                    className="text-gray-700 hover:text-pink-500"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-700 hover:text-pink-500"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-700 hover:text-pink-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-use"
                    className="text-gray-700 hover:text-pink-500"
                  >
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Be in the Loop Section */}
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase text-gray-800">
              Be in the Loop
            </h2>
            <p className="mb-4 text-gray-700">
              Be in the know for the latest Flux news
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/fluxlashbarcanada/"
                target="_blank"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700"
                aria-label="Facebook"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/fluxlashbar/"
                target="_blank"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 text-white hover:bg-pink-700"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.214c0 2.717-.012 3.056-.06 4.122-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.214c-2.717 0-3.056-.012-4.122-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                </svg>
              </Link>
              <Link
                href="https://www.tiktok.com/@fluxlashbar"
                target="_blank"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800"
                aria-label="TikTok"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase text-gray-800">
              Get in Touch
            </h2>
            <p className="mb-2 text-gray-700">
              Flux Lash Bar - Eyelash Extensions, Semi-Permanent Makeup Markham
            </p>
            <p className="mb-3 text-gray-700">
              18 Fred Varley Dr, Unit 1, Unionville, ON L3R 1S4
            </p>
            <a
              href="tel:(416) 912-5888"
              className="mb-4 inline-block font-bold text-gray-800 hover:text-pink-500"
            >
              (416) 912-5888
            </a>
          </div>

          {/* Hours Section */}
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase text-gray-800">
              Hours
            </h2>
            <ul className="mb-4 space-y-1 text-gray-700">
              <li>
                <strong>Sunday:</strong> 12pm-6pm (by appointment only)
              </li>
              <li>
                <strong>Monday:</strong> Closed
              </li>
              <li>
                <strong>Tuesday — Saturday:</strong> 10am-8pm
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              © 2022 FLUX LASH BAR - ALL RIGHTS RESERVED
            </p>
            <div className="mt-4">
              <Image
                src="/flux-logo.png"
                alt="Flux Lash Bar"
                width={120}
                height={48}
                className="h-auto w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
