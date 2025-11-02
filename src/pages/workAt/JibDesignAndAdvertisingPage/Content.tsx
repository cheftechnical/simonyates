import Section from "../../../components/Section/Section";
import WorkAtDescription from "../components/WorkAtDescription";
import WorkAtSectionTitle from "../components/WorkAtSectionTitle";
import WorkAtProjects from "../components/WorkAtProjects";
import WorkAtProject from "../components/WorkAtProject";
import Callout from "../../../components/Callout/Callout";
import Quote from "../../../components/Quote/Quote";
import { sections } from "./sections.ts";
import Sections from "../../../components/Sections";

export function Content() {
  return (
    <Sections>
      <Section id={sections.intro.id}>
        <WorkAtDescription>
          Design &amp; advertising agency in&nbsp;Toronto.
        </WorkAtDescription>
      </Section>

      <Section id={sections.notableProjects.id}>
        <WorkAtSectionTitle>Notable Projects</WorkAtSectionTitle>
        <WorkAtProjects>
          <WorkAtProject name="Apple Canada Introduces iPhone" when="">
            <p className="font-primary font-normal text-base leading-6 tracking-[0.5px]">
              When Apple launched the original iPhone in Canada, they partnered
              with the Montreal Gazette to feature their online newspaper in its
              live press demo. This was an extremely high-profile event for
              Apple, and they couldn&rsquo;t risk any hiccups from a poorly
              rendering page view. So I built their replica website for
              this&nbsp;demo.
            </p>
            <p className="font-primary font-normal text-base leading-6 tracking-[0.5px] mt-6">
              As a show of thanks, the partners of Jib gave me an iPhone&mdash;6
              months before it was available in Canada. Although I don&rsquo;t
              use it anymore, I still have it (box included). They&rsquo;re
              quite a collector&rsquo;s item&nbsp;now.
            </p>
          </WorkAtProject>

          <WorkAtProject next name="Apple Canada's Online Store for Students">
            <p className="font-primary font-normal text-base leading-6 tracking-[0.5px]">
              Apple supports students with special pricing through its Apple
              Education Store. Access to this store required users to register
              their student ID with Apple to verity their eligibility. This
              feature was originally written in WebObjects, and I was tasked
              with re-writing everything in PHP to support modern &ldquo;Web
              2.0&rdquo;&nbsp;features.
            </p>
          </WorkAtProject>

          <WorkAtProject next name="http://www.delaila.co.uk">
            <p className="font-primary font-normal text-base leading-6 tracking-[0.5px]">
              Development of an online jewelry store with a custom e-commerce
              engine that integrated with HSBC and managed through a
              custom–built content management system&nbsp;(CMS).
            </p>
          </WorkAtProject>

          <WorkAtProject next name="http://www.eloundabeach.gr">
            <p className="font-primary font-normal text-base leading-6 tracking-[0.5px]">
              Elounda Beach is a luxury hotel in Greece, with a single
              night&rsquo;s stay costing upwards of $5,000. I built a custom,
              multi-lingual CMS and integrated a third-party
              reservation&nbsp;system.
            </p>
          </WorkAtProject>

          <WorkAtProject next name="http://www.verity.ca">
            <p className="font-primary font-normal text-base leading-6 tracking-[0.5px]">
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
