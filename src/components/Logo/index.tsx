import { Dimension, getImage } from "./getImage";

interface Props {
  brand:
    | "genworth-canada"
    | "hellofresh"
    | "infomart"
    | "jib-design-and-advertising"
    | "linkedin"
    | "mayo-clinic"
    | "philips"
    | "philips-lighting"
    | "rbc"
    | "simon-yates"
    | "truenorth"
    | "twitter"
    | "uncharted-software";
  variant: "default" | "grey-100" | "grey-300" | "grey-500";

  width?: number | string;
  // width?: number | '100%';
}

export default function Logo(props: Props) {
  const { brand, variant, width } = props;

  const image = getImage(brand, variant);

  // If no image, return nothing
  if (!image) return <></>;

  if (typeof width === "number") {
    // Scale the image
    const scaledDimension: Dimension = {
      height: (width / image.dimension.width) * image.dimension.height,
      width: width,
    };

    // Return the scaled image
    return (
      <img
        alt={image.alt}
        src={image.src}
        height={scaledDimension.height}
        width={scaledDimension.width}
      />
    );
  }

  // If width=100%, return same
  // if (!width || width === '100%') {
  return <img alt={image.alt} src={image.src} height="auto" width={width} />;
  // }
}
