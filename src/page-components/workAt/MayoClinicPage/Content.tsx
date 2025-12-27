import Callout from "../../../components/Callout/Callout";
import Figure from "../../../components/Figure/Figure";
import Section from "../../../components/Section/Section";
import Sections from "../../../components/Sections/Sections";
import Li from "../../../styling/ListsUnordered/Li/Li";
import Ul from "../../../styling/ListsUnordered/Ul/Ul";
import WorkAtDescription from "../components/WorkAtDescription";
import WorkAtEvent from "../components/WorkAtEvent";
import WorkAtEvents from "../components/WorkAtEvents";
import WorkAtEventsGroup from "../components/WorkAtEventsGroup";
import WorkAtProjects from "../components/WorkAtProjects";
import WorkAtPublication from "../components/WorkAtPublication";
import WorkAtPublications from "../components/WorkAtPublications";
import WorkAtSectionTitle from "../components/WorkAtSectionTitle";
import { sections } from "./sections";

export default function Content() {
  return (
    <Sections>
      <Section id={sections.intro.id}>
        <WorkAtDescription>
          Mayo Clinic is an American nonprofit academic medical center based in
          Rochester, MN, focused on integrated patient care, education and
          research. It employs over 4,500 physicians and scientists, along with
          58,400 administrative and allied health&nbsp;staff.
        </WorkAtDescription>
      </Section>

      <Section id={sections.highlights.id}>
        <WorkAtSectionTitle>{sections.highlights.title}</WorkAtSectionTitle>
        <WorkAtProjects>
          <Ul>
            <Li>Co-authored <em>&ldquo;Patient-Like-Mine: A Real-Time Visual Analytics Tool for Clinical Decision Support&rdquo;</em> (IEEE International Conference on Big Data, 2015)</Li>
            <Li>Collaborated with physicians and data scientists to develop a <strong>real-time visual analytics platform</strong> helping clinicians identify similar patient profiles and improve treatment decisions.</Li>
            <Li>Engineered data pipelines transforming HL7 V2 RIM and FHIR medical schemas into hierarchical Elasticsearch documents, enabling high-speed patient similarity searches.</Li>
            <Li>Rewrote experimental prototypes for <strong>production reliability and speed</strong>.</Li>
            <Li>Optimized query performance for large-scale datasets to support responsive clinical workflows.</Li>
            <Li>Strengthened data integrity and patient-privacy practices &mdash; balancing innovation with ethical responsibility in health data visualization.</Li>
          </Ul>
        </WorkAtProjects>
      </Section>

      <Section id={sections.patientLikeMine.id}>
        <WorkAtSectionTitle>Patient Like Mine</WorkAtSectionTitle>

        <p className="font-primary font-normal text-base leading-normal">
          The Patient Like Mine project was a real-time, visual analytics tool
          for clinical decision support. The System expands the &ldquo;recall of
          past experience&rdquo; approach that a provider (physician) uses to
          formulate a course of action for a given patient. By utilizing Big
          Data techniques, we enable the provider to recall all similar patients
          from an institution&rsquo;s electronic medical record (EMR)
          repository, to explore &ldquo;what-if&rdquo; scenarios, and to collect
          these evidence-based cohorts for future statistical validation and
          pattern&nbsp;mining.
        </p>

        <Callout
          list={[
            "Node.js + Express",
            "Hapi.js",
            "Elasticsearch",
            "MongoDB",
            "RabbitMQ River",
            "Highcharts",
            "D3",
            "Elastic Marvel",
          ]}
        />

        <Ul>
          <Li>Building all of the visualization tools of the&nbsp;project</Li>
          <Li>
            Optimizing Elasticsearch queries to provide real-time search on
            very-large large datasets, which included over 1 billion facts, each
            with over 1 thousand properties and up to 1 thousand data points
            per&nbsp;second
          </Li>
          <Li>
            Re-writing an internal tool used for creating complex nested
            Elasticsearch queries, using modern ES6&nbsp;standards
          </Li>
          <Li>
            Presenting our work at monthly <em>Lunch-and-Learn</em> workshops,
            where we would share our progress with other teams within the
            Mayo&nbsp;Clinic
          </Li>
        </Ul>
      </Section>

      <Section id={sections.publications.id}>
        <WorkAtSectionTitle>Publications</WorkAtSectionTitle>

        <WorkAtPublications>
          <WorkAtPublication
            author="P. Li, S. Yates, J. Lovely, D. Larson"
            date="2015"
            publisher="IEEE Big Data"
            title="Patient Like Mine: A Real Time, Visual Analytics Tool For Clinical Decision Support"
            link="https://s3.amazonaws.com/simonyates.ca-downloads/publications/ieee/2015/patient-like-mine.pdf"
          />
        </WorkAtPublications>
      </Section>

      <Section id={sections.events.id}>
        <WorkAtSectionTitle>Events</WorkAtSectionTitle>

        <WorkAtEvents>
          <WorkAtEventsGroup
            href="https://s3.amazonaws.com/simonyates.ca-downloads/events/2015/ieee-international-conference-on-big-data/program-schedule.pdf"
            name="IEEE Big Data Conference"
          >
            <WorkAtEvent
              date="October 29 — November 1, 2015"
              title="Santa Clara, CA, USA"
            />
          </WorkAtEventsGroup>
        </WorkAtEvents>
      </Section>

      <Section id={sections.recognition.id}>
        <WorkAtSectionTitle>Recognition</WorkAtSectionTitle>

        <Figure
          alt="Dr. Peter Li stands at the podium of Elasticon 2016. His presentation on Patient Like Mine fills the background while listing the project's contributors. The names listed include Simon Yates, Sybaris, Toronto, Ontario; Jenna Lovely, PharmD, BCPS, Mayo Clinic, Rochester, MN; David Larson, MD, MBA, Mayo Clinic, Rochester, MN; many EASE Program staff members; and IT staff at Mayo Clinic."
          caption="Dr. Peter Li acknowledges my help at 43 minutes."
          href="https://www.elastic.co/elasticon/conf/2016/sf/bringing-healthcare-analytics-to-the-point-of-care-at-mayo-clinic"
          callToAction={<>Watch Video &rsaquo;</>}
          src="/images/work-at/mayo-clinic/elasticon.png"
        />
      </Section>
    </Sections>
  );
}
