"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export function ContactSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold uppercase text-gray-800 md:text-4xl"
        >
          Contact <span className="text-pink-500">Us</span>
        </motion.h2>

        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Contact Info & Map */}
          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8 rounded-lg bg-white p-6 shadow-lg"
            >
              <motion.h3
                variants={itemVariants}
                className="mb-6 text-xl font-semibold text-gray-800"
              >
                Contact Information
              </motion.h3>

              <div className="space-y-4">
                <motion.div
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <MapPinIcon className="mr-3 h-6 w-6 flex-shrink-0 text-pink-500" />
                  <div>
                    <p className="font-medium text-gray-900">Our Location</p>
                    <address className="not-italic text-gray-600">
                      18 Fred Varley Dr, Unit 1
                      <br />
                      Unionville, ON L3R 1S4
                    </address>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <PhoneIcon className="mr-3 h-6 w-6 flex-shrink-0 text-pink-500" />
                  <div>
                    <p className="font-medium text-gray-900">Phone Number</p>
                    <p className="text-gray-600">
                      <Link
                        href="tel:+14169125888"
                        className="hover:text-pink-500"
                      >
                        (416) 912-5888
                      </Link>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <EnvelopeIcon className="mr-3 h-6 w-6 flex-shrink-0 text-pink-500" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">
                      <Link
                        href="mailto:info@fluxlashbar.com"
                        className="hover:text-pink-500"
                      >
                        info@fluxlashbar.com
                      </Link>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <ClockIcon className="mr-3 h-6 w-6 flex-shrink-0 text-pink-500" />
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <ul className="text-gray-600">
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
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src="/media/social/screenshot-1709859114762.png"
                alt="Flux Lash Bar location map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                <Link
                  href="https://maps.google.com/?q=18+Fred+Varley+Dr,+Unit+1,+Unionville,+ON+L3R+1S4"
                  target="_blank"
                  className="rounded-md bg-white px-4 py-2 font-medium text-gray-800 shadow-md transition-all hover:bg-gray-100"
                >
                  View on Google Maps
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <Link
                href="https://www.vagaro.com/fluxlashbar"
                target="_blank"
                className="inline-block rounded-md bg-pink-500 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-pink-600"
              >
                Book an Appointment
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
