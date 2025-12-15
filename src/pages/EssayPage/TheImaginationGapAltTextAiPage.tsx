import PageWrapper from "../../components/PageWrapper";
import Image from "../../components/Image";
import MyContainer from "../../styling/MyContainer/MyContainer";
import NavRight from "../../components/NavRight";
import { Sections } from "../../types/Sections";

const sections: Sections = {
  intro: {
    id: "intro",
    title: "Intro"
  },
  whatAltTextIs: {
    id: "what-alt-text-is",
    title: "What Alt-Text Actually Is"
  },
  imaginationGap: {
    id: "imagination-gap",
    title: "The Imagination Gap"
  },
  whyHumanValidation: {
    id: "why-human-validation",
    title: "Why Human Validation Isn't Enough"
  },
  theInsight: {
    id: "the-insight",
    title: "The Insight: AI as a Reverse Alt-Text Engine"
  },
  theMethod: {
    id: "the-method",
    title: "The Method"
  },
  demonstration: {
    id: "demonstration",
    title: "A Demonstration: Closing the Imagination Gap Through Iteration"
  },
  ethicalConsiderations: {
    id: "ethical-considerations",
    title: "Ethical Considerations"
  },
  humaneSystemsDesign: {
    id: "humane-systems-design",
    title: "Why This Matters for Humane Systems Design"
  },
  conclusion: {
    id: "conclusion",
    title: "Conclusion"
  }
};

export function TheImaginationGapAltTextAiPage() {
  return (
    <PageWrapper title="The Imagination Gap">
      <article>
        <MyContainer>
          <div className="flex flex-wrap">
            {/* Content */}
            <div className="w-full md:w-9/12 md:pr-48">
              <div className="text-sm uppercase mb-6">
                December 11, 2025
              </div>
              <h1 id="intro" className="font-normal text-2xl leading-relaxed">
                The Imagination&nbsp;Gap
              </h1>
              <p className="font-normal text-xl leading-relaxed mt-4 text-gray-600">
                Using AI to See Through Someone Else&rsquo;s Eyes: Validating Alt-Text with Image&nbsp;Generation
              </p>

              <p className="font-normal text-base leading-normal mt-16">
                Alt-text is one of the simplest accessibility practices to describe, and one of the hardest to do well. It asks us to translate an image into language so that someone who cannot see the image can still understand it. But between what we intend and what someone else understands lies a space where the meaning can&nbsp;drift.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                That space is what I call the <strong>Imagination Gap</strong>—the distance between the mental image a writer believes they are conveying and the one a reader constructs from the words&nbsp;alone.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                AI image generation offers a novel way to make that gap&nbsp;visible.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                By regenerating an image <em>solely</em> from the alt-text written to describe it, we can examine how much meaning is preserved, how much is lost, and where ambiguity lives. The goal is not to automate alt-text or replace human expertise; it is to reveal the limits of our language so we can write with greater clarity and&nbsp;intention.
              </p>

              <h2 id="what-alt-text-is" className="font-normal text-xl leading-8 mt-12">
                What Alt-Text Actually&nbsp;Is
              </h2>

              <p className="font-normal text-base leading-normal mt-6">
                For readers outside the accessibility space:
                <br />
                <strong> alt-text is a written description of an image that can be read aloud by assistive technologies</strong> such as screen readers. It ensures that people who cannot see the image still have access to the same&nbsp;information.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                Good alt-text is not simply a list of objects; it conveys the essential meaning of the&nbsp;image.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                But meaning is subjective. And when we describe an image, we are guided by our own assumptions, visual context, and background knowledge—none of which the reader necessarily&nbsp;shares.
              </p>

              <h2 id="imagination-gap" className="font-normal text-xl leading-8 mt-12">
                The Imagination&nbsp;Gap
              </h2>

              <p className="font-normal text-base leading-normal mt-6">
                When we write alt-text, we picture the original image in our minds.
                <br />
                We already know what the notebook looks like, what the person in the photograph is doing, what the brand colors mean, what the expression on a face&nbsp;implies.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                But the reader does&nbsp;not.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                They receive only the words.
                <br />
                And words, even simple ones, are&nbsp;incomplete.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                If I say &ldquo;a red notebook,&rdquo; what do you&nbsp;imagine?
              </p>

              <ul className="font-normal text-base leading-normal mt-6 list-disc space-y-4">
                <li className="mb-1 ml-[21px]">Bright red? Deep red? Brown-red?</li>
                <li className="mb-1 ml-[21px]">Hardcover? Softcover? Leather? Cloth?</li>
                <li className="mb-1 ml-[21px]">Large? Small? Tall? Wide?</li>
                <li className="mb-1 ml-[21px]">New? Worn? Handmade? Factory-made?</li>
              </ul>

              <p className="font-normal text-base leading-normal mt-6">
                Every reader fills in the blanks differently.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                This is the Imagination Gap—<strong>the invisible distance between the writer&rsquo;s intention and the reader&rsquo;s interpretation</strong>. It is especially critical in accessibility, where clarity is not a luxury but a&nbsp;necessity.
              </p>

              <h2 id="why-human-validation" className="font-normal text-xl leading-8 mt-12">
                Why Human Validation Isn&rsquo;t Enough
              </h2>

              <p className="font-normal text-base leading-normal mt-6">
                We often assume the solution is simple: ask blind users to validate&nbsp;alt-text.
                <br />
                But this is unfair and&nbsp;unsustainable.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                Blind reviewers are constantly asked to validate, test, and correct accessibility work—often unpaid and often at scale. And even when human review is in place, communication bias creeps in. A reviewer may imagine something different than what the author intended but describe it in a way that masks the misunderstanding. Or they may not know which visual details the author considered&nbsp;essential.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                Human review is invaluable, but it is not&nbsp;exhaustive.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                The artist knows the image in their&nbsp;mind.
                <br />
                The reviewer knows the image in&nbsp;theirs.
                <br />
                Neither can see the gap between&nbsp;them.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                AI image generation offers a third perspective—one that exposes ambiguity without taxing the community we are trying to&nbsp;support.
              </p>

              <h2 id="the-insight" className="font-normal text-xl leading-8 mt-12">
                The Insight: AI as a Reverse Alt-Text&nbsp;Engine
              </h2>

              <p className="font-normal text-base leading-normal mt-6">
                An image generator can serve as a <strong>literal interpreter</strong> of your&nbsp;description.
                <br />
                If you give it only your alt-text, without the original image, and ask it to generate <em>exactly</em> what the text describes, the output reveals how your words function when stripped of&nbsp;context.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                When I first attempted this, I had almost no experience with image generation tools. I didn&rsquo;t even realize one was built into ChatGPT. I simply explained what I wanted to test, and the model suggested I prepend my prompt with the following&nbsp;instruction:
              </p>

              <blockquote className="font-normal text-base leading-normal mt-6 italic border-l-4 border-gray-300 pl-4 ml-6">
                &ldquo;Generate a literal, documentary-style image based strictly on this description. Do not add or infer artistic elements beyond what is explicitly stated.&rdquo;
              </blockquote>

              <p className="font-normal text-base leading-normal mt-6">
                That phrasing forces the model to treat your text like documentation rather than&nbsp;inspiration.
                <br />
                It mirrors the purpose of alt-text: factual, unembellished&nbsp;communication.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                With modern models, the exact wording matters less than the principle:
                <strong> ask the AI to interpret your alt-text literally.</strong>
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                This reveals where the Imagination Gap appears.
              </p>

              <h2 id="the-method" className="font-normal text-xl leading-8 mt-12">
                The&nbsp;Method
              </h2>

              <p className="font-normal text-base leading-normal mt-6">
                The workflow is&nbsp;simple:
              </p>

              <ol className="font-normal text-base leading-normal mt-6 ml-6 list-decimal space-y-4 marker:font-bold">
                <li className="mb-6">
                  <strong>Write your alt-text normally.</strong>
                  <div className="mt-2">
                    Describe the image as you intend it.
                  </div>
                </li>
                <li className="mb-6">
                  <strong>Copy only the text.</strong>
                  <div className="mt-2">
                    No filenames, captions, or visual hints.
                  </div>
                </li>
                <li className="mb-6">
                  <strong>Paste it into the image generator with a literal-interpretation instruction.</strong>
                </li>
                <li className="mb-6">
                  <strong>Compare the generated image to the original.</strong>
                  <div className="mt-2">
                    Where does it match?
                    <br />
                    Where does it drift?
                    <br />
                    What details did you assume were obvious?
                  </div>
                </li>
                <li className="mb-6">
                  <strong>Refine the alt-text.</strong>
                  <div className="mt-2">
                    Add clarity where ambiguity appeared.
                  </div>
                </li>
                <li className="mb-6">
                  <strong>Generate the second reconstruction.</strong>
                  <div className="mt-2">
                    Confirm whether the meaning is now more faithfully conveyed.
                  </div>
                </li>
              </ol>

              <p className="font-normal text-base leading-normal mt-6">
                This process takes minutes—and the insight is&nbsp;immediate.
              </p>

              <h2 id="demonstration" className="font-normal text-xl leading-8 mt-12">
                A Demonstration: Closing the Imagination Gap Through&nbsp;Iteration
              </h2>

              <p className="font-normal text-base leading-normal mt-6">
                To illustrate how this works, I staged a simple photograph using objects from my own&nbsp;desk:
                <br />
                a handmade red leather notebook cover and a black fountain&nbsp;pen.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                At first glance, it&rsquo;s an uncomplicated&nbsp;scene.
                <br />
                But simplicity often hides&nbsp;ambiguity.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                <strong>Original image:</strong>
              </p>

              <figure className="mt-6">
                <Image
                  alt="A handmade red leather notebook cover lies closed on a light wood surface. The cover is dyed in varied deep red and brown tones and features a distinctive asymmetrical front flap that folds over from the right side. A black fountain pen with silver accents rests diagonally across the notebook from upper left to lower right. The leather shows visible texture and natural tonal variation, with subtle highlights from the overhead lighting."
                  src="/images/essays/the-imagination-gap-alt-text-ai/original.png"
                />
                <figcaption className="font-normal leading-normal mt-3 text-sm text-gray-600">
                  <strong>Figure 1.</strong> Alt-text for the original photograph:
                  <br />
                  <em>&ldquo;A handmade red leather notebook cover lies closed on a light wood surface. The cover is dyed in varied deep red and brown tones and features a distinctive asymmetrical front flap that folds over from the right side. A black fountain pen with silver accents rests diagonally across the notebook from upper left to lower right. The leather shows visible texture and natural tonal variation, with subtle highlights from the overhead lighting.&rdquo;</em>
                  <br />
                  <br />
                  This is the authoritative description used for comparison in the alt-text reconstruction examples&nbsp;below.
                </figcaption>
              </figure>

              <h3 className="font-normal text-lg leading-8 mt-8">
                Version 1: A Reasonable First&nbsp;Attempt
              </h3>

              <p className="font-normal text-base leading-normal mt-6">
                <strong>Alt-text (Version 1):</strong>
              </p>

              <blockquote className="font-normal text-base leading-normal mt-6 italic border-l-4 border-gray-300 pl-4 ml-6">
                &ldquo;A black fountain pen rests diagonally across a closed red leather notebook on a light wood surface.&rdquo;
              </blockquote>

              <p className="font-normal text-base leading-normal mt-6">
                This description is common: correct in a general sense, serviceable, and typical of what appears on product pages and&nbsp;blogs.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                <strong>AI reconstruction (Version 1):</strong>
              </p>

              <Image
                alt="A black fountain pen rests diagonally across a closed red leather notebook on a light wood surface."
                src="/images/essays/the-imagination-gap-alt-text-ai/alt-text-version-1.png"
                className="mt-6"
              />

              <p className="font-normal text-base leading-normal mt-6">
                The result is surprisingly close—but not quite&nbsp;right.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                The model interpreted the scene as:
              </p>

              <ul className="font-normal text-base leading-normal mt-6 list-disc space-y-4">
                <li className="mb-1 ml-[21px]">a smooth, symmetrical commercial notebook</li>
                <li className="mb-1 ml-[21px]">flat red leather with no tonal variation</li>
                <li className="mb-1 ml-[21px]">a background whose wood grain differs subtly</li>
                <li className="mb-1 ml-[21px]">proportions that don&rsquo;t quite match</li>
                <li className="mb-1 ml-[21px]">a pen orientation that is approximate rather than specific</li>
              </ul>

              <p className="font-normal text-base leading-normal mt-6">
                These are not mistakes—they are <strong>interpretations in the absence of explicit detail.</strong>
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                This is the Imagination Gap made&nbsp;visible.
              </p>

              <h3 className="font-normal text-lg leading-8 mt-8">
                Version 2: Clarifying&nbsp;Intention
              </h3>

              <p className="font-normal text-base leading-normal mt-6">
                Using what the reconstruction revealed, I rewrote the alt-text more&nbsp;intentionally:
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                <strong>Alt-text (Version 2):</strong>
              </p>

              <blockquote className="font-normal text-base leading-normal mt-6 italic border-l-4 border-gray-300 pl-4 ml-6">
                &ldquo;A handmade red leather notebook cover with an asymmetrical front flap lies closed on a light wood table. The leather shows deep red and brown tones with a natural waxed sheen. A black fountain pen with silver accents rests diagonally across the center of the notebook.&rdquo;
              </blockquote>

              <p className="font-normal text-base leading-normal mt-6">
                <strong>AI reconstruction (Version 2):</strong>
              </p>

              <Image
                alt="A handmade red leather notebook cover with an asymmetrical front flap lies closed on a light wood table. The leather shows deep red and brown tones with a natural waxed sheen. A black fountain pen with silver accents rests diagonally across the center of the notebook."
                src="/images/essays/the-imagination-gap-alt-text-ai/alt-text-version-2.png"
                className="mt-6"
              />

              <p className="font-normal text-base leading-normal mt-6">
                Immediately, we&nbsp;see:
              </p>

              <ul className="font-normal text-base leading-normal mt-6 list-disc space-y-4">
                <li className="mb-1 ml-[21px]">the asymmetrical flap appears</li>
                <li className="mb-1 ml-[21px]">the leather shows richer tonal variation</li>
                <li className="mb-1 ml-[21px]">the sheen is more accurate</li>
                <li className="mb-1 ml-[21px]">proportions are closer</li>
                <li className="mb-1 ml-[21px]">the pen is centered and clearly oriented</li>
              </ul>

              <p className="font-normal text-base leading-normal mt-6">
                It is still not identical to the original—and it never should&nbsp;be.
                <br />
                Language cannot encode the exact experience of hand-dyed leather or the tactile nuance of&nbsp;craftsmanship.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                But the distance between intention and interpretation has narrowed&nbsp;significantly.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                That is the purpose of this&nbsp;exercise.
              </p>

              <h2 id="ethical-considerations" className="font-normal text-xl leading-8 mt-12">
                Ethical Considerations
              </h2>

              <p className="font-normal text-base leading-normal mt-6">
                AI cannot replace blind&nbsp;users.
                <br />
                Human judgment is irreplaceable, especially when describing emotion, context, or cultural&nbsp;meaning.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                AI also carries the biases and limitations of its training data. A divergence may reflect ambiguity in the text—or bias in the&nbsp;model.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                This method should <strong>reduce</strong>, not increase, the burden on blind reviewers by helping writers resolve avoidable ambiguity before passing content along for human&nbsp;validation.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                Transparency matters: this technique is a tool for clarity, not&nbsp;automation.
                <br />
                Alt-text must remain an act of human&nbsp;communication.
              </p>

              <h2 className="font-normal text-xl leading-8 mt-12">
                Why This Matters for Humane Systems&nbsp;Design
              </h2>

              <p className="font-normal text-base leading-normal mt-6">
                Accessibility is often framed as&nbsp;compliance.
                <br />
                But humane systems design asks a deeper&nbsp;question:
              </p>

              <blockquote className="font-normal text-base leading-normal mt-6 italic border-l-4 border-gray-300 pl-4 ml-6">
                Does this system create harmony between intention and experience?
              </blockquote>

              <p className="font-normal text-base leading-normal mt-6">
                Alt-text sits at the intersection of language, perception, and meaning. When it fails, it reveals where a system assumes sight is universal. When it succeeds, it becomes an act of&nbsp;inclusion.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                Using AI in this way transforms alt-text from an afterthought into an intentional moment of clarity. It externalizes the assumptions we make unconsciously, allowing us to see our own language with new&nbsp;eyes.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                AI is not the&nbsp;author.
                <br />
                It is the&nbsp;mirror.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                By reflecting what our words truly communicate, it helps us design with care, precision, and&nbsp;empathy.
                <br />
                It turns ambiguity into&nbsp;awareness.
                <br />
                It reveals the system behind the&nbsp;surface.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                And sometimes, in a small way, it creates&nbsp;harmony.
              </p>

              <h2 id="conclusion" className="font-normal text-xl leading-8 mt-12">
                Conclusion
              </h2>

              <p className="font-normal text-base leading-normal mt-6">
                Alt-text asks us to describe what we see so that someone else can understand it. But understanding is never guaranteed. Between intention and experience lies the Imagination&nbsp;Gap.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                Using AI to reconstruct an image from alt-text doesn&rsquo;t close that gap—it illuminates it. It shows us the interpretive space our words create. It reveals where meaning drifts. And it allows us to refine our language with greater&nbsp;intention.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                This method is not about automation or&nbsp;efficiency.
                <br />
                It is about&nbsp;awareness.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                By making ambiguity visible, we can write alt-text that is clearer, more honest, and more human. We can respect the cognitive labor of blind users. And we can build digital systems that better align intention with&nbsp;experience.
              </p>

              <p className="font-normal text-base leading-normal mt-6">
                A small act of harmony in a system that touches millions every&nbsp;day.
              </p>
            </div>

            {/* Navigation */}
            <div className="hidden md:block md:w-3/12">
              <NavRight sections={sections} />
            </div>
          </div>
        </MyContainer>
      </article>
    </PageWrapper>
  );
}

export default TheImaginationGapAltTextAiPage;
