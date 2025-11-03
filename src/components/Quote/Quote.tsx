import { ReactNode } from "react";

export interface Props {
  /**
   * The content of the callout.
   */
  children?: ReactNode;
  /**
   * If `true`, additional top padding is applied. This should be used when multiple instances of the same component
   * are used in series.
   */
  next?: boolean;
  /**
   * If provided, this is the source of the quote
   */
  source?: string;
}


export default function Quote(props: Props) {
  const { children, next, source } = props;

  const renderedEndQuote = (
    <span className="font-['Times_New_Roman'] font-normal text-[#BDCD5D]">
      &rdquo;
    </span>
  );

  const renderedSource = source ? (
    <footer className="pt-4">
      <p className="inline font-normal text-sm leading-4 tracking-[0.25px] text-[#626262]">
        {source}
      </p>
    </footer>
  ) : (
    ""
  );

  return (
    <div className={`flex ${next ? "pt-6" : ""}`}>
      <div className="pr-2 font-['Times_New_Roman'] font-normal text-[64px] leading-none text-[#BDCD5D]">
        &ldquo;
      </div>
      <div className="flex-grow pt-3">
        <blockquote cite={source} className="m-0 p-0">
          <p className="font-secondary font-light text-base leading-normal tracking-[0.5px] text-[#3B3B3B]">
            {children}
            {renderedEndQuote}
          </p>
          {renderedSource}
        </blockquote>
      </div>
    </div>
  );
}
