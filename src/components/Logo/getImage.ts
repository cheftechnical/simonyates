export interface Dimension {
  height: number;
  width: number;
}

export interface Image {
  alt: string;
  dimension: Dimension;
  src: string;
}

const basePath = "/logos";

export function getImage(brand: string, variant: string): Image | undefined {
  switch (brand) {
    case "genworth-canada":
      return {
        alt: "Genworth Canada logo",
        dimension: {
          height: 598,
          width: 598,
        },
        src: `${basePath}/${brand}/genworth-canada--color--598x598.jpg`,
      };
    case "hellofresh":
      return {
        alt: "HelloFresh logo",
        dimension: {
          height: 430,
          width: 502,
        },
        src: `${basePath}/${brand}/hellofresh-lime--color.png`,
      };
    case "infomart":
      return {
        alt: "Infomart logo",
        dimension: {
          height: 82,
          width: 400,
        },
        // src: `${basePath}/${brand}/infomart--color--400x82.png`,
        src: `${basePath}/${brand}/infomart-i--reproduction--color.svg`,
      };
    case "jib-design-and-advertising":
      return {
        alt: "Jib Design & Advertising logo",
        dimension: {
          height: 100,
          width: 66,
        },
        src: `${basePath}/${brand}/${brand}--color.svg`,
      };
    case "linkedin":
      switch (variant) {
        case "bfbfbf":
          return {
            alt: "LinkedIn logo",
            dimension: {
              height: 24,
              width: 24,
            },
            src: `${basePath}/${brand}/${brand}---${variant}.svg`,
          };
        default:
          return {
            alt: "LinkedIn logo",
            dimension: {
              height: 24,
              width: 24,
            },
            src: `${basePath}/${brand}/${brand}--${variant}.svg`,
          };
      };
    case "mayo-clinic":
      return {
        alt: "Mayo Clinic logo",
        dimension: {
          height: 200,
          width: 200,
        },
        src: `${basePath}/${brand}/mayo-clinic--color--200x200.png`,
      };
    case "philips-lighting":
      return {
        alt: "Philips Lighting logo",
        dimension: {
          height: 320,
          width: 253,
        },
        src: `${basePath}/${brand}/philips-lighting-2013--color--253x320.png`,
      };
    case "rbc":
      return {
        alt: "Royal Bank of Canada (RBC) logo",
        dimension: {
          height: 270,
          width: 208,
        },
        src: `${basePath}/${brand}/rbc--color--208x270.png`,
      };
    case "rss":
      switch (variant) {
        case "bfbfbf":
          return {
            alt: "RSS feed",
            dimension: {
              height: 24,
              width: 24,
            },
            src: `${basePath}/${brand}/rss---bfbfbf.svg`,
          };
        default:
          return {
            alt: "RSS feed",
            dimension: {
              height: 24,
              width: 24,
            },
            src: `${basePath}/${brand}/feed-icon.svg`,
          };
      };
    case "simon-yates":
      // Depending on the variant, there are two different sizes being used
      switch (variant) {
        case "222222":
          return {
            alt: "Simon Yates",
            dimension: {
              height: 29,
              width: 130,
            },
            src: `${basePath}/${brand}/${brand}---222222.svg`,
          };
        case "eeeeee":
          return {
            alt: "Simon Yates",
            dimension: {
              height: 29,
              width: 130,
            },
            src: `${basePath}/${brand}/${brand}---eeeeee.svg`,
          };
        case "grey-100":
          return {
            alt: "Simon Yates",
            dimension: {
              height: 24,
              width: 128,
            },
            src: `${basePath}/${brand}/${brand}--grey-100.svg`,
          };
        case "default":
        default:
          return {
            alt: "Simon Yates",
            dimension: {
              height: 19,
              width: 128,
            },
            src: `${basePath}/${brand}/${brand}--default.svg`,
          };
      }
    case "truenorth-technologies":
      switch (variant) {
        default:
          return {
            alt: "TrueNorth Technologies",
            dimension: {
              height: 30,
              width: 30,
            },
            src: `${basePath}/truenorth-technologies/truenorth-technologies-logo.svg`,
          };
      }
    case "twitter":
      return {
        alt: "Twitter logo",
        dimension: {
          height: 24,
          width: 24,
        },
        src: `${basePath}/${brand}/${brand}--${variant}.svg`,
      };
    case "uncharted-software":
      return {
        alt: "Uncharted Software logo",
        dimension: {
          height: 400,
          width: 400,
        },
        src: `${basePath}/${brand}/uncharted-software--color--400x400.png`,
      };
    default:
      console.warn(`Missing or invalid image: "${brand}" ${variant}`);
      return;
  }
}
