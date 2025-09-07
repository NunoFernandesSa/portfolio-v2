"use client";

// ----- Node modules / Next -----
import React from "react";
import Link from "next/link";
import Image from "next/image";

// ----- assets -----
import profilePic from "@/assets/images/profile_photo.png";

// ----- Shadcn components -----
import { Button } from "../ui/shadcn/button";

// ----- Custom components -----
import Section from "./Section";

// ----- Framer motion custom variants -----
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Section>
      <div className="min-h-screen flex flex-wrap justify-between flex-row md:flex-row-reverse">
        <motion.div className="w-full flex flex-col items-center lg:items-start mt-10 lg:w-1/3 order-2 md:order-1">
          <Image
            src={profilePic}
            alt="My profile picture"
            className="shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300 p-6 rounded-lg"
          />
          <div className="flex items-center justify-center gap-6 mt-9">
            <Button
              size={"sm"}
              className="rounded-full min-w-22"
              title="Visit my LinkedIn profile"
              asChild
            >
              <Link href={""} target="_blank">
                LinkedIn
              </Link>
            </Button>
            <Button
              size={"sm"}
              className="rounded-full min-w-22"
              title="Visit my Malt profile"
              asChild
            >
              <Link href={""} target="_blank">
                Malt
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col items-center justify-start lg:items-start mt-10 lg:w-1/2 order-1 md:order-2"
        >
          <motion.h2 className="pb-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            Nuno Fernandes
          </motion.h2>
          <motion.span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-transparent">
            Full Stack Developer
          </motion.span>

          <motion.p className="my-2 py-6 max-w-xl text-md md:text-xl xl:text-2xl leading-relaxed tracking-tighter">
            As a freelance developer, I design and build tailored web and mobile
            applications. Whether working directly with clients or collaborating
            with tech and design professionals, I deliver high-quality,
            customized solutions to meet your needs.
          </motion.p>

          <motion.p className="my-2 py-6 max-w-xl text-md md:text-xl xl:text-2xl leading-relaxed tracking-tighter">
            Do you have an idea? I can turn it into a product.
          </motion.p>

          <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              className="rounded-full py-6 mb-10 text-sm xl:text-lg cursor-pointer"
              title="Send me a message!"
              asChild
            >
              <Link href={"#contact"}>Let&apos;s Connect</Link>
            </Button>
          </motion.span>
        </motion.div>
      </div>
    </Section>
  );
}
