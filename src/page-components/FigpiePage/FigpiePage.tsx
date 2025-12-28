import Link from "next/link";

import PageWrapper from "../../components/PageWrapper";
import MyContainer from "../../styling/MyContainer/MyContainer";

export function FigpiePage() {
  const ulClasses = "xpt-6";
  const liClasses =
    "font-normal text-base leading-normal mt-[calc(1.0rem)] first:mt-0 ml-[21px] pl-0 list-none text-gray-900 list-item-custom-bullet";

  return (
    <PageWrapper title="Figpie">
      <MyContainer>
        <h1 className="font-primary font-normal text-4xl leading-relaxed">
          Figpie
        </h1>
        <p className="font-primary font-normal text-xl leading-8 mt-8">
          Figpie is a Figma plugin for creating clean, well-structured pie
          charts.
        </p>
        <p className="font-primary font-normal text-base leading-normal mt-6">
          Creating pie charts in Figma is harder than it should be. Working
          directly with vectors can be fiddly, and getting angles, alignment and
          proportions right is more complex than it sounds.
        </p>
        <p className="font-primary font-normal text-base leading-normal mt-6">
          Figpie was designed to remove that friction. It focuses on one thing:
          turning data into clean, editable vectors without getting in the way.
        </p>

        <h2 className="font-primary font-normal leading-relaxed text-2xl tracking-[0.25px] mt-[4.0rem]">
          Key features
        </h2>
        <ul className={ulClasses}>
          <li className={liClasses}>Create a pie chart directly from your data</li>
          <li className={liClasses}>Clean, well-structured vectors that are easy to edit</li>
          <li className={liClasses}>Real-time preview before inserting the chart into Figma</li>
          <li className={liClasses}>Four built-in fig-themed colour palettes</li>
          <li className={liClasses}>
            Complete freedom to modify the chart after creation. They are just
            vectors
          </li>
          <li className={liClasses}>Free to use</li>
        </ul>

        <h2 className="font-primary font-normal leading-relaxed text-2xl tracking-[0.25px] mt-[4.0rem]">
          Support and feedback
        </h2>
        <p className="font-primary font-normal text-base leading-normal mt-6">
          If you have found a bug, have a feature idea or want to share
          feedback, please get in touch via the{" "}
          <Link href="/contact" className="text-blue-500 no-underline hover:underline">
            contact&nbsp;page
          </Link>
          .
        </p>
      </MyContainer>
    </PageWrapper>
  );
}

export default FigpiePage;
