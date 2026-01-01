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
              className="inline-flex items-center justify-center p-[10px]"
            >
              <Logo brand="linkedin" variant="a4a4a4" width={24} />
            </a>

            <a
              href="/rss.xml"
              title="RSS feed — long-form writing, essays, and project notes"
              className="inline-flex items-center justify-center p-[10px]"
            >
              <Logo brand="rss" variant="a4a4a4" width={24} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
