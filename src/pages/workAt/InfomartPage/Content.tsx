import Callout from "../../../components/Callout/Callout";
import Section from "../../../components/Section/Section";
import Li from "../../../styling/ListsUnordered/Li/Li";
import Ul from "../../../styling/ListsUnordered/Ul/Ul";
import WorkAtDescription from "../components/WorkAtDescription";
import WorkAtProject from "../components/WorkAtProject";
import WorkAtProjects from "../components/WorkAtProjects";
import WorkAtSectionTitle from "../components/WorkAtSectionTitle";
import { sectionCollection } from "./sections.ts";

export default function Content() {
  return (
    <div>
      <div id={sectionCollection.intro.id}>
        <WorkAtDescription>
          Infomart was a division of Postmedia, the industry standard for
          Canadian newspaper&nbsp;archiving.
        </WorkAtDescription>
        <Callout align="center" className="mb-5">
          <p>
            <strong>Fun Fact: </strong>Elasticsearch was still in early beta when
            I started working with it on this project. At the time, the latest
            version was version&nbsp;~&nbsp;0.19–0.2.x
          </p>
        </Callout>
      </div>

      <Section id={sectionCollection.highlights.id}>
        <WorkAtSectionTitle>{sectionCollection.highlights.title}</WorkAtSectionTitle>
        <WorkAtProjects>
          <Ul>
            <Li>Re-architected Canada&apos;s largest newspaper archive (200 billion+ articles) for modern search performance and scalability &mdash; replacing Microsoft SQL Server with <strong>Elasticsearch</strong> (then in beta, v0.19).</Li>
            <Li>Designed all document schemas, indexing strategies, and search algorithms to optimize retrieval speed and relevance.</Li>
            <Li>Built and led a new engineering team, managing the full hiring, onboarding, and mentoring process.</Li>
            <Li>Authored the internal <strong>development style guide</strong> and best practices for long-term maintainability.</Li>
            <Li>Created custom <strong>SVG-based visualizations</strong> to meet unique editorial and analytics needs.</Li>
            <Li>Established the foundation for search-driven content systems that later influenced work across finance, healthcare, and accessibility domains.</Li>
          </Ul>
        </WorkAtProjects>
      </Section>

      <div id={sectionCollection.aboutTheProject.id}>
        <WorkAtSectionTitle>About the Project</WorkAtSectionTitle>
        <p className="font-primary font-normal text-base leading-normal tracking-[0.5px]">
          For the last 30 years, Infomart had collected over 200 million
          newspaper articles from every major Canadian&nbsp;publisher.
        </p>
        <p className="font-primary font-normal text-base leading-normal tracking-[0.5px] mt-6">
          The goal of this project was to enhance the search capabilities of the
          tool, while expanding its archives to include content from leading
          social media platforms like Twitter, Facebook, and&nbsp;YouTube.
        </p>
        <p className="font-primary font-normal text-base leading-normal tracking-[0.5px] mt-6">
          Data was originally stored in Microsoft SQL Server, but given the full
          text requirements of the tool, Elasticsearch proved to be an ideal
          use-case for this modernization effort. Elasticsearch was still in its
          early beta then (~ version 0.19–0.2.x), so the documentation was a
          challenge, but the promise was very&nbsp;high.
        </p>

        <WorkAtProject next name="Languages & Frameworks" />
        <Callout
          list={[
            "PHP + CakePHP",
            "Bootstrap.js",
            "JQuery",
            "Highcharts",
            "SVG",
            "Google Maps API",
            "OAuth 2.0",
            "PHPUnit",
          ]}
        />

        <WorkAtProject next name="Databases & Indices" />
        <Callout
          list={["Elasticsearch", "Memcache", "Microsoft SQL Server", "MySQL"]}
        />

        <WorkAtProject next name="Vendor Services" />
        <Callout
          list={[
            "FQL (Facebook Query Language)",
            "Gnip EDC",
            "Gnip Powertrack",
            "Twitter API",
            "YouTube API",
          ]}
        />
      </div>
    </div>
  );
}
