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

const sections: Sections = {
  truenorth: {
    id: "truenorth",
    title: "TrueNorth",
  },
  rbc: {
    id: "rbc",
    title: "RBC",
  },
  unchartedSoftware: {
    id: "uncharted-software",
    title: "Uncharted Software",
  },
  mayoClinic: {
    id: "mayo-clinic",
    title: "Mayo Clinic",
  },
  genworthCanada: {
    id: "genworth-canada",
    title: "Genworth Canada",
  },
  infomart: {
    id: "infomart",
    title: "Infomart",
  },
  jibDesignAndAdvertising: {
    id: "jib-design-and-advertising",
    title: "Jib Design & Advertising",
  },
  philipsLighting: {
    id: "philips-lighting",
    title: "Philips Lighting",
  },
};

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

        {/* TrueNorth */}
        <MyGridContainer className="mt-[84px]">
          <div className="flex-shrink-0 basis-[16.666667%] md:basis-[8.333333%] max-w-[16.666667%] md:max-w-[8.333333%] pl-6 pt-6">
            <Logo brand="truenorth" variant="default" width="100%" />
          </div>
          <div className="flex-shrink-0 basis-[83.333333%] md:basis-[50%] max-w-[83.333333%] md:max-w-[50%] pl-6 pt-6">
            <div id="truenorth">
              <WorkExperience
              employer="TrueNorth"
              href="/work/truenorth"
              role="Team Lead & Staff Frontend Software Engineer"
              when="2012–2023"
            >
              <Ul>
                <Li>
                  Successfully influenced a critical change to the new product,
                  which is used daily by RBC&rsquo;s business customers, without
                  delaying the launch&nbsp;date
                </Li>
                <Li>
                  Designed an analytics tool that is now essential to any of the
                  80,000 worldwide employees who have a vested interest in the
                  bank&rsquo;s critical infrastructure. The product is used
                  everyday by engineers and decision makers to monitor more than
                  1,200 public and private APIs. It is the face of the
                  SRE&nbsp;team.
                </Li>
                <Li>
                  Advised multiple teams across RBC on Elasticsearch
                  optimization techniques
                </Li>
                <Li>
                  Wrote a machine learning model with scikit-learn to detect
                  anomalies in system logs and incident&nbsp;reports
                </Li>
                <Li>
                  Built a chatbot to reduce time the team spends responding to
                  customer&nbsp;questions
                </Li>
              </Ul>
            </WorkExperience>
            </div>
          </div>
        </MyGridContainer>

        {/* RBC */}
        <MyGridContainer className="mt-[79px]">
          <div className="flex-shrink-0 basis-[16.666667%] md:basis-[8.333333%] max-w-[16.666667%] md:max-w-[8.333333%] pl-6 pt-6">
            <Logo brand="rbc" variant="default" width="100%" />
          </div>
          <div className="flex-shrink-0 basis-[83.333333%] md:basis-[50%] max-w-[83.333333%] md:max-w-[50%] pl-6 pt-6">
            <div id="rbc">
              <WorkExperience
                employer="RBC"
                href="/work/rbc"
                role="Product Manager / Lead Software Engineer"
                when="2018–2021"
              >
              <Ul>
                <Li>
                  Joined during the formation of the SRE team (six months old at the time) to build visibility and reporting infrastructure.
                </Li>
                <Li>
                  Designed and developed <strong>Global Dashboard</strong>, a bespoke reporting platform providing secure, filtered visibility into operational data across the bank.
                </Li>
                <Li>
                  Ensured data isolation to prevent sensitive information from leaking outside the SRE team while enabling safe, organization-wide access to key metrics.
                </Li>
              </Ul>
            </WorkExperience>
            </div>
          </div>
        </MyGridContainer>

        {/* Uncharted Software */}
        <MyGridContainer className="mt-[79px]">
          <div className="flex-shrink-0 basis-[16.666667%] md:basis-[8.333333%] max-w-[16.666667%] md:max-w-[8.333333%] pl-6 pt-6">
            <Logo brand="uncharted-software" variant="default" width="100%" />
          </div>
          <div className="flex-shrink-0 basis-[83.333333%] md:basis-[50%] max-w-[83.333333%] md:max-w-[50%] pl-6 pt-6">
            <div id="uncharted-software">
              <WorkExperience
                employer="Uncharted Software"
                href="/work/uncharted-software"
                role="Senior Software Architect"
                when="2015–2018"
              >
              <Ul>
                <Li>
                  Partnered with data scientists and designers to build early prototypes of a <strong>causal-graph visualization tool</strong>, translating complex relationships into clear, interactive visuals used for model refinement and product design.
                </Li>
                <Li>
                  Implemented <strong>Natural Language Processing (NLP)</strong> systems to perform Named Entity Recognition (NER) and extract features from unstructured and semi-structured data.
                </Li>
                <Li>
                  <strong>Explored emerging NLP technologies</strong> such as spaCy and Word2Vec to model relationships between entities &mdash; foundational experience that later informed an intuitive understanding of modern LLM-based systems.
                </Li>
              </Ul>
            </WorkExperience>
            </div>
          </div>
        </MyGridContainer>

        {/* Mayo Clinic */}
        <MyGridContainer className="mt-[79px]">
          <div className="flex-shrink-0 basis-[16.666667%] md:basis-[8.333333%] max-w-[16.666667%] md:max-w-[8.333333%] pl-6 pt-6">
            <Logo brand="mayo-clinic" variant="default" width="100%" />
          </div>
          <div className="flex-shrink-0 basis-[83.333333%] md:basis-[50%] max-w-[83.333333%] md:max-w-[50%] pl-6 pt-6">
            <div id="mayo-clinic">
              <WorkExperience
                employer="Mayo Clinic"
                href="/work/mayo-clinic"
                role="Software Engineer"
                when="2014–2015"
              >
              <Ul>
                <Li>
                  Co-authored <em>&ldquo;Patient-Like-Mine: A Real-Time Visual Analytics Tool for Clinical Decision Support&rdquo;</em> (IEEE International Conference on Big Data, 2015)
                </Li>
                <Li>
                  Collaborated with physicians and data scientists to develop a <strong>real-time visual analytics platform</strong> helping clinicians identify similar patient profiles and improve treatment decisions.
                </Li>
                <Li>
                  Engineered data pipelines transforming HL7 V2 RIM and FHIR medical schemas into hierarchical Elasticsearch documents, enabling high-speed patient similarity searches.
                </Li>
              </Ul>
            </WorkExperience>
            </div>
          </div>
        </MyGridContainer>

        {/* Genworth Canada */}
        <MyGridContainer className="mt-[79px]">
          <div className="flex-shrink-0 basis-[16.666667%] md:basis-[8.333333%] max-w-[16.666667%] md:max-w-[8.333333%] pl-6 pt-6">
            <Logo brand="genworth-canada" variant="default" width="100%" />
          </div>
          <div className="flex-shrink-0 basis-[83.333333%] md:basis-[50%] max-w-[83.333333%] md:max-w-[50%] pl-6 pt-6">
            <div id="genworth-canada">
              <WorkExperience
                employer="Genworth Canada"
                href="/work/genworth-canada"
                role="Developer"
                when="2014–2015"
              >
              <Ul>
                <Li>
                  Designed an intelligent matching system to detect names and addresses referring to the same entity, even with different spellings.
                </Li>
                <Li>
                  Led company-wide <strong>Lunch &amp; Learn</strong> sessions on Elasticsearch, raising technical literacy and promoting sustainable in-house expertise.
                </Li>
                <Li>
                  Identified redundancies that eliminated the need for a third-party vendor, saving significant annual costs.
                </Li>
              </Ul>
            </WorkExperience>
            </div>
          </div>
        </MyGridContainer>

        {/* Infomart */}
        <MyGridContainer className="mt-[79px]">
          <div className="flex-shrink-0 basis-[16.666667%] md:basis-[8.333333%] max-w-[16.666667%] md:max-w-[8.333333%] pl-6 pt-6">
            <Logo brand="infomart" variant="default" width="100%" />
          </div>
          <div className="flex-shrink-0 basis-[83.333333%] md:basis-[50%] max-w-[83.333333%] md:max-w-[50%] pl-6 pt-6">
            <div id="infomart">
              <WorkExperience
                employer="Infomart"
                href="/work/infomart"
                role="Architect & Lead Developer"
                when="2012–2014"
              >
              <Ul>
                <Li>
                  Re-architected Canada&apos;s largest newspaper archive (200 billion+ articles) for modern search performance and scalability &mdash; replacing Microsoft SQL Server with <strong>Elasticsearch</strong> (then in beta, v0.19).
                </Li>
                <Li>
                  Designed all document schemas, indexing strategies, and search algorithms to optimize retrieval speed and relevance.
                </Li>
                <Li>
                  Built and led a new engineering team, managing the full hiring, onboarding, and mentoring process.
                </Li>
              </Ul>
            </WorkExperience>
            </div>
          </div>
        </MyGridContainer>

        {/* Jib Design & Advertising */}
        <MyGridContainer className="mt-[79px]">
          <div className="flex-shrink-0 basis-[16.666667%] md:basis-[8.333333%] max-w-[16.666667%] md:max-w-[8.333333%] pl-6 pt-6">
            <Logo
              brand="jib-design-and-advertising"
              variant="default"
              width="100%"
            />
          </div>
          <div className="flex-shrink-0 basis-[83.333333%] md:basis-[50%] max-w-[83.333333%] md:max-w-[50%] pl-6 pt-6">
            <div id="jib-design-and-advertising">
              <WorkExperience
                employer="Jib Design & Advertising"
                href="/work/jib-design-and-advertising"
                role="Technical Director"
                when="2007–2008"
              >
              <Ul>
                <Li>
                  Led digital production for boutique Toronto agency serving premium clients, including <strong>Apple Canada</strong>.
                </Li>
                <Li>
                  <strong>Built an interactive replica of the Montreal Gazette</strong> for Apple&apos;s iPhone launch campaign, ensuring flawless performance on early iOS hardware and non-Flash devices.
                </Li>
                <Li>
                  <strong>Invented and developed &ldquo;Workflow&rdquo;</strong>, an internal collaboration platform allowing designers and clients to share, comment on, and approve work directly &mdash; eliminating email bottlenecks and reducing miscommunication.
                </Li>
              </Ul>
            </WorkExperience>
            </div>
          </div>
        </MyGridContainer>

        {/* Philips Lighting */}
        <MyGridContainer className="mt-[79px]">
          <div className="flex-shrink-0 basis-[16.666667%] md:basis-[8.333333%] max-w-[16.666667%] md:max-w-[8.333333%] pl-6 pt-6">
            <Logo brand="philips-lighting" variant="default" width="100%" />
          </div>
          <div className="flex-shrink-0 basis-[83.333333%] md:basis-[50%] max-w-[83.333333%] md:max-w-[50%] pl-6 pt-6">
            <div id="philips-lighting">
              <WorkExperience
                employer="Philips Lighting"
                href="/work/philips-lighting"
                role="Retail Sales & Business Data Analyst"
                when="2002–2006"
              >
              <Ul>
                <Li>
                  Transitioned from Consumer Goods to Lighting division; served as <strong>Walmart Category Captain</strong> for automotive lighting.
                </Li>
                <Li>
                  Automated internal reporting processes through custom-built software, reducing manual workload by 18&ndash;22 hours per week.
                </Li>
                <Li>
                  <strong>Developed an automated pricing catalogue generator</strong> producing branded, customer-specific Excel and PDF workbooks with up-to-date product pricing &mdash; transforming a multi-week process into a task completed in minutes.
                </Li>
              </Ul>
            </WorkExperience>
            </div>
          </div>
        </MyGridContainer>
      </MyContainer>
    </PageWrapper>
  );
}
