import PageWrapper from "../../components/PageWrapper";
import Li from "../../styling/ListsUnordered/Li/Li";
import Ul from "../../styling/ListsUnordered/Ul/Ul";
import MyContainer from "../../styling/MyContainer/MyContainer";

export function FigpiePage() {
  return (
    <PageWrapper title="Figpie">
      <MyContainer>
        <h1 className="font-primary font-normal text-4xl leading-relaxed">
          Figpie
        </h1>
        <p className="font-primary font-normal text-xl leading-8 mt-8">
          <strong>Figpie</strong> creates beautiful pie charts in Figma.
        </p>
        <p className="font-primary font-normal text-base leading-normal mt-6">
          Creating pie charts in Figma is hard. Working with vectors can be
          challenging, and creating a chart that lines up correctly is more
          tricky than it sounds!
        </p>
        <p className="font-primary font-normal text-base leading-normal mt-6">
          I created Figpie to be as simple and intuitive as possible. It is a
          tool for designers.
        </p>
        <p className="font-primary font-normal text-base leading-normal mt-6">
          Key Features:
        </p>
        <Ul next>
          <Li>Creates a pie chart from your data</Li>
          <Li>Vectors are clean and easy to work with</Li>
          <Li>
            A real-time preview lets you see your pie chart before it is created
            in Figma
          </Li>
          <Li>
            Includes 4 built-in <em>fig</em> themed color palettes :-)
          </Li>
          <Li>
            Complete freedom to modify the pie cart after it's created &mdash;
            they&rsquo;re just vectors after all
          </Li>
        </Ul>
        <p className="font-primary font-normal text-base leading-normal mt-6">
          And it&rsquo;s 100% free!
        </p>

        <h2 className="font-primary font-normal leading-relaxed text-2xl tracking-[0.25px] mt-[4.0rem]">
          Support
        </h2>
        <p className="font-primary font-normal text-base leading-normal mt-6">
          Found a bug or have a feature request? Message me on Twitter{" "}
          <a
            href="https://twitter.com/cheftechnical"
            rel="external noopener noreferrer"
            target="_blank"
            className="text-blue-500 no-underline hover:underline"
          >
            @ChefTechnical
          </a>
        </p>
      </MyContainer>
    </PageWrapper>
  );
}

export default FigpiePage;
