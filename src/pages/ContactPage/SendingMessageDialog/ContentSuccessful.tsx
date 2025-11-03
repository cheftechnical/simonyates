import Logo from "../../../components/Logo";

export default function ContentSuccessful() {
  return (
    <div className="p-10 text-center">
      <div className="mt-2">
        {/* Custom SVG checkmark icon - replaced Material-UI CheckIcon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[104px] w-[104px] mx-auto text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h2 className="mt-3 font-primary font-normal text-2xl leading-8">
        Thank you.
      </h2>

      <p className="mt-1 font-primary font-normal text-base leading-normal tracking-[0.5px] text-[#626262]">
        We&rsquo;ll chat soon.
      </p>

      <p className="mt-11 font-primary font-normal text-base leading-normal tracking-[0.5px]">
        In the meantime, let&rsquo;s connect on social media:
      </p>

      <div className="mt-4 mb-8 flex justify-center">
        <div>
          {/* LinkedIn */}
          <div className="flex items-center">
            <div>
              <Logo brand="linkedin" variant="grey-500" width={24} />
            </div>
            <div className="ml-1">
              <p className="font-secondary text-base leading-normal tracking-[0.5px]">
                <a
                  href="https://www.linkedin.com/in/simonyates/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Find me on LinkedIn"
                  className="text-[#222222] no-underline hover:underline"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>

          {/*	Twitter */}
          <div className="flex items-center mt-3">
            <div>
              <Logo brand="twitter" variant="grey-500" width={24} />
            </div>
            <div className="ml-1">
              <p className="font-secondary text-base leading-normal tracking-[0.5px]">
                <a
                  href="https://twitter.com/cheftechnical"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow me on Twitter"
                  className="text-[#222222] no-underline hover:underline"
                >
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
