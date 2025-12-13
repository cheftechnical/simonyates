import { Link } from "react-router-dom";
import NavRight from "../../components/NavRight";
import PageWrapper from "../../components/PageWrapper";
import Sections from "../../components/Sections/Sections";
import Li from "../../styling/ListsUnordered/Li/Li.tsx";
import Ul from "../../styling/ListsUnordered/Ul/Ul";
import MyContainer from "../../styling/MyContainer/MyContainer";
import FeaturedAbstract from "./components/FeaturedAbstract";
import FeaturedLi from "./components/FeaturedLi";
import FeaturedProjects from "./components/FeaturedProjects";
import FeaturedPublication from "./components/FeaturedPublication";
import FeaturedPublications from "./components/FeaturedPublications";
import FeaturedAppearances from "./components/FeaturedAppearances";
import Download from "../../components/Download";
import NextSection from "./components/NextSection";
import SectionDescription from "./SectionDescription";
import SectionTitle from "./SectionTitle";
import { sections } from "./sections.ts";


export default function Featured() {
  return (
    <PageWrapper title="Featured">
      <MyContainer>
        <div className="flex flex-wrap">
          {/* Content */}
          {/* pr-32 = 128 or 3 visual octaves * 1.5 line height = pr-48 192 */}
          <div className="w-full md:w-9/12 md:pr-48 xborder-1 border-[magenta] ">
            <Sections>
              <FeaturedAppearances />

              <NextSection id={sections.publications.id}>
                <SectionTitle>{sections.publications.title}</SectionTitle>

                <SectionDescription>
                  I&rsquo;ve been incredibly lucky to work along some of the
                  brightest minds of North&nbsp;America
                </SectionDescription>

                <FeaturedPublications>
                  <FeaturedPublication
                    name="Patient-Like-Mine: A Real Time, Visual Analytics Tool for Clinical Decision Support"
                    publisher="IEEE Big Data"
                    tags={[
                      "electronic medical record",
                      "clinical decision support",
                      "real-time analytics",
                      "visual analytics",
                      "data mining"
                    ]}
                    when="2015"
                  >
                    <FeaturedAbstract>
                      Abstract &mdash; We developed a real-time, visual
                      analytics tool for clinical decision support. The system
                      expands the &ldquo;recall of past experience&rdquo;
                      approach that a provider (physician) uses to formulate a
                      course of action for a given patient. By utilizing
                      Big-Data techniques, we enable the provider to recall all
                      similar patients from an institution&rsquo;s electronic
                      medical record (EMR) repository, to explore
                      &ldquo;what-if&rdquo; scenarios, and to collect these
                      evidence-based cohorts for future statistical validation
                      and pattern&nbsp;mining.
                    </FeaturedAbstract>

                    <br />
                    <br />
                    <Download
                      href="https://s3.amazonaws.com/simonyates.ca-downloads/publications/ieee/2015/patient-like-mine.pdf" />
                  </FeaturedPublication>

                  <FeaturedPublication
                    next
                    name="Using Natural Language Processing to Analyze Enterprise–Wide Incident Reports"
                    publisher="RBC"
                    tags={["automation", "custom tooling", "elasticsearch"]}
                    when="June 11, 2020"
                  >
                    <Ul>
                      <FeaturedLi>
                        Interactive dashboards for
                        monitoring&nbsp;infrastructure
                      </FeaturedLi>
                      <FeaturedLi>
                        A live–view monitor shows the status of hundreds of
                        servers in real–time that became an essential tool for
                        Apigee&nbsp;upgrades
                      </FeaturedLi>
                      <FeaturedLi>
                        Real–time monitoring of critical infrastructure to
                        enable the SRE team to monitor SLAs for 99.999%
                        (five–nines)&nbsp;availability
                      </FeaturedLi>
                    </Ul>
                  </FeaturedPublication>
                </FeaturedPublications>
              </NextSection>

              <NextSection id={sections.projects.id}>
                <SectionTitle>{sections.projects.title}</SectionTitle>

                <FeaturedProjects>
                  {/* Projects content will go here */}
                  <Ul>
                    <Li>
                      <Link to="/design-system" className="text-blue-500 no-underline hover:underline">
                        Design System: My personal design system and design&nbsp;aesthetic.
                      </Link>
                    </Li>
                    <Li>
                      <Link to="/figpie" className="text-blue-500 no-underline hover:underline">
                        Figpie: A Figma plugin for making pie charts.
                      </Link>
                    </Li>
                    <Li>
                      <Link to="/trig" className="text-blue-500 no-underline hover:underline">
                        How to Build a Pie Chart With Cubic B&eacute;zier&nbsp;Curves
                      </Link>
                    </Li>
                    </Ul>
                </FeaturedProjects>
              </NextSection>

              <NextSection id={sections.essays.id}>
                <SectionTitle>{sections.essays.title}</SectionTitle>

                <FeaturedProjects>
                  <Ul>
                    <Li>
                      <Link to="/essays/the-imagination-gap-alt-text-ai" className="text-blue-500 no-underline hover:underline">
                        Using AI to See Through Someone Else&rsquo;s Eyes: Validating Alt-Text with Image&nbsp;Generation
                      </Link>
                    </Li>
                  </Ul>
                </FeaturedProjects>
              </NextSection>
            </Sections>
          </div>

          {/* Gutter */}
          {/* <div className="border-1 border-[lime] hidden md:block md:w-2/12" /> */}

          {/* Navigation */}
          <div className="hidden md:block md:w-3/12 xborder-1 border-[blue] ">
            <NavRight sections={sections} />
          </div>
        </div>
      </MyContainer>
    </PageWrapper>
  );
}
