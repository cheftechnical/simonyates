import Logo from "../../../components/Logo";
import Container from "../../../components/Container/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="w-full py-8 bg-[#222222]"
      aria-label="Site Directory"
      role="navigation"
    >
      <Container>
        <div className="grid grid-cols-[1fr_auto] gap-6 items-start">
          {/* Left column */}
          <div className="min-w-0">
            <Link href="/">
              <Logo brand="simon-yates" variant="eeeeee" width={130} />
            </Link>

            <div className="pt-2">
              <p className="text-sm text-gray-400">&copy; 2026 Sybaris Analytics Corporation</p>
              <p className="text-sm text-gray-400">
                <Link href="/legal" className="text-gray-400 hover:underline hover:text-gray-50">
                  Legal
                </Link>
                {' '}&middot;{' '}
                <Link href="/about" className="text-gray-400 hover:underline hover:text-gray-50">
                  About
                </Link>
                {' '}&middot;{' '}
                <Link href="/contact" className="text-gray-400 hover:underline hover:text-gray-50">
                  Contact
                </Link>
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="justify-self-end self-center flex items-center">
            <a
              rel="noopener"
              title="Simon Yates on LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/simonyates/"
              className="group inline-flex items-center justify-center p-[10px]"
            >
              <span className="relative block h-6 w-6">
                <span className="absolute inset-0 opacity-100 transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0">
                  <Logo brand="linkedin" variant="a4a4a4" width={24} />
                </span>
                <span className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Logo brand="linkedin" variant="dadada" width={24} />
                </span>
              </span>
            </a>

            <a
              href="/rss.xml"
              title="RSS feed — long-form writing, essays, and project notes"
              className="group inline-flex items-center justify-center p-[10px]"
            >
              <span className="relative block h-6 w-6">
                <span className="absolute inset-0 opacity-100 transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0">
                  <Logo brand="rss" variant="a4a4a4" width={24} />
                </span>
                <span className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Logo brand="rss" variant="dadada" width={24} />
                </span>
              </span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
