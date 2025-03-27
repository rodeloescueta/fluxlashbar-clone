"use client";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { SocialMediaSection } from "@/components/sections/SocialMediaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <TeamSection />
      <SocialMediaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
