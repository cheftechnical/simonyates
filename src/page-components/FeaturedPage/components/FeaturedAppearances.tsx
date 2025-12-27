import ConditionalIndent from "../../../components/ConditionalIndent/ConditionalIndent";
import Download from "../../../components/Download";
import Section from "../../../components/Section/Section";
import Ul from "../../../styling/ListsUnordered/Ul/Ul";
import SectionTitle from "../SectionTitle";
import { sections } from "../sections";
import Appearance from "./Appearance";
import AppearanceLink from "./AppearanceLink";
import FeaturedChips from "./FeaturedChips";
import FeaturedLi from "./FeaturedLi";

export default function FeaturedAppearances() {
  return (
    <Section id={sections.appearances.id}>
      <SectionTitle>{sections.appearances.title}</SectionTitle>

      {/*<SectionDescription>*/}
      {/*	I frequently create presentations about the different projects that I'm working on for our bi-weekly town hall. In 2019, I also hosted an interactive workshop in partnership with Elastic on machine learning for Catalyst, which is an RBC–specific event taking place during the week of Toronto's popular technology event: Collision.*/}
      {/*</SectionDescription>*/}

      <ConditionalIndent>
        <Appearance
          host="BrainStation"
          title={<>Starting and Building a Career in Software&nbsp;Engineering</>}
          when="September 17, 2024"
          where="Toronto, ON, Canada"
        >
          <div className="mt-4">
            <AppearanceLink
              url="https://www.linkedin.com/events/startingandbuildingacareerinsof7240068930323587072/"
              external={true}
            >
              LinkedIn Event
            </AppearanceLink>
          </div>
        </Appearance>

        {/* ------------ */}

        <Appearance
          next
          host="BrainStation"
          title={<>Starting and Building a Career in Software&nbsp;Engineering</>}
          when="August 22, 2024"
          where="Toronto, ON, Canada"
        >
          <div className="mt-4">
            <AppearanceLink
              url="https://www.linkedin.com/events/startingandbuildingacareerinsof7227696764244373506/"
              external={true}
            >
              LinkedIn Event
            </AppearanceLink>
          </div>
        </Appearance>

        {/* ------------ */}

        <Appearance
          next
          host="BrainStation"
          title={<>Starting and Building a Career in&nbsp;Tech</>}
          when="March 21, 2024"
          where="Toronto, ON, Canada"
        >
          <div className="mt-4">                    
            <AppearanceLink
              url="https://www.linkedin.com/feed/update/urn:li:activity:7176553397511233536/"
              external={true}
            >
              LinkedIn Post
            </AppearanceLink>
          </div>
        </Appearance>

        {/* ------------ */}

        <Appearance
          next
          host="BrainStation"
          title={<>Starting and Building a Career in&nbsp;Tech</>}
          when="February 22, 2024"
          where="Toronto, ON, Canada"
        >
          <div className="mt-4" >
            <AppearanceLink
              url="https://www.linkedin.com/feed/update/urn:li:activity:7166213687731499009/"
              external={true}
            >
              LinkedIn Post
            </AppearanceLink>
            <br/>
            <AppearanceLink
              url="https://www.linkedin.com/feed/update/urn:li:activity:7166974594984108033/"
              external={true}
            >
              Feedback Post
            </AppearanceLink>
            </div>
        </Appearance>

        {/* ------------ */}

        <Appearance
          next
          host="Catalyst RBC Tech Expo / Collision"
          title={<>Anomaly Detection with&nbsp;Elasticsearch</>}
          when="September 25, 2019"
          where="Toronto, ON, Canada"
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
        </Appearance>

        {/* ------------ */}

        <Appearance
          next
          host="IEEE International Conference on Big Data"
          title={<>Patient-Like-Mine</>}
          when="October 29 to November 1, 2015"
          where="Santa Clara, CA, USA"
        >
          <Download
            href="https://s3.amazonaws.com/simonyates.ca-downloads/publications/ieee/2015/patient-like-mine.pdf"
            label="Download Paper"
          />
          <Download
            next
            href="https://s3.amazonaws.com/simonyates.ca-downloads/events/2015/ieee-international-conference-on-big-data/program-schedule.pdf"
            label="Download Program Schedule"
          />
        </Appearance>
      </ConditionalIndent>
    </Section>
  );
}
