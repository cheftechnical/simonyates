/** @jsxImportSource @emotion/react */
import rem from "../rem";
import {useMemo} from "react";
import {css} from "@emotion/react";
import {styled, useTheme} from "@mui/material";
import color from "../../styling/Color";

// import React from "react";

export enum Groups {
  primary = 'primary',
  secondary = 'secondary'
}

export interface Props {
  children?: any | any[] | undefined;
  className?: string;

  /**
   * Specifies which component to use, if omitted it will use the variant
   */
  component?: string;
  group: 'primary' | 'secondary' | undefined;
  next?: boolean;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'subtitle' | 'caption' | undefined;
  weight: 'light' | 'regular' | 'medium' | 'semibold' | undefined;
}

const defaultSerifFonts = `"Times New Roman", Times, serif`;
const defaultSansSerifFonts = `"Helvetica", "Arial", "sans-serif"`;
const defaultTestFonts = `"Comic Sans Ms"`;

// Font families
const fontFamilyApercu = `"Apercu", ${defaultSansSerifFonts}`;
const fontFamilyTiemposText = `"Tiempos Text", ${defaultSerifFonts}`;

// The lineHeights are used to set the marginTop of components with the `next` property
const primary_h1_400_regular_lineHeight = rem(88);
const primary_h2_400_regular_lineHeight = rem(56);
const primary_h3_400_regular_lineHeight = rem(32);
const primary_h3_500_medium_lineHeight = rem(32);
const primary_h3_600_semibold_lineHeight = rem(32);
const primary_h4_500_medium_lineHeight = rem(24);
const primary_h4_600_semibold_lineHeight = rem(24);
const primary_body_400_regular_lineHeight = rem(24);
const primary_body_600_semibold_lineHeight = rem(24);
const primary_subtitle_400_regular_lineHeight = rem(16);
const primary_caption_400_regular_lineHeight = rem(16);

const secondary_h3_300_light_lineHeight = rem(40);
const secondary_body_300_light_lineHeight = rem(24);
const secondary_body_400_regular_lineHeight = rem(24);
const secondary_subtitle_400_regular_lineHeight = rem(16);
const secondary_caption_400_regular_lineHeight = rem(16);

// xs
// - iPhone 6/7/8

// sm
// - iPad

// md
// - iPad Pro

// lg
// - Desktop

interface SpacingMap {
  [spacing: string]: string;
}

interface WeightMap {
  [weight: string]: SpacingMap;
}

interface ElementMap {
  [element: string]: WeightMap
}

interface ClassMap {
  [key: string]: ElementMap;
}

// const x = useTheme();
// x.breakpoints

const style_primary_h1_400_regular = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyTiemposText,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: rem(54),

  letterSpacing: rem(-0.5),
  color: color.grey['900'],
};

const style_primary_h1_400_regular_next = {
  marginTop: primary_h1_400_regular_lineHeight,
};

const style_primary_h2_400_regular = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyTiemposText,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: rem(34),
  lineHeight: primary_h2_400_regular_lineHeight,
  letterSpacing: rem(0.25),
  color: color.grey['900'],
}

const style_primary_h2_400_regular_next = {
  marginTop: primary_h2_400_regular_lineHeight
}

const style_primary_h3_400_regular = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyTiemposText,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: rem(24),
  lineHeight: primary_h3_400_regular_lineHeight,
  color: color.grey['900'],
}

const style_primary_h3_400_regular_next = {
  _marginTop: primary_h3_400_regular_lineHeight
}

const style_primary_h3_500_medium = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyTiemposText,
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: rem(24),
  lineHeight: primary_h3_500_medium_lineHeight,
  letterSpacing: rem(0.25),
  color: color.grey['900'],
}

const style_primary_h3_500_medium_next = {
  marginTop: primary_h3_500_medium_lineHeight
}

const style_primary_h3_600_semibold = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyTiemposText,
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: rem(23),
  lineHeight: primary_h3_600_semibold_lineHeight,
  letterSpacing: rem(0.5),
  color: color.grey['900']
};

const style_primary_h3_600_semibold_next = {
  marginTop: primary_h3_600_semibold_lineHeight
}

const style_primary_h4_500_medium = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyTiemposText,
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: rem(16),
  lineHeight: primary_h4_500_medium_lineHeight,
  letterSpacing: rem(0.5),
  color: color.grey['900']
};

const style_primary_h4_500_medium_next = {
  marginTop: primary_h4_500_medium_lineHeight
};

const style_primary_h4_600_semibold = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyTiemposText,
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: rem(16),
  lineHeight: primary_h4_600_semibold_lineHeight,
  letterSpacing: rem(0.5),
  color: color.grey['900'],
};

const style_primary_h4_600_semibold_next = {
  marginTop: primary_h4_600_semibold_lineHeight
};

const style_primary_body_400_regular = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyTiemposText,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: rem(16),
  lineHeight: primary_body_400_regular_lineHeight,
  letterSpacing: rem(0.5),
  color: color.grey['900'],
};

const style_primary_body_400_regular_next = {
  marginTop: primary_body_400_regular_lineHeight
};

const style_primary_body_600_semibold = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyTiemposText,
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: rem(16),
  lineHeight: primary_body_600_semibold_lineHeight,
  letterSpacing: rem(0.5),
  color: color.grey['900'],
};

const style_primary_body_600_semibold_next = {
  marginTop: primary_body_600_semibold_lineHeight
};

const style_primary_subtitle_400_regular = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyTiemposText,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: rem(14),
  lineHeight: primary_subtitle_400_regular_lineHeight,
  letterSpacing: rem(0.25),
  color: color.grey['900'],
};

const style_primary_subtitle_400_regular_next = {
  marginTop: primary_subtitle_400_regular_lineHeight
};

const style_caption_400_regular = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyTiemposText,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: rem(12),
  lineHeight: primary_caption_400_regular_lineHeight,
  letterSpacing: rem(0.4),
  color: color.grey['900'],
};

const style_caption_400_regular_next = {
  marginTop: primary_caption_400_regular_lineHeight
};

const style_secondary_h3_300_light = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyApercu,
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: rem(24),
  lineHeight: secondary_h3_300_light_lineHeight,
  color: color.grey['900'],
};

const style_secondary_h3_300_light_next = {
  // marginTop: primary_subtitle_regular.lineHeight
  marginTop: secondary_h3_300_light_lineHeight // @todo check if any corrections were made in the design to fix this root issue
};

const style_secondary_body_300_light = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyApercu,
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: rem(16),
  lineHeight: secondary_body_300_light_lineHeight,
  letterSpacing: rem(0.5),
  color: color.grey['900'],
};

const style_secondary_body_300_light_next = {
  marginTop: secondary_body_300_light_lineHeight
};

const style_secondary_body_400_regular = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyApercu,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: rem(16),
  lineHeight: secondary_body_400_regular_lineHeight,
  letterSpacing: rem(0.5),
  color: color.grey['900'],
};

const style_secondary_body_400_regular_next = {
  marginTop: secondary_body_400_regular_lineHeight
};

const style_secondary_subtitle_400_regular = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyApercu,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: rem(14),
  lineHeight: secondary_subtitle_400_regular_lineHeight,
  letterSpacing: rem(0.25),
  color: color.grey['900'],
};

const style_secondary_subtitle_400_next = {
  marginTop: secondary_subtitle_400_regular_lineHeight
};

const style_secondary_caption_400_regular = {
  margin: 0,
  padding: 0,

  fontFamily: fontFamilyApercu,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: rem(12),
  lineHeight: secondary_caption_400_regular_lineHeight,
  letterSpacing: rem(0.4),
  color: color.grey['900'],
};

const style_secondary_caption_400_regular_next = {
  marginTop: secondary_caption_400_regular_lineHeight
};

export default function Typography(props: Props) {
//     const classes = useStyles();
  const {children, className, component, group, next, variant, weight} = props;

  const result = useMemo(() => {
//         const classMap: ClassMap = {
//             primary: {
//                 h1: {
//                     regular: {
//                         default: classes.primary_h1_400_regular,
//                         next: classes.primary_h1_400_regular_next,
//                     },
//                 },
//                 h2: {
//                     regular: {
//                         default: classes.primary_h2_400_regular,
//                         next: classes.primary_h2_400_regular_next
//                     },
//                 },
//                 h3: {
//                     regular: {
//                         default: classes.primary_h3_400_regular,
//                         next: classes.primary_h3_400_regular_next,
//                     },
//                     medium: {
//                         default: classes.primary_h3_500_medium,
//                         next: classes.primary_h3_500_medium_next,
//                     },
//                     semibold: {
//                         default: classes.primary_h3_600_semibold,
//                         next: classes.primary_h3_600_semibold_next,
//                     },
//                 },
//                 h4: {
//                     medium: {
//                         default: classes.primary_h4_500_medium,
//                         next: classes.primary_h4_500_medium_next,
//                     },
//                     semibold: {
//                         default: classes.primary_h4_600_semibold,
//                         next: classes.primary_h4_600_semibold_next
//                     },
//                 },
//                 body: {
//                     regular: {
//                         default: classes.primary_body_400_regular,
//                         next: classes.primary_body_400_regular_next
//                     },
//                     semibold: {
//                         default: classes.primary_body_600_semibold,
//                         next: classes.primary_body_600_semibold_next,
//                     }
//                 },
//                 subtitle: {
//                     regular: {
//                         default: classes.primary_subtitle_400_regular,
//                         next: classes.primary_subtitle_400_regular_next,
//                     }
//                 },
//                 caption: {
//                     regular: {
//                         default: classes.primary_caption_400_regular,
//                         next: classes.primary_caption_400_regular_next,
//                     }
//                 }
//             },
//             secondary: {
//                 h3: {
//                     light: {
//                         default: classes.secondary_h3_300_light,
//                         next: classes.secondary_h3_300_light_next,
//                     }
//                 },
//                 body: {
//                     light: {
//                         default: classes.secondary_body_300_light,
//                         next: classes.secondary_body_300_light_next
//                     },
//                     regular: {
//                         default: classes.secondary_body_400_regular,
//                         next: classes.secondary_body_400_regular_next,
//                     }
//                 },
//                 subtitle: {
//                     regular: {
//                         default: classes.secondary_subtitle_400_regular,
//                         next: classes.secondary_subtitle_400_regular_next,
//                     }
//                 },
//                 caption: {
//                     regular: {
//                         default: classes.secondary_caption_400_regular,
//                         next: classes.secondary_caption_400_regular_next,
//                     }
//                 }
//             }
//         };
//
//         // If the user has said that this is the next paragraph, and a 'next' style has
//         // been defined, use that; otherwise use the base version
//         const thisGroup = group || 'primary';
//         const thisVariant = variant || 'body';
//         const thisWeight = weight || 'regular';
//
//         const baseClass = (next)
//             ? `${classMap[thisGroup][thisVariant][thisWeight]['default']} ${classMap[thisGroup][thisVariant][thisWeight]['next']}`
//             : classMap[thisGroup][thisVariant][thisWeight]['default'];
//
//         const thisClassName = (className)
//             ? `${baseClass} ${className}`
//             : baseClass;

    const customStyles = {
      color: 'blue !important'
    }

    const lookup = (component) ? component : variant;

    switch (lookup) {
      // case 'h1':
      //     return <h1 css={customStyles}>{children}</h1>
      // case 'h2':
      //     return <h2 className={thisClassName}>{children}</h2>
      // case 'h3':
      //     return <h3 className={thisClassName}>{children}</h3>
      // case 'h4':
      //     return <h4 className={thisClassName}>{children}</h4>
      default:
        // return <p css={customStyles}>{children}</p>
        return <p css={customStyles}>{children}</p>
    }
    // }, [children, classes, className, component, group, next, variant, weight]);
  }, [children, component, group, next, variant, weight]);

  // const color = 'white'
  return (
    //   <div
    //     css={css`
    //   padding: 32px;
    //   background-color: hotpink;
    //   font-size: 24px;
    //   border-radius: 4px;
    //   &:hover {
    //     color: ${color};
    //   }
    // `}
    //   >
    //       Hover to change color.
    //   </div>

    <>
      {result}
    </>
  );
};
