import { Link } from "react-router-dom";
import NavRight from "../../components/NavRight";
import PageWrapper from "../../components/PageWrapper";
import Section from "../../components/Section/Section";
import Sections from "../../components/Sections/Sections";
import Li from "../../styling/ListsUnordered/Li/Li.tsx";
import Ul from "../../styling/ListsUnordered/Ul/Ul";
import MyContainer from "../../styling/MyContainer/MyContainer";
import MyGridContainer from "../../styling/MyGridContainer/MyGridContainer";
import FeaturedAbstract from "./components/FeaturedAbstract";
import FeaturedChips from "./components/FeaturedChips";
import FeaturedEvent from "./components/FeaturedEvent";
import FeaturedEvents from "./components/FeaturedEvents";
import FeaturedLi from "./components/FeaturedLi";
import FeaturedProjects from "./components/FeaturedProjects";
import FeaturedPublication from "./components/FeaturedPublication";
import FeaturedPublications from "./components/FeaturedPublications";
import Download from "./Download";
import NextSection from "./components/NextSection";
import SectionDescription from "./SectionDescription";
import SectionTitle from "./SectionTitle";
import { sections } from "./sections.ts";


export default function Featured() {
  return (
    <PageWrapper title="Featured">
      <MyContainer>
        <MyGridContainer>
          {/* Content */}
          <div className="w-full md:w-1/2">
            <Sections>
              <Section id={sections.publications.id}>
                <SectionTitle>Publications</SectionTitle>

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
              </Section>

              <NextSection id={sections.events.id}>
                <SectionTitle>Events</SectionTitle>

                {/*<SectionDescription>*/}
                {/*	I frequently create presentations about the different projects that I'm working on for our bi-weekly town hall. In 2019, I also hosted an interactive workshop in partnership with Elastic on machine learning for Catalyst, which is an RBC–specific event taking place during the week of Toronto's popular technology event: Collision.*/}
                {/*</SectionDescription>*/}

                <FeaturedEvents>
                  <FeaturedEvent
                    title="Anomaly Detection with Elasticsearch"
                    host="Catalyst/Collision"
                    when="Sep 25, 2019"
                  >
                    <FeaturedChips
                      list={[
                        "talk",
                        "workshop",
                        "machine learning",
                        "anomaly detection"
                      ]}
                    />

                    <Ul>
                      <FeaturedLi>
                        Talk + Workshop with step-by-step guide&nbsp;handout
                      </FeaturedLi>
                      <FeaturedLi>Demo booth featuring our&nbsp;chatbot</FeaturedLi>
                    </Ul>
                  </FeaturedEvent>

                  <FeaturedEvent
                    next
                    title="Patient-Like-Mine"
                    host="IEEE International Conference on Big Data"
                    when="Oct 29 – Nov 1, 2015"
                  >
                    <Download
                      href="https://s3.amazonaws.com/simonyates.ca-downloads/publications/ieee/2015/patient-like-mine.pdf"
                      label="Download Paper"
                    />
                    <br />
                    <Download
                      next
                      href="https://s3.amazonaws.com/simonyates.ca-downloads/events/2015/ieee-international-conference-on-big-data/program-schedule.pdf"
                      label="Download Program Schedule"
                    />
                  </FeaturedEvent>
                </FeaturedEvents>
              </NextSection>

              <NextSection id={sections.projects.id}>
                <SectionTitle>Projects</SectionTitle>

                <FeaturedProjects>
                  {/* Projects content will go here */}
                  <Ul>
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
            </Sections>
          </div>

          {/* Gutter */}
          <div className="hidden md:block md:w-1/4" />

          {/* Navigation */}
          <div className="hidden md:block md:w-1/4">
            <NavRight sections={sections} />
          </div>
        </MyGridContainer>
      </MyContainer>
    </PageWrapper>
  );
}
