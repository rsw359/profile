import Link from "next/link";
import DarkToggle from "./ui/DarkToggle";
export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium">
          <Link className="hover:text-red-600" href="/">
            home
          </Link>
          <Link className="hover:text-red-600" href="/skills">
            skills & projects
          </Link>
          <Link className="hover:text-red-600" href="/about">
            about me
          </Link>
          <Link className="hover:text-red-600" href="/contact">
            contact me
          </Link>
        </nav>
        <div>
          <DarkToggle />
        </div>
      </div>
    </header>
  );
}
