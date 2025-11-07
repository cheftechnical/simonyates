import Image from "../../../components/Image/Image";
import MyContainer from "../../../styling/MyContainer/MyContainer";

export default function Hero() {
  return (
    <MyContainer className="pb-[26px] sm:pb-[80px]">
      <div className="flex flex-wrap">
        <div className="w-full md:w-[58.333333%]">
          <div className="flex items-end h-full">
            <div>
              <h1 className="font-normal text-xl leading-8 pb-0 sm:pb-[72px]">
                Simon Yates, <br />
                <strong>Programmer</strong> from Toronto
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[41.666667%]">
          <Image
            alt="Black and white headshot of a Caucasian male in his 40s. He is clean-shaven with a long, angular face, high cheekbones, and a sharp, prominent nose. His hair is voluminous, medium-long, and slightly messy — extending outward with visible body and texture, similar to a naturally thick or full style. He wears round glasses and has a large, natural smile. The lighting is soft and even, with a plain light gray studio background. The composition is realistic and documentary-style, without artistic embellishments."
            src="/images/about/hero/simon-yates.png"
          />
        </div>
      </div>
    </MyContainer>
  );
}
