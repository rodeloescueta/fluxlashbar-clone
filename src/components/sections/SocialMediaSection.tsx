"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface InstagramPostProps {
  id: string;
  imageSrc: string;
  caption: string;
  link: string;
}

// Placeholder Instagram posts
const instagramPosts: InstagramPostProps[] = [
  {
    id: "post1",
    imageSrc: "/media/social/screenshot-1709859114762.png",
    caption:
      "Book your holiday lashes before we run out of bookings this month. Our current promo is receiving a Hybrid Set & Volume set for the price of $157!",
    link: "https://www.instagram.com/p/post1/",
  },
  {
    id: "post2",
    imageSrc: "/media/social/screenshot-1709859127583.png",
    caption:
      "We love a signature Classic Unlimited Set. Dana was able to tailor these lashes to the clients eyes & the outcome? Absolute perfection!",
    link: "https://www.instagram.com/p/post2/",
  },
  {
    id: "post3",
    imageSrc: "/media/social/screenshot-1709859139634.png",
    caption:
      "BLACK FRIDAY PROMO! Flux Lash Bar's December Lash Sale has officially launched! 🎉 For the entire month of December, get a Hybrid Set or Volume Set for just $157!",
    link: "https://www.instagram.com/p/post3/",
  },
  {
    id: "post4",
    imageSrc: "/media/social/screenshot-1709859148785.png",
    caption:
      "A short 3 hour appointment can save you DAYS of your time from filling in your brows daily! 🥹 And it's completely worth every second.",
    link: "https://www.instagram.com/p/post4/",
  },
];

// Predefined view counts for TikTok videos to avoid hydration errors
const tiktokViewCounts = [1127, 845, 2301, 976, 1458, 653, 1889, 726];

export function SocialMediaSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        damping: 10,
      },
    },
  };

  return (
    <section id="social-media" className="py-16">
      <div className="container mx-auto px-4">
        {/* TikTok Section */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center text-3xl font-bold uppercase text-gray-800 md:text-4xl"
          >
            Beauty in <span className="text-pink-500">TikTok</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg"
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-4"
              >
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/media/team/IMG_3055-e1727108469935.png"
                    alt="Flux Lash Bar TikTok"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">@fluxlashbar</h3>
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span>20 Following</span>
                    <span>182 Followers</span>
                    <span>7522 Likes</span>
                  </div>
                  <p className="text-sm">Lashes | Brows | PMU</p>
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
              >
                {/* Placeholder TikTok videos */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group relative aspect-[9/16] overflow-hidden rounded-lg bg-gray-100"
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="h-10 w-10 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-2 right-2 rounded-full bg-gray-900/70 px-2 py-1 text-xs text-white">
                      {tiktokViewCounts[idx]}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link
                  href="https://www.tiktok.com/@fluxlashbar"
                  target="_blank"
                  className="rounded-full bg-black px-6 py-2 text-white hover:bg-gray-800"
                >
                  Open TikTok
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Instagram Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center text-3xl font-bold uppercase text-gray-800 md:text-4xl"
          >
            Beauty in <span className="text-pink-500">Instagram</span> Squares
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-2">
              <Link
                href="https://www.instagram.com/fluxlashbar/"
                target="_blank"
                className="font-bold text-gray-800 hover:text-pink-500"
              >
                @fluxlashbar
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
          >
            {instagramPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Link href={post.link} target="_blank" className="group block">
                  <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                    <div className="relative aspect-square">
                      <Image
                        src={post.imageSrc}
                        alt={post.caption}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Play button for reels */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-white/40 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <svg
                            className="h-8 w-8 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="line-clamp-2 text-sm text-gray-600">
                        {post.caption}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <Link
              href="https://www.instagram.com/fluxlashbar/"
              target="_blank"
              className="flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 text-white hover:from-pink-600 hover:to-purple-600"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.214c0 2.717-.012 3.056-.06 4.122-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.214c-2.717 0-3.056-.012-4.122-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
              Follow on Instagram
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
