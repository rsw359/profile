import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <nav className="mx-auto flex max-w-3xl flex-wrap justify-between gap-3 p-3">
        <Link className="text-sm hover:text-red-600" href="/privacy">
          privacy policy
        </Link>

        <p className="text-center text-sm text-gray-300">
          &copy; Roger Wells 2024
        </p>
      </nav>
    </footer>
  );
}
