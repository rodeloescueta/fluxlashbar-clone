"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceProps {
  title: string;
  imageSrc: string;
  alt: string;
  link: string;
}

const services: ServiceProps[] = [
  {
    title: "Eyelash Extensions",
    imageSrc: "/media/services/eyelash-extensions.jpg",
    alt: "Flux Lash Bar Eyelash Extensions",
    link: "/services/eyelash-extensions",
  },
  {
    title: "Eyelash Lift and Tint",
    imageSrc: "/media/services/eyelash-lift-tint.jpg",
    alt: "Flux Lash Bar Eyelash Lift and Tint",
    link: "/services/eyelash-lift-tint",
  },
  {
    title: "Brows",
    imageSrc: "/media/services/brows.jpg",
    alt: "Flux Lash Bar Brows",
    link: "/services/brows",
  },
  {
    title: "Semi-Permanent Makeup",
    imageSrc: "/media/services/semi-permanent-makeup.jpg",
    alt: "Flux Lash Bar Semi-Permanent Makeup",
    link: "/services/semi-permanent-makeup",
  },
];

export function ServicesSection() {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for individual service cards
  const serviceVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold uppercase text-gray-800 md:text-4xl"
        >
          Our Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={serviceVariants}>
              <Link
                href={service.link}
                className="group block transition-transform hover:scale-[1.02]"
              >
                <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={service.imageSrc}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="py-6 text-center text-xl font-bold uppercase text-gray-800">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
