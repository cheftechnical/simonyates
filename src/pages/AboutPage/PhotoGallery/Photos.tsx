import Image from "../../../components/Image/Image";
import Carousel from "react-material-ui-carousel";

export default function Photos() {
  return (
    <div className="pt-[24px]">
      {/* Desktop */}
      <div className="hidden sm:block">
        <div className="flex flex-wrap -mx-3">
          <div className="w-1/3">
            <Image
              alt="Mexico"
              src="/images/about/photo-gallery/mexico-1.png"
            />
          </div>
          <div className="w-1/3">
            <Image
              alt="Mexico"
              src="/images/about/photo-gallery/mexico-2.png"
            />
          </div>
          <div className="w-1/3">
            <Image
              alt="Mexico"
              src="/images/about/photo-gallery/mexico-3.png"
            />
          </div>
        </div>
      </div>

      {/*	Mobile */}
      <div className="block sm:hidden">
        <Carousel animation="slide" autoPlay={false}>
          <div>
            <Image
              alt="A street in Mexico"
              src="/images/about/photo-gallery/mexico-1.png"
            />
          </div>
          <div>
            <Image
              alt="A sunset in Mexico"
              src="/images/about/photo-gallery/mexico-2.png"
            />
          </div>
          <div>
            <Image
              alt="A town square in Mexico"
              src="/images/about/photo-gallery/mexico-3.png"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
