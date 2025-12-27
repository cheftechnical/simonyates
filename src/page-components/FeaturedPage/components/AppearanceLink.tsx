import { ReactNode } from "react";

interface Props {
  /**
   * The content of the link.
   */
  children: ReactNode;
  /**
   * Whether this is an external link (renders external link icon).
   */
  external?: boolean;
  /**
   * The URL for the link.
   */
  url: string;
}

export default function AppearanceLink(props: Props) {
  const { children, external = false, url } = props;

  return (
    <a
      href={url}
      className="text-blue-500 no-underline hover:underline inline-flex items-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      {external && (
        <svg
          className="ml-1 h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
}

