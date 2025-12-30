import Logo from "../../../components/Logo";
import { Button } from "../../../components/Button";

/**
 * Props for the ContentSuccessful component
 */
interface Props {
  /**
   * Callback fired when the close button is clicked
   */
  onClose: () => void;
}

export default function ContentSuccessful(props: Props) {
  const { onClose } = props;
  return (
    <div className="p-10 text-center">
      <div className="border-1 border-[magenta]">
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

      {/* font-size (24) / 2 = 12 */}
      <h2 className="mt-[1.5874rem] text-2xl leading-none border-1 border-[magenta]">
        Thank you.
      </h2>

      <p className="mt-[1.5874rem] text-base leading-normal text-gray-600 border-1 border-[magenta]">
        We&rsquo;ll chat soon.
      </p>

      <p className="mt-[1.5874rem] text-base leading-normal border-1 border-[magenta]">
        Other ways to connect:
      </p>

      <div className="mt-[1.0rem] border-1 border-[magenta] flex items-center w-full">
        {/* LinkedIn */}
        <div className="w-1/2 border-1 border-[red] flex flex-col items-center text-center">
          <Logo brand="linkedin" variant="grey-500" width={24} />
          <p className="mt-2 font-secondary text-base leading-normal">
            <a
              href="https://www.linkedin.com/in/simonyates/"
              target="_blank"
              rel="noopener noreferrer"
              title="Find me on LinkedIn"
              className="text-gray-900 no-underline hover:underline"
            >
              LinkedIn<br />
              for professional contact
            </a>
          </p>
        </div>

        {/* RSS */}
        <div className="w-1/2 border-1 border-[green] flex flex-col items-center text-center">
          <Logo brand="rss" variant="grey-500" width={24} />
          <p className="mt-2 font-secondary text-base leading-normal">
            <a
              href="https://www.linkedin.com/in/simonyates/"
              target="_blank"
              rel="noopener noreferrer"
              title="RSS"
              className="text-gray-900 no-underline hover:underline"
            >
              RSS<br />
              for updates to writing and work
            </a>
          </p>
        </div>
      </div>
    
      <div className="mt-[1.5874rem] flex justify-center border-1 border-[magenta]">
        <Button onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}
