import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import profilepic from "@/assets/redcap.jpeg";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Roger Wells - Portfolio",
  description: "Roger Wells Portfolio",
};

export default function Home() {
  return (
    <section className="space-y-16 rounded-3xl bg-gradient-to-b from-gray-500 to-gray-800 bg-center bg-no-repeat px-8 py-8 ">
      <section className="mx-3 grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">
            Hi, I&apos;m <span className="italic text-red-600">Roger</span>
          </H1>
          <p className="text-center text-white sm:text-start">
            I&apos;m a software engineer and designer based in Japan. I love
            building things for the web and I&apos;m always looking for new
            challenges.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={profilepic}
            alt="my profile pic"
            height={300}
            width={300}
            className=" aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2 className="text-white">
          Ask the chatbot{" "}
          <span className="italic text-red-600 underline">anything</span> about
          me!
        </H2>
        <p className="text-white">
          I have a chatbot that can answer questions about me. It&apos;s a fun
          way to learn more about me and my work. Give it a try! Click the
          <Bot className="inline pb-1 pl-1 text-red-600" /> icon in the topbar
          to start chatting.
        </p>
      </section>
    </section>
  );
}
