import { cn } from "@/lib/utils";

//This function adds default styles to the h1 tag and allows for additional styles to be added via the className prop using the cn function imported from the utils file
export function H3(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h3
      {...props}
      className={cn("text-xl font-semibold tracking-tight", props.className)}
    />
  );
}
