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
      <div className="xborder-1 border-[magenta]">
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
      <h2 className="mt-[1.5874rem] text-2xl leading-none xborder-1 border-[magenta]">
        Thank you.
      </h2>

      <p className="mt-[1.0rem] text-base leading-normal text-gray-600 xborder-1 border-[magenta]">
        We&rsquo;ll chat soon.
      </p>

      <p className="my-[calc(1.5874rem*2)] text-base leading-normal xborder-1 border-[magenta]">
        Other ways to connect:
      </p>

      <div className="xt-[calc(1.5874rem*1)] xborder-1 border-[magenta] flex items-center w-full xgap-[calc(1.0rem*2)]">
        {/* LinkedIn */}
        <div className="w-1/2 xborder-1 xborder-[red] flex flex-col items-center text-center">
          <a
            href="https://www.linkedin.com/in/simonyates/"
            target="_blank"
            rel="noopener noreferrer"
            title="Simon Yates on LinkedIn"
            className="text-gray-900 no-underline hover:underline"
          >
            <div className="flex flex-col items-center text-center">
              <Logo brand="linkedin" variant="757575" width={24} />
              <div className="mt-2 font-secondary text-base leading-normal">
                LinkedIn<br />
                {/* for professional contact */}
              </div>
            </div>
          </a>
        </div>

        {/* RSS */}
        <div className="w-1/2 xborder-1 xborder-[green] flex flex-col items-center text-center">
          <a
            aria-label="RSS feed — long-form writing, essays, and project notes (open in new tab)"
            href="/rss.xml"
            target="_blank"
            rel="noopener"
            title="RSS feed — long-form writing, essays, and project notes"
            className="text-gray-900 no-underline hover:underline"
          >
            <div className="flex flex-col items-center text-center">
              <Logo brand="rss" variant="757575" width={24} />
              <div className="mt-2 font-secondary text-base leading-normal">
                RSS<br />
                {/* for updates to writing and work */}
              </div>
            </div>
          </a>
        </div>
      </div>
    
      <div className="mt-[calc(1.5874rem*2)] flex justify-center xborder-1 border-[magenta]">
        <Button onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}
