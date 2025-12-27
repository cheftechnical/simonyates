import Callout from "../../../components/Callout/Callout";
import Quote from "../../../components/Quote/Quote";
import Section from "../../../components/Section/Section";
import Sections from "../../../components/Sections";
import Li from "../../../styling/ListsUnordered/Li/Li";
import Ul from "../../../styling/ListsUnordered/Ul/Ul";
import WorkAtDescription from "../components/WorkAtDescription";
import WorkAtProject from "../components/WorkAtProject";
import WorkAtProjects from "../components/WorkAtProjects";
import WorkAtSectionTitle from "../components/WorkAtSectionTitle";
import { sections } from "./sections";

export function Content() {
  return (
    <Sections>
      <Section id={sections.intro.id}>
        <WorkAtDescription>
          Design &amp; advertising agency in&nbsp;Toronto.
        </WorkAtDescription>
      </Section>

      <Section id={sections.highlights.id}>
        <WorkAtSectionTitle>{sections.highlights.title}</WorkAtSectionTitle>

        <WorkAtProjects>
          <Ul>
            <Li>Led digital production for boutique Toronto agency serving premium clients, including <strong>Apple Canada</strong>.</Li>
            <Li><strong>Built an interactive replica of the Montreal Gazette</strong> for Apple&apos;s iPhone launch campaign, ensuring flawless performance on early iOS hardware and non-Flash devices.</Li>
            <Li><strong>Invented and developed &ldquo;Workflow&rdquo;</strong>, an internal collaboration platform allowing designers and clients to share, comment on, and approve work directly &mdash; eliminating email bottlenecks and reducing miscommunication.</Li>
            <Li>Developed the <strong>Apple Education Store&apos;s university registration system</strong> and localized HTML email campaigns for national marketing initiatives.</Li>
            <Li>Designed and implemented internal asset-management tools to streamline creative operations.</Li>
            <Li>Reverse-engineered early <strong>Google PageRank</strong> algorithms to inform SEO and content strategy.</Li>
            <Li>Collaborated closely with designers to deliver technically precise, visually consistent digital experiences &mdash; bridging creative vision with engineering execution.</Li>
          </Ul>
        </WorkAtProjects>
      </Section>

      <Section id={sections.notableProjects.id}>
        <WorkAtSectionTitle>Notable Projects</WorkAtSectionTitle>
        <WorkAtProjects>
          <WorkAtProject name="Apple Canada Introduces iPhone" when="">
            <p className="font-primary font-normal text-base leading-normal">
              When Apple launched the original iPhone in Canada, they partnered
              with the Montreal Gazette to feature their online newspaper in its
              live press demo. This was an extremely high-profile event for
              Apple, and they couldn&rsquo;t risk any hiccups from a poorly
              rendering page view. So I built their replica website for
              this&nbsp;demo.
            </p>
            <p className="font-primary font-normal text-base leading-normal mt-6">
              As a show of thanks, the partners of Jib gave me an iPhone&mdash;6
              months before it was available in Canada. Although I don&rsquo;t
              use it anymore, I still have it (box included). They&rsquo;re
              quite a collector&rsquo;s item&nbsp;now.
            </p>
          </WorkAtProject>

          <WorkAtProject next name="Apple Canada's Online Store for Students">
            <p className="font-primary font-normal text-base leading-normal">
              Apple supports students with special pricing through its Apple
              Education Store. Access to this store required users to register
              their student ID with Apple to verity their eligibility. This
              feature was originally written in WebObjects, and I was tasked
              with re-writing everything in PHP to support modern &ldquo;Web
              2.0&rdquo;&nbsp;features.
            </p>
          </WorkAtProject>

          <WorkAtProject next name="http://www.delaila.co.uk">
            <p className="font-primary font-normal text-base leading-normal">
              Development of an online jewelry store with a custom e-commerce
              engine that integrated with HSBC and managed through a
              custom–built content management system&nbsp;(CMS).
            </p>
          </WorkAtProject>

          <WorkAtProject next name="http://www.eloundabeach.gr">
            <p className="font-primary font-normal text-base leading-normal">
              Elounda Beach is a luxury hotel in Greece, with a single
              night&rsquo;s stay costing upwards of $5,000. I built a custom,
              multi-lingual CMS and integrated a third-party
              reservation&nbsp;system.
            </p>
          </WorkAtProject>

          <WorkAtProject next name="http://www.verity.ca">
            <p className="font-primary font-normal text-base leading-normal">
              Verity is an exclusive women's club in Toronto, that provides
              support for the advancement of women through professional, social
              and personal opportunities. I built the website and the
              supporting&nbsp;CMS.
            </p>
          </WorkAtProject>
        </WorkAtProjects>

        <Callout
          noBottomGutter
          list={[
            "PHP",
            "Javascript + jQuery",
            "HTML + CSS",
            "MySQL",
            "Moneris"
          ]}
        />
      </Section>

      <Section id={sections.recognition.id}>
        <WorkAtSectionTitle>Recognition</WorkAtSectionTitle>

        <Quote source="Alain Brisard, Web Communications Producer, Apple Canada Inc.">
          I do appreciate the good work you&rsquo;ve done. I am very pleased
          with the application and your coding. Logical. Commented. Made it much
          easier to go&nbsp;through.
        </Quote>

        <Quote next source="Martin Yeung, Marketing Manager, Verity Prop Ltd.">
          Thanks for your help, much appreciated. Now the website will in a
          higher gear and better for us admins and members to&nbsp;use.
        </Quote>
      </Section>
    </Sections>
  );
}

export default Content;
