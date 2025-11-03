import { Link as ReactRouterDomLink } from "react-router-dom";
import Logo from "../../../components/Logo";
import MyContainer from "../../../styling/MyContainer/MyContainer";

export default function Footer() {
  return (
    <div
      className="w-full pt-8 pb-6 bg-[#222222]"
      aria-label="Site Directory"
      role="navigation"
    >
      <MyContainer>
        <div className="flex flex-wrap">
          <div className="p-0 w-full basis-full max-w-full">
            <ReactRouterDomLink to="/">
              <Logo brand="simon-yates" variant="grey-100" width={128} />
            </ReactRouterDomLink>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="pt-4 w-1/2 basis-1/2 max-w-1/2">
            <p className="font-secondary text-[12px] text-[#9E9E9E]">
              &copy; 2025 Sybaris Analytics Corporation
              <br />
            </p>
            <p className="font-secondary text-[12px] text-gray-400">
              <ReactRouterDomLink to="/legal" className="text-gray-400 hover:underline hover:text-gray-50">
                Legal
              </ReactRouterDomLink>
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

            <a
              rel="noopener"
              title="Follow me on Twitter"
              target="_blank"
              href="https://twitter.com/cheftechnical"
              className="ml-6"
            >
              <Logo brand="twitter" variant="grey-300" width={24} />
            </a>
          </div>
        </div>
      </MyContainer>
    </div>
  );
}
