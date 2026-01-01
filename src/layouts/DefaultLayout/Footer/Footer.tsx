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
        <div className="flex flex-wrap">
          <div className="p-0 w-full basis-full max-w-full">
            <Link href="/">
              <Logo brand="simon-yates" variant="eeeeee" width={130} />
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="pt-2 w-1/2 basis-1/2 max-w-1/2">
            <p className="text-sm text-gray-400">
              &copy; 2026 Sybaris Analytics Corporation
              <br />
            </p>
            <p className="text-sm text-gray-400">
              <Link href="/legal" className="text-gray-400 hover:underline hover:text-gray-50">
                Legal
              </Link>
              {" "}&middot;{" "}
              <Link href="/about" className="text-gray-400 hover:underline hover:text-gray-50">
                About
              </Link>
              {" "}&middot;{" "}
              <Link href="/contact" className="text-gray-400 hover:underline hover:text-gray-50">
                Contact
              </Link>
            </p>
          </div>
          <div className="flex justify-end w-1/2 basis-1/2 max-w-1/2">
            <a
              rel="noopener"
              title="Find me on LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/simonyates/"
              className="ml-6"
            >
              <Logo brand="linkedin" variant="grey-300" width={24} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
