'use client';

import { useCallback } from "react";

interface Props {
  /**
   * The URI of the resource to be downloaded.
   */
  href: string;
  /**
   * The label of the link. Defaults to "Download".
   */
  label?: string;
  /**
   * If `true`, no top margin is applied. This should be used when multiple instances of the same component
   * are used in series.
   */
  next?: boolean;
}

const defaultProps: Partial<Props> = {
  label: "Download",
};

export default function Download(props: Props) {
  const { href, label, next } = { ...defaultProps, ...props };

  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const link = document.createElement("a");
      link.download = label ? label : "";
      link.href = href;
      link.target = "_blank";
      link.click();
    },
    [href, label]
  );

  return (
    <div className={next ? "" : "mt-8"}>
      <a
        className="inline-flex items-center font-normal text-sm leading-4 tracking-[1.25px] uppercase text-gray-900 pb-1.5 border-b-2 border-white hover:border-gray-900 transition-colors"
        href={href}
        onClick={handleOnClick}
      >
        {label}
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
