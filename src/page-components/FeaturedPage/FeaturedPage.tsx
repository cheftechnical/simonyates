import Download from "../../components/Download";
import NavRight from "../../components/NavRight";
import Sections from "../../components/Sections/Sections";
import MyContainer from "../../components/MyContainer/MyContainer";
import { sections } from "./sections";
import Link from "next/link";

// featured
export default function Featured() {
  return (
    <MyContainer>
      <div className="flex flex-wrap">
        {/* Content */}
        {/* pr-32 = 128 or 3 visual octaves * 1.5 line height = pr-48 192 */}
        <div className="w-full md:w-9/12 md:pr-48 ">
          <h1 className="sr-only">Featured</h1>
          <Sections>
              <div id={sections.essays.id}>
                {/* mb-6 = 16 px (child font size)  * 1.5 (1x row separaration for related content) = 24 px */}
                {/* between each appearance, 48 px or (2x 24 px) for separation of similar but distinct items */}
                <h2 className="font-normal text-2xl leading-relaxed mb-6">
                  {sections.essays.title}
                </h2>

                <div className="pl-0 sm:pl-10">
                  <h3 className="font-normal text-lg leading-normal">
                    <Link href="/essays/the-imagination-gap-alt-text-ai" className="text-blue-500 no-underline hover:underline">
                      The Imagination&nbsp;Gap
                    </Link>
                  </h3>
                  <p className="mt-3">
                    Using AI to See Through Someone Else&rsquo;s Eyes: Validating Alt-Text with Image&nbsp;Generation
                  </p>
                </div>
              </div>

              <div className="mt-[3.7797rem]">
                <div id={sections.systems.id}>
                  {/* mb-6 = 16 px (child font size)  * 1.5 (1x row separaration for related content) = 24 px */}
                  {/* between each appearance, 48 px or (2x 24 px) for separation of similar but distinct items */}
                  <h2 className="font-normal text-2xl leading-relaxed mb-6">
                    {sections.systems.title}
                  </h2>

                <div className="pl-0 sm:pl-10">
                  {/* Projects content will go here */}
                  <h3 className="font-normal text-lg leading-normal">
                    <Link href="/design-system" className="text-blue-500 no-underline hover:underline">
                      Design System
                    </Link>
                  </h3>
                  <p className="mt-3">
                    A living system that defines how I design, build, and reason about interfaces — from typography and layout to accessibility, structure, and&nbsp;intent.
                  </p>
                </div>
                </div>
              </div>

              <div className="mt-[3.7797rem]">
                <div id={sections.publications.id}>
                  {/* mb-6 = 16 px (child font size)  * 1.5 (1x row separaration for related content) = 24 px */}
                  {/* between each appearance, 48 px or (2x 24 px) for separation of similar but distinct items */}
                  <h2 className="font-normal text-2xl leading-relaxed">
                    {sections.publications.title}
                  </h2>

                <div className="pl-0 sm:pl-10">
                  <div>
                    <h3 className="font-normal text-lg leading-normal mt-6">
                      Patient-Like-Mine: A Real Time, Visual Analytics Tool for Clinical Decision&nbsp;Support
                    </h3>

                    <p className="font-normal text-base leading-normal text-gray-600 mt-6" style={{ letterSpacing: '0.01em' }}>
                      IEEE International Conference on Big Data<span style={{ padding: '0 0.25ch' }}>&middot;</span>October&nbsp;29–November&nbsp;1,&nbsp;2015<span style={{ padding: '0 0.25ch' }}>&middot;</span>Santa&nbsp;Clara,&nbsp;CA,&nbsp;USA
                    </p>

                    <p className="font-normal text-base leading-normal text-gray-900 mt-6">
                      We developed a real-time, visual
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
                    </p>
                  
                    <Download
                      href="https://s3.amazonaws.com/simonyates.ca-downloads/publications/ieee/2015/patient-like-mine.pdf" />
                  </div>
                </div>
                </div>
              </div>
          </Sections>
        </div>

        {/* Navigation */}
        <div className="hidden md:block md:w-3/12 xborder-1 border-[blue] ">
          <NavRight sections={sections} />
        </div>
      </div>
    </MyContainer>
  );
}
