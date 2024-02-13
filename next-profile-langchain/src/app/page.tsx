import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/components/ui/H1";

export const metadata: Metadata = {
  title: "Roger Wells - Portfolio",
  description: "Roger Wells Portfolio",
};

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Sample Text</H1>
        </div>
      </section>
    </section>
  );
}
