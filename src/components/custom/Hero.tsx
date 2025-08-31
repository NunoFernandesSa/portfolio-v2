import React from "react";
import profilePic from "@/assets/images/profile_photo.png";
import Image from "next/image";
import { Button } from "../ui/shadcn/button";
import Section from "./Section";

export default function Hero() {
  return (
    <Section className="lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <Image
              src={profilePic}
              alt="Hero Image"
              className="border-stone-900 rounded-3xl bg-[#161716]"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              Nuno Fernandes
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-transparent">
              Full Stack Developer
            </span>

            <p className="my-2 py-6 max-w-lg text-md md:text-xl xl:text-2xl leading-relaxed tracking-tighter">
              As a freelance developer, I design and build tailored web and
              mobile applications. Whether working directly with clients or
              collaborating with tech and design professionals, I deliver
              high-quality, customized solutions to meet your needs. Do you have
              an idea? I can turn it into a product.
            </p>

            <Button
              className="rounded-full py-6 mb-10 text-sm xl:text-lg cursor-pointer"
              title="Send me a message!"
            >
              Let&apos;s Connect
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
