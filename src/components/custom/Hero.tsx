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

export default function Hero() {
  return (
    <Section>
      <div className="min-h-screen flex flex-wrap justify-between flex-row md:flex-row-reverse">
        <div className="w-full flex flex-col items-center lg:items-start mt-10 lg:w-1/3 order-2 md:order-1">
          <Image
            src={profilePic}
            alt="My profile picture"
            className="shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300 rounded-full"
          />
          <div className="w-full flex items-center justify-center gap-6 mt-9">
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
        </div>

        <div className="w-full flex flex-col items-center justify-start lg:items-start mt-10 lg:w-1/2 order-1 md:order-2">
          <h2 className="pb-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            Nuno Fernandes
          </h2>
          <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-transparent">
            Full Stack Developer
          </span>

          <p className="my-2 py-6 max-w-xl text-md md:text-xl xl:text-2xl leading-relaxed tracking-tighter">
            As a freelance developer, I design and build tailored web and mobile
            applications. Whether working directly with clients or collaborating
            with tech and design professionals, I deliver high-quality,
            customized solutions to meet your needs.
          </p>

          <p className="my-2 py-6 max-w-xl text-md md:text-xl xl:text-2xl leading-relaxed tracking-tighter">
            Do you have an idea? I can turn it into a product.
          </p>

          <Button
            className="rounded-full py-6 mb-10 text-sm xl:text-lg cursor-pointer"
            title="Send me a message!"
            asChild
          >
            <Link href={"#contact"}>Let&apos;s Connect</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
