import MyContainer from "../../../styling/MyContainer/MyContainer";
import Photos from "./Photos";

export default function PhotoGallery() {
  return (
    <MyContainer>
      <p className="font-normal text-base leading-normal tracking-[0.5px]">
        In case you&rsquo;re curious, here are some of my photos from traveling
      </p>

      <Photos />
    </MyContainer>
  );
}
