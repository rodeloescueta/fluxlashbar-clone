"use client";

import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-10 md:pt-24 md:pb-16 overflow-hidden">
      <Link href="https://www.vagaro.com/fluxlashbar" target="_blank">
        <div className="relative w-full h-auto cursor-pointer">
          <Image
            src="/media/team/main-bg.png"
            alt="Lashes Redefined - Book Now at Flux Lash Bar"
            width={1920}
            height={1080}
            className="w-full object-cover"
            priority
          />
        </div>
      </Link>
    </section>
  );
}
