import Callout from "../../components/Callout/Callout";
import NavRight from "../../components/NavRight";
import Container from "../../components/Container/Container";
import { sections } from "./sections";

export function DesignSystem() {
  return (
    <Container>
      <div className="flex flex-wrap">
        {/* Content */}
        <div className="w-full md:w-9/12 md:pr-48">
          {/* Content will go here */}
          <h1 className="font-normal text-[2.0rem] leading-relaxed">
            How I Designed My Personal Design&nbsp;System
          </h1>

            <p className="font-normal text-[1.2599rem] text-gray-600 leading-relaxed mt-[1.2599rem]">
              Harmonious design is foundational to&nbsp;me.
            </p>

            <p className="font-normal text-[1.2599rem] text-gray-600 leading-relaxed mt-[1.2599rem]">
              Everything I produce follows a design aesthetic. I have distilled that aesthetic into a set of&nbsp;rules.
            </p>

            <p className="font-normal text-[1.2599rem] text-gray-600 leading-relaxed mt-[1.2599rem] mb-[calc(1.2599rem*3)]">
              This is my personal design&nbsp;system.
            </p>

            <Callout align="left">
              <figure className="m-0">
                <blockquote className="font-normal text-[1.0rem] leading-normal italic border-l-4 border-gray-300 pl-4">
                  Nothing is arbitrary.
                </blockquote>
                <figcaption className="mt-3 text-sm text-gray-700">
                  <cite className="not-italic"><strong>Gottfried Semper,</strong> c.&nbsp;1850s</cite>
                </figcaption>
              </figure>
            </Callout>
            

            <h2
              id={sections.typographicScale.id}
              className="text-[1.2599rem] font-normal leading-normal mt-[calc(1.2599rem*3)]"
            >
              Typographic Scale
            </h2>

            <p className="text-[1.0rem] leading-normal mt-[calc(1.0rem*1)]">
              To begin, I had to decide on a scale that resonated with me. I wanted the information hierarchy to be easy to navigate. Too many levels and the user would get lost; too few, and there wouldn&rsquo;t be sufficient granularity to structure the&nbsp;data.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              Triangulating with a 3-level hierarchy felt like a perfect balance, so I settled on&nbsp;that.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              After exploring several ratios and proportions, I settled on a pure tritonic (also called &ldquo;tritonic modular&rdquo;) scale for text, and the Fibonacci sequence for mostly everything&nbsp;else.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              The tritonic scale is derived by dividing an octave (2:1) into 3 equal steps. It means 3 steps up, and the base size doubles (visual octave), while 3 steps down halves the base size (visual&nbsp;sub-octave).
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              My design system includes both digital and print media, each with its own set of&nbsp;constraints.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              To establish my type scale, I first had to decide on my base font&nbsp;size.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              For digital, a popular size is 16 px. I saw no objection and agreed to use the&nbsp;same.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              For print, a standard type size is 12 pt. Again, I saw no objection and agreed to use the&nbsp;same.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              I then calculated a scale for each media base using the tritonic scale and this&nbsp;formula:
            </p>

            <div
              className="border-gray-900 border-2 mt-6 p-6 w-full flex items-center justify-center"
              aria-label="Tritonic scale ratio per step: cube root of two, approximately 1.259921."
            >
              <code>ratioPerStep = ∛2 ≅ 1.259921</code>
            </div>

            <p className="text-[1.0rem] leading-normal mt-6">
              For each step, we assign a system-wide name.
            </p>

            <ul className="text-[1.0rem] leading-normal">
              <li className="list-disc list-inside mt-4">For each increment above our base: &ldquo;step-a#&rdquo;</li>
              <li className="list-disc list-inside mt-4">For each decrement below our base: &ldquo;step-z#&rdquo;</li>
            </ul>

            <p className="text-[1.0rem] leading-normal mt-4">
              This naming convention scales indefinitely in both directions, but the media naturally enforces constraints. Unless I was making a billboard to hang off the side of a building, it wouldn&rsquo;t be practical to use a &ldquo;step-a100&rdquo;, for example. That said, I would likely establish a different base for such a use case, but you get the idea.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              Additionally, we know that the minimum readable text size on a modern digital device is 12 px, so there is no point in computing anything smaller than that.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              Since we&rsquo;ve already decided that 16 px will be our base size, we can set it to 1 rem and label the next 3 parents as h3, h2, and h1 relative to&nbsp;it.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              For sizes smaller than our base, we can label them small, extra small, and so on, but since we have already set our floor at 12 px, our system doesn&rsquo;t support anything smaller than a &ldquo;small&rdquo;, so that&rsquo;s all we&rsquo;ll&nbsp;include.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              The benefit of this system is that it decouples the HTML elements (e.g., h1, h2, h3, body) and the programming/implementation concept from our design&nbsp;scale.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              We are also not limited to the maximum size of whatever h1 is set to. This gives us the freedom to use larger text sizes without forcing exceptions. We can expand the system at any time to include larger font sizes without breaking our naming&nbsp;pattern.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              A great example of this is with 404&nbsp;pages.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              It is not uncommon for the &ldquo;404&rdquo; to be printed very large. The number itself is the primary content of the page and is therefore displayed in a font size typically much larger than a standard h1 HTML element. To achieve this, however, the design would need to specify an exception if they are relying on a conventional h1 name within the design tool, even though it may in fact be coded as an HTML h1 element; the treatment would&nbsp;differ.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              The &ldquo;Step&rdquo; system avoids this entirely. The designer picks the font size best suited to their use case, and the engineer decides which HTML element is appropriate. Each person on the project can focus on the core skills they are most familiar&nbsp;with.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              Likewise, deciding how a proportional subhierarchy should appear &ndash; for example, &ldquo;Page Not Found&rdquo; and &ldquo;Here are some helpful links to help you find what you were looking for&rdquo; &ndash; is already scaled and&nbsp;proportioned.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              In the following table, I&rsquo;ve listed 3 visual octaves and 1 visual sub-octave. The standard h1&ndash;3, body, and small body sizes have been labelled and highlighted to show where they sit within the overall&nbsp;scale.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              My 404 page uses 2 visual octaves higher for its messaging.
            </p>
        
            <table className="border-gray-700 border-2 mt-6 w-full">
                <thead>
                    <tr>
                        <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50">Step</th>
                        <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50">EM Size</th>
                        <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50">Pixel Size</th>
                        <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50">Tailwinds Size</th>
                        <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50">Name</th>
                        <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50">Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-gray-100 border-1 p-1 text-center">step-a9</td>
                        <td className="border-gray-100 border-1 p-1 text-center">8.0rem</td>
                        <td className="border-gray-100 border-1 p-1 text-center">128px</td>
                        <td className="border-gray-100 border-1 p-1 text-center">text-8xl</td>
                        <td className="border-gray-100 border-1 p-1 text-center">&nbsp;</td>
                        <td className="border-gray-100 border-1 p-1 text-center text-[8.0rem] leading-normal">M</td>
                    </tr>
                    <tr>
                        <td className="border-gray-100 border-1 p-1 text-center">step-a8</td>
                        <td className="border-gray-100 border-1 p-1 text-center">6.3496rem</td>
                        <td className="border-gray-100 border-1 p-1 text-center">101.5936px</td>
                        <td className="border-gray-100 border-1 p-1 text-center">text-7xl</td>
                        <td className="border-gray-100 border-1 p-1 text-center">&nbsp;</td>
                        <td className="border-gray-100 border-1 p-1 text-center text-[6.3496rem] leading-normal">M</td>
                    </tr>
                    <tr>
                        <td className="border-gray-100 border-1 p-1 text-center">step-a7</td> 
                        <td className="border-gray-100 border-1 p-1 text-center">5.0396rem</td>
                        <td className="border-gray-100 border-1 p-1 text-center">80.6336px</td>
                        <td className="border-gray-100 border-1 p-1 text-center">text-6xl</td>
                        <td className="border-gray-100 border-1 p-1 text-center">&nbsp;</td>
                        <td className="border-gray-100 border-1 p-1 text-center text-[5.0396rem] leading-normal">M</td>
                    </tr>
                    <tr>
                        <td className="border-gray-100 border-1 p-1 text-center">step-a6</td>
                        <td className="border-gray-100 border-1 p-1 text-center">4.0rem</td>
                        <td className="border-gray-100 border-1 p-1 text-center">64px</td>
                        <td className="border-gray-100 border-1 p-1 text-center">text-5xl</td>
                        <td className="border-gray-100 border-1 p-1 text-center">&nbsp;</td>
                        <td className="border-gray-100 border-1 p-1 text-center text-[4.0rem] leading-normal">M</td>
                    </tr>
                    <tr>
                        <td className="border-gray-100 border-1 p-1 text-center">step-a5</td>
                        <td className="border-gray-100 border-1 p-1 text-center">3.1748rem</td>
                        <td className="border-gray-100 border-1 p-1 text-center">50.7968px</td>
                        <td className="border-gray-100 border-1 p-1 text-center">text-4xl</td>
                        <td className="border-gray-100 border-1 p-1 text-center">&nbsp;</td>
                        <td className="border-gray-100 border-1 p-1 text-center text-[3.1748rem] leading-normal">M</td>
                    </tr>
                    <tr>
                        <td className="border-gray-100 border-1 p-1 text-center">step-a4</td>
                        <td className="border-gray-100 border-1 p-1 text-center">2.5198rem</td>
                        <td className="border-gray-100 border-1 p-1 text-center">40.3168px</td>
                        <td className="border-gray-100 border-1 p-1 text-center">text-3xl</td>
                        <td className="border-gray-100 border-1 p-1 text-center">&nbsp;</td>
                        <td className="border-gray-100 border-1 p-1 text-center text-[2.5198rem] leading-normal">M</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border-gray-200 border-1 p-1 text-center">step-a3</td>
                        <td className="border-gray-200 border-1 p-1 text-center">2.0rem</td>
                        <td className="border-gray-200 border-1 p-1 text-center">32px</td>
                        <td className="border-gray-200 border-1 p-1 text-center">text-2xl</td>
                        <td className="border-gray-200 border-1 p-1 text-center">Heading 1</td>
                        <td className="border-gray-200 border-1 p-1 text-center text-[2.0rem] leading-normal">M</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border-gray-200 border-1 p-1 text-center">step-a2</td>
                        <td className="border-gray-200 border-1 p-1 text-center">1.5874rem</td>
                        <td className="border-gray-200 border-1 p-1 text-center">25.3984px</td>
                        <td className="border-gray-200 border-1 p-1 text-center">text-xl</td>
                        <td className="border-gray-200 border-1 p-1 text-center">Heading 2</td>
                        <td className="border-gray-200 border-1 p-1 text-center text-[1.5874rem] leading-normal">M</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border-gray-200 border-1 p-1 text-center">step-a1</td>
                        <td className="border-gray-200 border-1 p-1 text-center">1.2599rem</td>
                        <td className="border-gray-200 border-1 p-1 text-center">20.1584px</td>
                        <td className="border-gray-200 border-1 p-1 text-center">text-lg</td>
                        <td className="border-gray-200 border-1 p-1 text-center">Heading 3</td>
                        <td className="border-gray-200 border-1 p-1 text-center text-[1.2599rem] leading-normal">M</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border-gray-200 border-1 p-1 text-center">step-0</td>
                        <td className="border-gray-200 border-1 p-1 text-center">1.0rem</td>
                        <td className="border-gray-200 border-1 p-1 text-center">16px</td>
                        <td className="border-gray-200 border-1 p-1 text-center">text-base</td>
                        <td className="border-gray-200 border-1 p-1 text-center">Body</td>
                        <td className="border-gray-200 border-1 p-1 text-center text-[1.0rem] leading-normal">M</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border-gray-200 border-1 p-1 text-center">step-z1</td>
                        <td className="border-gray-200 border-1 p-1 text-center">0.7937rem</td>
                        <td className="border-gray-200 border-1 p-1 text-center">12.6992px</td>
                        <td className="border-gray-200 border-1 p-1 text-center">text-sm</td>
                        <td className="border-gray-200 border-1 p-1 text-center">Small</td>
                        <td className="border-gray-200 border-1 p-1 text-center text-[0.7937rem] leading-normal">M</td>
                    </tr>
                    <tr>
                        <td className="border-gray-100 border-1 p-1 text-center">step-z2</td>
                        <td className="border-gray-100 border-1 p-1 text-center">0.63rem</td>
                        <td className="border-gray-100 border-1 p-1 text-center">10.08px</td>
                        <td className="border-gray-100 border-1 p-1 text-center">text-xs</td>
                        <td className="border-gray-100 border-1 p-1 text-center">&nbsp;</td>
                        <td className="border-gray-100 border-1 p-1 text-center text-[0.63rem] leading-normal">M</td>
                    </tr>
                    <tr>
                        <td className="border-gray-100 border-1 p-1 text-center">step-z3</td>
                        <td className="border-gray-100 border-1 p-1 text-center">0.5rem</td>
                        <td className="border-gray-100 border-1 p-1 text-center">8px</td>
                        <td className="border-gray-100 border-1 p-1 text-center">&nbsp;</td>
                        <td className="border-gray-100 border-1 p-1 text-center">&nbsp;</td>
                        <td className="border-gray-100 border-1 p-1 text-center text-[0.5rem] leading-normal">M</td>
                    </tr>
                </tbody>
            </table>


            {/* color paragraphs here */}
            <h2
              id={sections.luminanceScale.id}
              className="text-[1.2599rem] font-normal leading-normal mt-[calc(1.2599rem*3)]"
            >
              Luminance Scale
            </h2>

            <p className="text-[1.0rem] leading-normal mt-4">
              For colour, I wanted to start with a balanced grayscale system before introducing&nbsp;hues.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              Many digital colouring systems try to capture all available luminance and hues into equally spaced samples, but that&rsquo;s not how our human eye perceives light. Our eyes are more sensitive to some types of light than&nbsp;others.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              After exploring 6 methods to create a simplified 5-value system, I settled on #757575 as my middle gray. Thankfully, when this shade is used to render text on a white background, it is also AA accessible, so that made the rest of my work much&nbsp;easier.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              For digital, I felt black (#000000) was too harsh and contrasty for my taste, so I chose a very dark gray (#222222) to use as a soft black. This became my dark&nbsp;anchor.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              I then computed a stepped scale that crossed over middle gray (#757575) and terminated at our soft black (#222222) using the OKLab L-spacing colour system. This produced a scale that accounts for biases in the human eye&rsquo;s perception of&nbsp;light.
            </p>

            <div className="flex mt-6">
                <div className="bg-gray-25 h-[32px] w-1/12">&nbsp;</div>
                <div className="bg-gray-50 h-[32px] w-1/12">&nbsp;</div>
                <div className="bg-gray-100 h-[32px] w-1/12">&nbsp;</div>
                <div className="bg-gray-200 h-[32px] w-1/12">&nbsp;</div>
                <div className="bg-gray-300 h-[32px] w-1/12">&nbsp;</div>
                <div className="bg-gray-400 h-[32px] w-1/12">&nbsp;</div>
                <div className="bg-gray-500 h-[32px] w-1/12 border-black border-1">&nbsp;</div>
                <div className="bg-gray-600 h-[32px] w-1/12">&nbsp;</div>
                <div className="bg-gray-700 h-[32px] w-1/12">&nbsp;</div>
                <div className="bg-gray-800 h-[32px] w-1/12">&nbsp;</div>
                <div className="bg-gray-900 h-[32px] w-1/12">&nbsp;</div>
                <div className="bg-black h-[32px] w-1/12">&nbsp;</div>
            </div>

            <p className="text-[1.0rem] leading-normal mt-6">
              This produced a scale where:
            </p>

            <ul className="text-[1.0rem] leading-normal">
              <li className="list-disc list-inside mt-4">The lightest shade of gray acts as a soft white</li>
              <li className="list-disc list-inside mt-4">The darkest shade of gray acts as a soft black</li>
              <li className="list-disc list-inside mt-4">Text in grays below middle gray (&le; 400) works beautifully on soft black (#222222) backgrounds</li>
              <li className="list-disc list-inside mt-4">500 is middle gray (#757575)</li>
              <li className="list-disc list-inside mt-4">Text in grays darker than middle gray (&ge; 500) works on white (#FFFFFF) backgrounds</li>
              <li className="list-disc list-inside mt-4">Gray-25 on soft black (#222222) appears as bright white</li>
              <li className="list-disc list-inside mt-4">Gray-50 on soft black (#222222) appears as white</li>
            </ul>            

            <table className="border-gray-700 border-2 mt-6 w-full">
              <thead>
                <tr>
                    <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50">Shade</th>
                    <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50">Hex</th>
                    <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50">Contrast vs. White</th>
                    <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50">Contrast vs #222222</th>
                    <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50">AA on White</th>
                    <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50">AA on #222222</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td className="border-gray-100 border-1 p-1 text-center">gray 900</td>
                    <td className="border-gray-100 border-1 p-1 text-center">#222222</td>
                    <td className="border-gray-100 border-1 p-1 text-center">15.91</td>
                    <td className="border-gray-100 border-1 p-1 text-center">1.0</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Pass</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Fail</td>
                </tr>
                <tr>
                    <td className="border-gray-100 border-1 p-1 text-center">gray 800</td>
                    <td className="border-gray-100 border-1 p-1 text-center">#333333</td>
                    <td className="border-gray-100 border-1 p-1 text-center">12.63</td>
                    <td className="border-gray-100 border-1 p-1 text-center">1.26</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Pass</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Fail</td>
                </tr>
                <tr>
                    <td className="border-gray-100 border-1 p-1 text-center">gray 700</td>
                    <td className="border-gray-100 border-1 p-1 text-center">#464646</td>
                    <td className="border-gray-100 border-1 p-1 text-center">9.44</td>
                    <td className="border-gray-100 border-1 p-1 text-center">1.69</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Pass</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Fail</td>
                </tr>
                <tr>
                    <td className="border-gray-100 border-1 p-1 text-center">gray 600</td>
                    <td className="border-gray-100 border-1 p-1 text-center">#5E5E5E</td>
                    <td className="border-gray-100 border-1 p-1 text-center">6.48</td>
                    <td className="border-gray-100 border-1 p-1 text-center">2.45</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Pass</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Fail</td>
                </tr>
                <tr>
                    <td className="border-gray-100 border-1 p-1 text-center">gray 500</td>
                    <td className="border-gray-100 border-1 p-1 text-center">#757575</td>
                    <td className="border-gray-100 border-1 p-1 text-center">4.61</td>
                    <td className="border-gray-100 border-1 p-1 text-center">3.45</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Pass</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Fail</td>
                </tr>
                <tr>
                    <td className="border-gray-100 border-1 p-1 text-center">gray 400</td>
                    <td className="border-gray-100 border-1 p-1 text-center">#8B8B8B</td>
                    <td className="border-gray-100 border-1 p-1 text-center">3.41</td>
                    <td className="border-gray-100 border-1 p-1 text-center">4.67</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Fail</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Pass</td>
                </tr>
                <tr>
                    <td className="border-gray-100 border-1 p-1 text-center">gray 300</td>
                    <td className="border-gray-100 border-1 p-1 text-center">#A4A4A4</td>
                    <td className="border-gray-100 border-1 p-1 text-center">2.49</td>
                    <td className="border-gray-100 border-1 p-1 text-center">6.38</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Fail</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Pass</td>
                </tr>
                <tr>
                    <td className="border-gray-100 border-1 p-1 text-center">gray 200</td>
                    <td className="border-gray-100 border-1 p-1 text-center">#BFBFBF</td>
                    <td className="border-gray-100 border-1 p-1 text-center">1.84</td>
                    <td className="border-gray-100 border-1 p-1 text-center">8.65</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Fail</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Pass</td>
                </tr>
                <tr>
                    <td className="border-gray-100 border-1 p-1 text-center">gray 100</td>
                    <td className="border-gray-100 border-1 p-1 text-center">#DADADA</td>
                    <td className="border-gray-100 border-1 p-1 text-center">1.4</td>
                    <td className="border-gray-100 border-1 p-1 text-center">11.38</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Fail</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Pass</td>
                </tr>
                <tr>
                    <td className="border-gray-100 border-1 p-1 text-center">gray 50</td>
                    <td className="border-gray-100 border-1 p-1 text-center">#EEEEEE</td>
                    <td className="border-gray-100 border-1 p-1 text-center">1.16</td>
                    <td className="border-gray-100 border-1 p-1 text-center">13.71</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Fail</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Pass</td>
                </tr>
                <tr>
                    <td className="border-gray-100 border-1 p-1 text-center">gray 25</td>
                    <td className="border-gray-100 border-1 p-1 text-center">#F7F7F7</td>
                    <td className="border-gray-100 border-1 p-1 text-center">1.07</td>
                    <td className="border-gray-100 border-1 p-1 text-center">14.85</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Fail</td>
                    <td className="border-gray-100 border-1 p-1 text-center">Pass</td>
                </tr>
              </tbody>
            </table>

            <p className="text-[1.0rem] leading-normal mt-6">
              For print, I take a more contrasty approach. Blacks are <em>black</em>, whites are crisp, and middle gray is rarely used. No other semi-tones exist. Instead, line weights and negative space are used strategically to create&nbsp;depth.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              Why? Black ink is cheaper, and grays on my laser printer can look washed out. And it looks&nbsp;cool!
            </p>

            <h2
              id={sections.proximityScale.id}
              className="text-[1.2599rem] font-normal leading-normal mt-[calc(1.2599rem*3)]"
            >
              Proximity Scale
            </h2>

            <p className="text-[1.0rem] leading-normal mt-[calc(1.0rem*1)]">
              At this point, it&rsquo;s worth discussing the Proximity Scale and how it can be used to build relationships and establish a comprehensive information&nbsp;hierarchy.
            </p>

            <table className="border-gray-700 border-2 mt-6 w-full">
              <thead>
                <tr>
                  <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50">Level</th>
                  <th className="bg-gray-700 border-gray-700 border-1 p-2 text-center text-gray-50">Proximity</th>
                  <th className="bg-gray-700 border-gray-700 border-1 p-2 text-left text-gray-50">Description</th>
                </tr>
              </thead>
              <tbody>
                 <tr>
                  <td className="border-gray-100 border-1 p-2 text-center">0</td>
                  <td className="border-gray-100 border-1 p-2 text-left">Unity</td>
                  <td className="border-gray-100 border-1 p-2 text-left">
                    Content is a continuation of the previous level. Elements feel &ldquo;bound&rdquo;.
                  </td>
                </tr> 
                <tr>
                  <td className="border-gray-100 border-1 p-2 text-center">1</td>
                  <td className="border-gray-100 border-1 p-2 text-left">Close</td>
                  <td className="border-gray-100 border-1 p-2 text-left">
                    For tight visual grouping. Think heading + paragraph.
                  </td>
                </tr>
                <tr>
                  <td className="border-gray-100 border-1 p-2 text-center">2</td>
                  <td className="border-gray-100 border-1 p-2 text-left">Moderate</td>
                  <td className="border-gray-100 border-1 p-2 text-left">
                    Separation of related sub-headings within a section.
                  </td>
                </tr>
                <tr>
                  <td className="border-gray-100 border-1 p-2 text-center">3</td>
                  <td className="border-gray-100 border-1 p-2 text-left">Discrete</td>
                  <td className="border-gray-100 border-1 p-2 text-left">
                    Separation of similar headings within a broader theme. Signals change of sections.
                  </td>
                </tr>
                <tr>
                  <td className="border-gray-100 border-1 p-2 text-center">5</td>
                  <td className="border-gray-100 border-1 p-2 text-left">Unrelated</td>
                  <td className="border-gray-100 border-1 p-2 text-left">
                    Separation of unrelated things. Signals a complete break from the previous content.
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-[1.0rem] leading-normal mt-6">
              There are several ways this scale can be used, depending on how I want to present the information. Again, the goal of this system is to articulate and conceptualize broader themes while not limiting creative flexibility. An overly strict system would be too &ldquo;templaty&rdquo;, and that&rsquo;s not&nbsp;interesting.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              These levels can either be used as a multiplier of the current font size to determine the top margin, or the number of shades, steps or visual octaves from the current text to use. Both methods produce different results, and both are&nbsp;valid.
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              In the case of shades, one extra rule is added,&nbsp;however:
            </p>

            <p className="text-[1.0rem] leading-normal mt-4 ml-4">
              <em>&ldquo;No two shade levels should appear next to each&nbsp;other.&rdquo;</em>
            </p>

            <p className="text-[1.0rem] leading-normal mt-4">
              There is not enough visual contrast within the scale to perceive the difference without it appearing as an error. When counting shade levels, always skip the first&nbsp;one.
            </p>

            <ul className="text-[1.0rem] leading-normal mt-4" style={{ paddingLeft: '2rem' }}>
              <li className="list-disc mt-4">
                <strong>Example #1:</strong> This copy is written in soft black (#222222), and the above table is dark gray (#464646). The table has a &ldquo;Close&rdquo; proximity to the copy &ndash; but it&rsquo;s not the copy, so it needs visual separation. Using the Luminance Scale, we start at gray-900 (#222222), skip the first shade (#333333), then one level up to gray-700 (#464646) &ndash; the exact colour of the table border and header&nbsp;background.
              </li>
              <li className="list-disc mt-4">
                <strong>Example #2:</strong> This copy (#222222) has a discrete separation from the side navigation. It&rsquo;s a shift in cognitive processing from reading this text to navigating. Starting from gray-900 (#222222), skipping the first value, then up 3 levels gives us gray-500 (#757575) &ndash; the exact colour of our navigation&nbsp;text.
              </li>
              <li className="list-disc mt-4">
                <strong>Example #3:</strong> The Typographic, Luminance, and Proximity Scale headings are all discrete topics within a broader theme. They could be referenced independently. Each of those headings has a top margin that is 3x the font size of the heading, and each subsequent paragraph has a top margin that is 1x the font size to show that it is closely related to that&nbsp;heading.
              </li>
            </ul>

            <Callout align="left">
              <p>
                <strong>Pro tip:</strong> If you haven&rsquo;t already noticed, I&rsquo;m always setting the top margin for a style, never the bottom. This is&nbsp;intentional.
              </p>
              <p className="mt-4">
                By setting only a top margin, you&rsquo;re always building on what exists, not on what could be. In the world of HTML/CSS, an overly ambitious bottom margin may need to be compensated with a subsequent negative top margin. If you only ever set top margins, you&rsquo;ll rarely need a negative margin &mdash; ever. While modern browsers have improved significantly, negative margins have historically been a problem for cross-browser compatibility. Avoiding them entirely is the best&nbsp;remedy.
              </p>
              <p className="mt-4">
                Typically, I set a bottom margin or padding only when I&rsquo;m dealing with a container and want to ensure a consistent space around its&nbsp;perimeter.
              </p>
            </Callout>

          </div>

        {/* Navigation */}
        <div className="hidden md:block md:w-3/12">
          <NavRight sections={sections} />
        </div>
      </div>
    </Container>
  );
}

export default DesignSystem;

