"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialProps {
  id: string;
  name: string;
  rating: number;
  date: string;
  service: string;
  content: string;
  imageSrc?: string;
}

const testimonials: TestimonialProps[] = [
  {
    id: "testimonial1",
    name: "Sarah M.",
    rating: 5,
    date: "September 15, 2023",
    service: "Hybrid Lash Extensions",
    content:
      "I've been going to Flux for over a year now and I couldn't be happier with the service. The staff is always professional and welcoming. My lashes look amazing every time!",
    imageSrc: "/media/team/IMG_3055-e1727108469935.png",
  },
  {
    id: "testimonial2",
    name: "Jennifer K.",
    rating: 5,
    date: "October 3, 2023",
    service: "Volume Lash Extensions",
    content:
      "Absolutely love my lashes! The technician really took the time to understand what I wanted and delivered beyond my expectations. The salon is clean, modern, and so relaxing.",
  },
  {
    id: "testimonial3",
    name: "Tina R.",
    rating: 5,
    date: "November 12, 2023",
    service: "Brow Lamination",
    content:
      "First time getting my brows done here and it won't be the last! The shape is perfect and my brows have never looked better. Highly recommend their brow services!",
    imageSrc: "/media/social/screenshot-1709859127583.png",
  },
  {
    id: "testimonial4",
    name: "Michelle D.",
    rating: 5,
    date: "December 5, 2023",
    service: "Lash Lift and Tint",
    content:
      "The lash lift and tint was exactly what I needed! Natural but still dramatic. The staff is knowledgeable and made me feel comfortable throughout the entire process.",
  },
  {
    id: "testimonial5",
    name: "Ashley T.",
    rating: 4,
    date: "January 8, 2024",
    service: "Classic Lash Extensions",
    content:
      "Great experience at Flux! My lash tech was thorough and made sure I was happy with the result. The classic set looks so natural yet full. Will definitely be back!",
    imageSrc: "/media/team/main-bg.png",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonialCount = testimonials.length;

  const nextTestimonial = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % testimonialCount);
    }
  }, [isAnimating, testimonialCount]);

  const prevTestimonial = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex(
        (prev) => (prev - 1 + testimonialCount) % testimonialCount
      );
    }
  }, [isAnimating, testimonialCount]);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 8000);

    return () => clearTimeout(timer);
  }, [activeIndex, nextTestimonial]);

  // Reset animation flag after transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this to your transition duration

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Generate star rating display
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold uppercase text-gray-800 md:text-4xl"
        >
          What Our Clients <span className="text-pink-500">Say</span>
        </motion.h2>

        <div className="relative mx-auto max-w-4xl">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100 md:-left-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100 md:-right-10"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
          </motion.button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-xl bg-white p-6 shadow-lg md:p-10"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Image Column - Only show if there's an image */}
                {currentTestimonial.imageSrc && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex items-center justify-center md:col-span-1"
                  >
                    <div className="relative h-40 w-40 overflow-hidden rounded-full md:h-60 md:w-60">
                      <Image
                        src={currentTestimonial.imageSrc}
                        alt={`${currentTestimonial.name} testimonial`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Content Column */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className={`flex flex-col justify-center md:col-span-${
                    currentTestimonial.imageSrc ? "2" : "3"
                  }`}
                >
                  {/* Rating */}
                  <div className="mb-4 flex">
                    {renderStars(currentTestimonial.rating)}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="mb-6 italic text-gray-700">
                    "{currentTestimonial.content}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="mt-auto">
                    <p className="font-bold text-gray-900">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {currentTestimonial.service}
                    </p>
                    <p className="text-xs text-gray-500">
                      {currentTestimonial.date}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicator Dots */}
          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                  }
                }}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-pink-500 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Review Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.5,
            staggerChildren: 0.1,
            delayChildren: 0.2,
          }}
          className="mt-16 grid grid-cols-2 gap-4 text-center md:grid-cols-4"
        >
          {[
            { value: "4.9", label: "Average Rating", hasStars: true },
            { value: "250+", label: "Happy Clients", hasStars: false },
            { value: "98%", label: "Would Recommend", hasStars: false },
            { value: "5k+", label: "Lash Extensions", hasStars: false },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                  },
                },
              }}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="mb-2 text-4xl font-bold text-pink-500"
              >
                {stat.value}
              </motion.div>
              {stat.hasStars && (
                <div className="flex justify-center">{renderStars(5)}</div>
              )}
              <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
