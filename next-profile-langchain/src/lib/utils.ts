import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// This function takes an array of class values as input, merges them using clsx, and then applies the Tailwind CSS utility classes using twMerge. Prevents duplicate classes from being applied, allows classes to be applied conditionalally
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
