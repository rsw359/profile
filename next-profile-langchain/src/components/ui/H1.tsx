import { cn } from "@/lib/utils";

//This function adds default styles to the h1 tag and allows for additional styles to be added via the className prop using the cn function imported from the utils file
export function H1(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn(
        "text-3xl font-bold tracking-tight sm:text-4xl",
        props.className,
      )}
    />
  );
}
