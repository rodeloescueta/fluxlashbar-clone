"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function WhyChooseUsSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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
    <section id="why-choose-us" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold uppercase text-gray-800 md:text-4xl"
        >
          Why Flux Lash Bar?
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Best Services Section */}
          <motion.div
            variants={itemVariants}
            className="mb-16 grid items-center gap-8 md:grid-cols-2"
          >
            <motion.div
              className="order-2 md:order-1"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="mb-4 text-2xl font-bold uppercase text-gray-800">
                Best Services
              </h3>
              <p className="text-gray-600">
                We take pride in offering the highest quality lash extensions,
                combined with an enriching experience during your appointment,
                delivered by our skilled professionals.
              </p>
            </motion.div>
            <div className="order-1 md:order-2">
              <motion.div
                className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg md:h-80"
                whileHover={{
                  scale: 1.05,
                  x: -10,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  },
                }}
              >
                <Image
                  src="/media/why/1why.png"
                  alt="Flux Lash Bar Best Services"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Wide Range of Choices Section */}
          <motion.div
            variants={itemVariants}
            className="mb-16 grid items-center gap-8 md:grid-cols-2"
          >
            <div>
              <motion.div
                className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg md:h-80"
                whileHover={{
                  scale: 1.05,
                  x: 10,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  },
                }}
              >
                <Image
                  src="/media/why/2why.png"
                  alt="Flux Lash Bar Wide Range of Choices"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <motion.div
              whileHover={{ x: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="mb-4 text-2xl font-bold uppercase text-gray-800">
                Wide Range of Choices
              </h3>
              <p className="text-gray-600">
                We have a huge assortment of lash extension types for you to
                choose from – different curls; different materials, you name it!
                The lash styles are completely customizable. Based on your
                personal preference, lifestyle, eyes and face ratios, our
                specialists will help you to choose the style that fits you the
                most. We have the perfect options for your eye and face shape.
                We've got the most in the industry!
              </p>
            </motion.div>
          </motion.div>

          {/* Happiness Guarantee Section */}
          <motion.div
            variants={itemVariants}
            className="grid items-center gap-8 md:grid-cols-2"
          >
            <motion.div
              className="order-2 md:order-1"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="mb-4 text-2xl font-bold uppercase text-gray-800">
                Happiness Guarantee
              </h3>
              <p className="text-gray-600">
                Here at Flux Lash Bar we are dedicated to ensuring you leave
                feeling beautiful! If for any reason you encounter any issues
                with your lashes in the week following your treatment please let
                us know as soon as possible so we can make it up to you! We will
                book you in for a complimentary consultation with one of our
                educated technicians so we can figure out a solution to ensure
                your happiness!
              </p>
            </motion.div>
            <div className="order-1 md:order-2">
              <motion.div
                className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg md:h-80"
                whileHover={{
                  scale: 1.05,
                  x: -10,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  },
                }}
              >
                <Image
                  src="/media/why/3why.png"
                  alt="Flux Lash Bar Happiness Guarantee"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
