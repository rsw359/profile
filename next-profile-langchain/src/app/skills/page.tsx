"use client";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Metadata } from "next";
import { Icon } from "@iconify/react";
import profilepic from "@/assets/smile.jpeg";
import Image from "next/image";
import iro from "@/assets/iro.png";
import yourspace from "@/assets/yourspace.png";
import romance from "@/assets/romance.png";

export default function Skills() {
  return (
    <section>
      <div className="m-3 space-y-16 rounded-3xl bg-gradient-to-b from-gray-500 to-gray-800 bg-center bg-no-repeat px-8 py-8">
        <div className="mx-3 flex flex-col items-center justify-center space-y-4">
          <Image
            src={profilepic}
            priority={true}
            alt="my profile pic"
            height={150}
            width={150}
            className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
          <H1>Skills</H1>
        </div>
        <p className="text-white">
          I enjoy working with a variety of technologies. I have experience with
          many programming languages, frameworks, and tools. I am always looking
          to learn new things and expand my skill set. I am currently working
          with the following technologies:
        </p>

        <div className="m-2 flex flex-wrap justify-between gap-4">
          <Icon icon="devicon:javascript" className="h-10 w-10" />
          <Icon icon="devicon:typescript" className="h-10 w-10" />
          <Icon icon="devicon:react-wordmark" className="h-10 w-10" />
          <Icon icon="devicon:nextjs" className="h-10 w-10" />
          <Icon icon="devicon:python-wordmark" className="h-10 w-10" />
          <Icon icon="skill-icons:django" className="h-10 w-10" />
          <Icon icon="skill-icons:fastapi" className="h-10 w-10" />
          <Icon icon="logos:numpy" className="h-10 w-10" />
          <Icon icon="devicon:pandas" className="h-10 w-10" />
          <Icon icon="logos:jupyter" className="h-10 w-10" />
        </div>
      </div>

      <div className="m-3 space-y-16 rounded-3xl bg-gradient-to-b from-gray-500 to-gray-800 bg-center bg-no-repeat px-8 py-8">
        <H1 className="text-center">Projects</H1>
        <p className="text-white">
          I have worked on a variety of interesting projects, from social media
          sites built in React to data analysis projects in Jupyter Notebooks
          using Numpy and Pandas. Here are a few of my favorites:
        </p>
        <div className="border-grey-300 m-2 flex flex-wrap justify-between gap-4">
          {/* the Romance */}
          <div className="flex h-32 w-32 flex-col items-center">
            <div className="relative h-3/4 w-full transform rounded-3xl border-2 border-gray-300 transition-transform duration-200 hover:scale-110">
              <Image
                src={romance}
                alt="the romance screenshot"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
            <p className="font-semibold text-black">
              the<span className="text-gray-400">Romance</span>
            </p>
          </div>
          {/*iro iro colorizer */}
          <div className="flex h-32 w-32 flex-col items-center">
            <div className="relative h-3/4 w-full transform rounded-3xl border-2 border-gray-300 transition-transform duration-200 hover:scale-110">
              <Image
                src={iro}
                alt="iro iro screenshot"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>

            <div className="flex w-full flex-col items-center">
              <p className="font-semibold text-black">Iro Iro</p>
            </div>
          </div>
          {/*yourspace */}
          <div className="flex h-32 w-32 flex-col items-center">
            <div className="relative h-3/4 w-full transform rounded-3xl border-2 border-gray-300 transition-transform duration-200 hover:scale-110">
              <Image
                src={yourspace}
                alt="yourspace screenshot"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
            <p className="font-semibold text-black">
              Your<span className="text-gray-400">Space</span>
            </p>
          </div>
        </div>

        <div className="m-2 grid grid-flow-col gap-4"></div>
      </div>
    </section>
  );
}
