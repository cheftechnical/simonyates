interface Props {
  /**
   * aria-label for accessibility.
   */
  ariaLabel: string;

  /**
   * The URL to link to when the button is clicked.
   */
  href: string;
}

export default function ReadFullDetails(props: Props) {
  const { ariaLabel, href } = props;

  return (
    <div className="mt-8">
      <a
        aria-label={ariaLabel}
        className="inline-flex items-center font-normal text-sm leading-4 tracking-[1.25px] uppercase text-gray-900 pb-1.5 border-b-2 border-white hover:border-gray-900 transition-colors"
        href={href}
      >
        Read Full Details
        <svg
          className="ml-1 h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18l6-6-6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
