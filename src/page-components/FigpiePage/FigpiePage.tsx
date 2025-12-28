import Link from "next/link";

import MyContainer from "../../styling/MyContainer/MyContainer";

export function FigpiePage() {
  const ulClasses = "mt-[calc(1.0rem)]";
  const liClasses =
    "font-normal text-base leading-normal mt-[calc(1.0rem)] first:mt-0 ml-[21px] pl-0 list-none text-gray-900 list-item-custom-bullet";

  return (
    <MyContainer>
      <div className="w-full md:w-2/3">
        <h1 className="font-primary font-normal text-4xl leading-relaxed">
          Figpie
        </h1>
        <p className="font-primary font-normal text-xl leading-relaxed mt-[calc(1.0rem)] text-gray-600">
          <strong>Figpie</strong> is a Figma plugin for creating clean,
          well-structured pie&nbsp;charts.
        </p>
        <p className="font-primary font-normal text-base leading-normal mt-[calc(1.0rem*2)]">
          Creating pie charts in Figma is harder than it should be. Working
          directly with vectors can be fiddly, and getting angles, alignment and
          proportions right is more complex than it&nbsp;sounds.
        </p>
        <p className="font-primary font-normal text-base leading-normal mt-[calc(1.0rem)]">
          Figpie was designed to remove that friction. It focuses on one thing:
          turning data into clean, editable vectors without getting in the&nbsp;way.
        </p>

        <p className="font-primary font-normal text-base leading-normal mt-[calc(1.0rem)]">
          You can view and install the plugin from the{" "}
          <a
            href="https://www.figma.com/community/plugin/924390003304842148"
            rel="external noopener noreferrer"
            target="_blank"
            className="text-blue-500 no-underline hover:underline inline-flex items-center whitespace-nowrap"
          >
            Figma&nbsp;Community
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
          </a>
          .
        </p>

        <h2 className="font-primary font-normal leading-relaxed text-xl mt-[calc(1.5874rem*2)]">
          Key&nbsp;features
        </h2>
        <ul className={ulClasses}>
          <li className={liClasses}>Create a pie chart directly from your&nbsp;data</li>
          <li className={liClasses}>Clean, well-structured vectors that are easy to&nbsp;edit</li>
          <li className={liClasses}>Real-time preview before inserting the chart into&nbsp;Figma</li>
          <li className={liClasses}>Four built-in fig-themed colour&nbsp;palettes</li>
          <li className={liClasses}>
            Complete freedom to modify the chart after creation. They are
            just&nbsp;vectors
          </li>
          <li className={liClasses}>Free to&nbsp;use</li>
        </ul>

        <h2 className="font-primary font-normal leading-relaxed text-xl mt-[calc(1.5874rem*2)]">
          Support and&nbsp;feedback
        </h2>
        <p className="font-primary font-normal text-base leading-normal mt-[calc(1.0rem)]">
          If you have found a bug, have a feature idea or want to share feedback,
          please get in&nbsp;touch via the{" "}
          <Link href="/contact" className="text-blue-500 no-underline hover:underline">
            contact&nbsp;page
          </Link>
          .
        </p>
      </div>
    </MyContainer>
  );
}

export default FigpiePage;
