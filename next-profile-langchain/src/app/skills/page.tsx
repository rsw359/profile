"use client";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Metadata } from "next";
import { Icon } from "@iconify/react";
import profilepic from "@/assets/smile.jpeg";
import Image from "next/image";
import iro from "@/assets/iro.png";
import coffee from "@/assets/coffee2.png";
import romance from "@/assets/romance.png";
import Link from "next/link";
import RomanceModal from "@/components/modals/Romance-Modal";
import IroModal from "@/components/modals/Iro-Modal";
import DataModal from "@/components/modals/Data-Modal";
import DataCarousel from "@/components/carousels/Data-Carousel";
import RomanceCarousel from "@/components/carousels/Romance-Carousel";
import IroCarousel from "@/components/carousels/Iro-Carousel";

export default function Skills() {
  return (
    <>
      <RomanceModal title="The Romance Cycling Blog">
        <div className="flex items-center justify-center rounded-md pb-2">
          <RomanceCarousel />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          eligendi odio ipsa nostrum dolores voluptas architecto tempore nulla
          voluptatibus vel, placeat explicabo exercitationem id officia laborum
          doloremque blanditiis earum accusamus.
        </p>
      </RomanceModal>

      <IroModal title="Iro Iro Colorizer">
        <div className="flex items-center justify-center rounded-md pb-2">
          <IroCarousel />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          eligendi odio ipsa nostrum dolores voluptas architecto tempore nulla
          voluptatibus vel, placeat explicabo exercitationem id officia laborum
          doloremque blanditiis earum accusamus.
        </p>
      </IroModal>
      <DataModal title="Iro Iro Colorizer">
        <div className="flex items-center justify-center rounded-md pb-2">
          <DataCarousel />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          eligendi odio ipsa nostrum dolores voluptas architecto tempore nulla
          voluptatibus vel, placeat explicabo exercitationem id officia laborum
          doloremque blanditiis earum accusamus.
        </p>
      </DataModal>

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
            I enjoy working with a variety of technologies. I have experience
            with many programming languages, frameworks, and tools. I am always
            looking to learn new things and expand my skill set. I am currently
            working with the following technologies:
          </p>

          <div className="m-2 flex flex-wrap justify-between gap-4 ">
            <Icon
              icon="devicon:javascript"
              className="h-10 w-10 transform transition-transform duration-200 hover:scale-110"
            />
            <Icon
              icon="devicon:typescript"
              className="h-10 w-10 transform transition-transform duration-200 hover:scale-110"
            />
            <Icon
              icon="devicon:react-wordmark"
              className="h-10 w-10 transform transition-transform duration-200 hover:scale-110"
            />
            <Icon
              icon="devicon:nextjs"
              className="h-10 w-10 transform transition-transform duration-200 hover:scale-110"
            />
            <Icon
              icon="devicon:python-wordmark"
              className="h-10 w-10 transform transition-transform duration-200 hover:scale-110"
            />
            <Icon
              icon="skill-icons:django"
              className="h-10 w-10 transform transition-transform duration-200 hover:scale-110"
            />
            <Icon
              icon="skill-icons:fastapi"
              className="h-10 w-10 transform transition-transform duration-200 hover:scale-110"
            />
            <Icon
              icon="logos:numpy"
              className="h-10 w-10 transform transition-transform duration-200 hover:scale-110"
            />
            <Icon
              icon="devicon:pandas"
              className="h-10 w-10 transform transition-transform duration-200 hover:scale-110"
            />
            <Icon
              icon="logos:jupyter"
              className="h-10 w-10 transform transition-transform duration-200 hover:scale-110"
            />
          </div>
        </div>

        <div className="m-3 space-y-16 rounded-3xl bg-gradient-to-b from-gray-500 to-gray-800 bg-center bg-no-repeat px-8 py-8">
          <H1 className="text-center">Projects</H1>
          <p className="text-white">
            I have worked on a variety of interesting projects, from social
            media sites built in React to data analysis projects in Jupyter
            Notebooks using Numpy and Pandas. Here are a few of my favorites:
          </p>
          <div className="border-grey-300 m-2 grid place-items-center md:flex md:flex-wrap md:justify-between md:gap-4 ">
            {/* the Romance */}
            <div className="flex h-48 w-48 flex-col items-center">
              <div className="relative h-3/4 w-full transform rounded-3xl transition-transform duration-200 hover:scale-110">
                <Link href="/skills?showModal=1" scroll={false}>
                  <Image
                    src={romance}
                    alt="the romance screenshot"
                    className="w-42 h-32 rounded-2xl"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                  />
                </Link>
              </div>
              <p className="text-center font-semibold text-black">
                the<span className="text-gray-400">Romance</span>
              </p>
            </div>
            {/*iro iro colorizer */}
            <div className="flex h-48 w-48 flex-col items-center">
              <div className="relative h-3/4 w-full transform rounded-3xl  transition-transform duration-200 hover:scale-110">
                <Link href="/skills?showModal=2" scroll={false}>
                  <Image
                    src={iro}
                    alt="iro iro screenshot"
                    className="w-42 h-32 rounded-2xl"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                  />
                </Link>
              </div>

              <div className="flex w-full flex-col items-center">
                <p className="font-semibold text-black">
                  Iro <span className="text-gray-400">Iro</span>
                </p>
              </div>
            </div>
            {/*yourspace */}
            <div className="flex h-48 w-48 flex-col items-center">
              <div className="relative h-3/4 w-full transform rounded-3xl  transition-transform duration-200 hover:scale-110">
                <Link href="/skills?showModal=3" scroll={false}>
                  <Image
                    src={coffee}
                    alt="data screenshot"
                    className="w-42 h-32 rounded-2xl"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                  />
                </Link>
              </div>
              <p className="font-semibold text-black">
                Data<span className="text-gray-400">Projects</span>
              </p>
            </div>
          </div>

          <div className="m-2 grid grid-flow-col gap-4"></div>
        </div>
      </section>
    </>
  );
}
