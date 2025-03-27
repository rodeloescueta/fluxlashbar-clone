"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  alt: string;
  bio: string;
}

const teamMembers: TeamMemberProps[] = [
  {
    name: "Gherlyn",
    role: "Lash Artist & Founder",
    imageSrc: "/media/team/main-bg.png",
    alt: "Gherlyn - Lash Artist & Founder",
    bio: "Gherlyn is the passionate founder of Flux Lash Bar with extensive experience in lash artistry. Her attention to detail and dedication to perfection make her one of the most sought-after lash artists in the area.",
  },
  {
    name: "Dana",
    role: "Senior Lash Technician",
    imageSrc: "/media/team/IMG_3055-e1727108469935.png",
    alt: "Dana - Senior Lash Technician",
    bio: "Dana specializes in creating customized lash looks tailored to each client's unique features. With years of experience, she ensures each client leaves feeling beautiful and confident.",
  },
  {
    name: "Michelle",
    role: "Brow Specialist",
    imageSrc: "/media/social/screenshot-1709859114762.png",
    alt: "Michelle - Brow Specialist",
    bio: "Michelle is our brow expert, specializing in brow lamination and microblading. Her precision and artistic approach ensure you'll get the perfect brows to frame your face.",
  },
  {
    name: "Sophia",
    role: "PMU Artist",
    imageSrc: "/media/social/screenshot-1709859127583.png",
    alt: "Sophia - PMU Artist",
    bio: "Sophia is our permanent makeup expert. With specialized training in the latest techniques, she creates natural-looking results that enhance your features.",
  },
];

export function TeamSection() {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="team" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold uppercase text-gray-800 md:text-4xl"
        >
          Meet Our <span className="text-pink-500">Team</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.imageSrc}
                  alt={member.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm font-medium uppercase text-pink-500">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
