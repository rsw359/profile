import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Roger Wells Privacy Policy",
};

export default function Privacy() {
  return (
    <section className="space-y-16 rounded-3xl bg-gradient-to-b from-gray-500 to-gray-800 bg-center bg-no-repeat px-8 py-8">
      <div>
        <H1 className="justify-center">Privacy Policy</H1>
        <p className="text-white">
          The purpose of this site is to allow you to get to know me and see
          some of the projects that I have worked on. As such, I do not collect
          any of your personal data. The chat bot stores previous searches to
          optimize the speed at which responses can be delivered. However,
          searches are not related to you or any of your personal data. Thanks
          for visiting!
        </p>
      </div>
    </section>
  );
}

// bg-gradient-to-b from-gray-500 to-gray-800
