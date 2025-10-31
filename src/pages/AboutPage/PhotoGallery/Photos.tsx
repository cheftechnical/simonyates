import Image from "../../../components/Image/Image";
import MyGridContainer from "../../../styling/MyGridContainer/MyGridContainer";
import Carousel from "react-material-ui-carousel";

export default function Photos() {
  return (
    <div className="pt-[24px]">
      {/* Desktop */}
      <div className="hidden sm:block">
        <MyGridContainer>
          <div className="w-1/4">
            <Image
              alt="Jean'is Joplin"
              src="/images/about/photo-gallery/jean.png"
            />
          </div>
          <div className="w-1/4">
            <Image
              alt="Mexico"
              src="/images/about/photo-gallery/mexico-1.png"
            />
          </div>
          <div className="w-1/4">
            <Image
              alt="Mexico"
              src="/images/about/photo-gallery/mexico-2.png"
            />
          </div>
          <div className="w-1/4">
            <Image
              alt="Mexico"
              src="/images/about/photo-gallery/mexico-3.png"
            />
          </div>
        </MyGridContainer>
      </div>

      {/*	Mobile */}
      <div className="block sm:hidden">
        <Carousel animation="slide" autoPlay={false}>
          <div>
            <Image
              alt="My girlfriend looking like Janis Joplin"
              src="/images/about/photo-gallery/jean.png"
            />
          </div>
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
