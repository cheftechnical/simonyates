import Logo from "../../../components/Logo";
import { MyButton } from "../../../components/MyButton";

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
      <div className="mt-0">
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
      <h2 className="mt-3 font-primary font-normal text-xl leading-8">
        Thank you.
      </h2>

      <p className="mt-1 font-primary font-normal text-base leading-normal text-gray-600">
        We&rsquo;ll chat soon.
      </p>

      <p className="mt-8 font-primary font-normal text-base leading-normal">
        In the meantime, let&rsquo;s connect on social media:
      </p>

      <div className="mt-4 flex justify-center">
        {/* LinkedIn */}
        <div className="flex items-center">
          <div>
            <Logo brand="linkedin" variant="grey-500" width={24} />
          </div>
          <div className="ml-1">
            <p className="font-secondary text-base leading-normal">
              <a
                href="https://www.linkedin.com/in/simonyates/"
                target="_blank"
                rel="noopener noreferrer"
                title="Find me on LinkedIn"
                className="text-gray-900 no-underline hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>          
      </div>

      <div className="flex justify-center mt-12">
        <MyButton onClick={onClose}>
          Close
        </MyButton>
      </div>
    </div>
  );
}
