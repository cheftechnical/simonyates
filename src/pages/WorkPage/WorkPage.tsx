import React from "react";
import WorkExperience from "./WorkExperience/WorkExperience";
import Li from "../../styling/ListsUnordered/Li/Li";
import Ul from "../../styling/ListsUnordered/Ul/Ul";
import Logo from "../../components/Logo";
import MyContainer from "../../styling/MyContainer/MyContainer";
import MyGridContainer from "../../styling/MyGridContainer/MyGridContainer";
import Hero from "./Hero/Hero";
import PageWrapper from "../../components/PageWrapper";
import NavRight from "../../components/NavRight";
import { Sections } from "../../types/Sections.ts";
import {
  workExperienceData,
  formatDateForWorkPage,
} from "../../data/workExperience";

// Generate sections object from work experience data
const sections: Sections = workExperienceData.reduce((acc, work) => {
  acc[work.sectionId as keyof Sections] = {
    id: work.sectionId,
    title: work.employer,
  };
  return acc;
}, {} as Sections);

export default function WorkPage() {
  return (
    <PageWrapper title="Work">
      <MyContainer>
        <MyGridContainer>
          <div className="w-full md:w-[58.333333%]">
            <Hero />
          </div>
          {/* Gutter */}
          <div className="hidden md:block md:w-[16.666667%]" />
          {/* Navigation */}
          <div className="hidden md:block md:w-1/4 pl-6">
            <NavRight sections={sections} />
          </div>
        </MyGridContainer>

        {workExperienceData.map((work, index) => {
          // Get highlights for each employer
          const highlights = getHighlights(work.sectionId);

          return (
            <MyGridContainer
              key={work.sectionId}
              className={index === 0 ? "mt-[84px]" : "mt-[79px]"}
            >
              <div className="flex-shrink-0 basis-[16.666667%] md:basis-[8.333333%] max-w-[16.666667%] md:max-w-[8.333333%] pl-6 pt-6">
                <Logo brand={work.brand} variant="default" width="100%" />
              </div>
              <div className="flex-shrink-0 basis-[83.333333%] md:basis-[50%] max-w-[83.333333%] md:max-w-[50%] pl-6 pt-6">
                <div id={work.sectionId}>
                  <WorkExperience
                    employer={work.employer}
                    href={work.href}
                    role={typeof work.role === "string" ? work.role : String(work.role)}
                    when={formatDateForWorkPage(work.when)}
                  >
                    {highlights}
                  </WorkExperience>
                </div>
              </div>
            </MyGridContainer>
          );
        })}
      </MyContainer>
    </PageWrapper>
  );
}

/**
 * Returns the highlights section for a given employer.
 * These are the top 3 bullets shown on the WorkPage.
 */
function getHighlights(sectionId: string): React.ReactElement {
  switch (sectionId) {
    case "hellofresh":
      return (
        <Ul>
          <Li>
            <strong>Accessibility Leadership:</strong> Identified and resolved
            compliance issues; supported European Accessibility Act readiness.
          </Li>
          <Li>
            <strong>
              Lifecycle Carbon Visualization (Chapter Day exploration project)
            </strong>
            : Built an internal prototype comparing meal-kit vs. grocery-chain
            carbon impact, sparking conversation on sustainability metrics.
          </Li>
          <Li>
            <strong>Corporate Stewardship Awareness:</strong> Advocated
            measurable, transparent approaches to accessibility and
            sustainability, emphasizing harmony between human and ecological
            systems.
          </Li>
        </Ul>
      );
    case "truenorth":
      return (
        <Ul>
          <Li>
            Scaled frontend engineering from 2 to 12 engineers across four
            teams, establishing hiring processes, mentorship, and accessibility
            standards.
          </Li>
          <Li>
            Partnered closely with design and product to ensure quality,
            inclusivity, and maintainability in all releases.
          </Li>
          <Li>
            Introduced scalable, testable architecture improving reliability
            and developer experience.
          </Li>
        </Ul>
      );
    case "rbc":
      return (
        <Ul>
          <Li>
            Joined during the formation of the SRE team (six months old at the
            time) to build visibility and reporting infrastructure.
          </Li>
          <Li>
            Designed and developed <strong>Global Dashboard</strong>, a
            bespoke reporting platform providing secure, filtered visibility into
            operational data across the bank.
          </Li>
          <Li>
            Ensured data isolation to prevent sensitive information from
            leaking outside the SRE team while enabling safe,
            organization-wide access to key metrics.
          </Li>
        </Ul>
      );
    case "uncharted-software":
      return (
        <Ul>
          <Li>
            Partnered with data scientists and designers to build early
            prototypes of a <strong>causal-graph visualization tool</strong>,
            translating complex relationships into clear, interactive visuals
            used for model refinement and product design.
          </Li>
          <Li>
            Implemented <strong>Natural Language Processing (NLP)</strong>{" "}
            systems to perform Named Entity Recognition (NER) and extract
            features from unstructured and semi-structured data.
          </Li>
          <Li>
            <strong>Explored emerging NLP technologies</strong> such as spaCy
            and Word2Vec to model relationships between entities &mdash;
            foundational experience that later informed an intuitive
            understanding of modern LLM-based systems.
          </Li>
        </Ul>
      );
    case "mayo-clinic":
      return (
        <Ul>
          <Li>
            Co-authored{" "}
            <em>
              &ldquo;Patient-Like-Mine: A Real-Time Visual Analytics Tool for
              Clinical Decision Support&rdquo;
            </em>{" "}
            (IEEE International Conference on Big Data, 2015)
          </Li>
          <Li>
            Collaborated with physicians and data scientists to develop a{" "}
            <strong>real-time visual analytics platform</strong> helping
            clinicians identify similar patient profiles and improve treatment
            decisions.
          </Li>
          <Li>
            Engineered data pipelines transforming HL7 V2 RIM and FHIR medical
            schemas into hierarchical Elasticsearch documents, enabling
            high-speed patient similarity searches.
          </Li>
        </Ul>
      );
    case "genworth-canada":
      return (
        <Ul>
          <Li>
            Designed an intelligent matching system to detect names and
            addresses referring to the same entity, even with different
            spellings.
          </Li>
          <Li>
            Led company-wide <strong>Lunch &amp; Learn</strong> sessions on
            Elasticsearch, raising technical literacy and promoting sustainable
            in-house expertise.
          </Li>
          <Li>
            Identified redundancies that eliminated the need for a third-party
            vendor, saving significant annual costs.
          </Li>
        </Ul>
      );
    case "infomart":
      return (
        <Ul>
          <Li>
            Re-architected Canada&apos;s largest newspaper archive (200 billion+
            articles) for modern search performance and scalability &mdash;
            replacing Microsoft SQL Server with <strong>Elasticsearch</strong>{" "}
            (then in beta, v0.19).
          </Li>
          <Li>
            Designed all document schemas, indexing strategies, and search
            algorithms to optimize retrieval speed and relevance.
          </Li>
          <Li>
            Built and led a new engineering team, managing the full hiring,
            onboarding, and mentoring process.
          </Li>
        </Ul>
      );
    case "jib-design-and-advertising":
      return (
        <Ul>
          <Li>
            Led digital production for boutique Toronto agency serving premium
            clients, including <strong>Apple Canada</strong>.
          </Li>
          <Li>
            <strong>Built an interactive replica of the Montreal Gazette</strong>{" "}
            for Apple&apos;s iPhone launch campaign, ensuring flawless
            performance on early iOS hardware and non-Flash devices.
          </Li>
          <Li>
            <strong>Invented and developed &ldquo;Workflow&rdquo;</strong>, an
            internal collaboration platform allowing designers and clients to
            share, comment on, and approve work directly &mdash; eliminating
            email bottlenecks and reducing miscommunication.
          </Li>
        </Ul>
      );
    case "philips-lighting":
      return (
        <Ul>
          <Li>
            Transitioned from Consumer Goods to Lighting division; served as{" "}
            <strong>Walmart Category Captain</strong> for automotive lighting.
          </Li>
          <Li>
            Automated internal reporting processes through custom-built
            software, reducing manual workload by 18&ndash;22 hours per week.
          </Li>
          <Li>
            <strong>Developed an automated pricing catalogue generator</strong>{" "}
            producing branded, customer-specific Excel and PDF workbooks with
            up-to-date product pricing &mdash; transforming a multi-week process
            into a task completed in minutes.
          </Li>
        </Ul>
      );
    default:
      return (
        <Ul>
          <Li>No highlights available.</Li>
        </Ul>
      );
  }
}
