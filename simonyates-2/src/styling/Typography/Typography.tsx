

// import {useMemo} from 'react';
// import color from "../Color";
// import rem from "../rem";
// import { styled } from "@mui/system";
//
// export enum Groups {
//     primary = 'primary',
//     secondary = 'secondary'
// }
//
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
//
// const defaultSerifFonts = `"Times New Roman", Times, serif`;
// const defaultSansSerifFonts = `"Helvetica", "Arial", "sans-serif"`;
// // const defaultTestFonts = `"Comic Sans Ms"`;
//
// // Font families
// const fontFamilyApercu = `"Apercu", ${defaultSansSerifFonts}`;
// const fontFamilyTiemposText = `"Tiempos Text", ${defaultSerifFonts}`;
//
//
// // The lineHeights are used to set the marginTop of components with the `next` property
// const primary_h1_400_regular_lineHeight = rem(88);
// const primary_h2_400_regular_lineHeight = rem(56);
// const primary_h3_400_regular_lineHeight = rem(32);
// const primary_h3_500_medium_lineHeight = rem(32);
// const primary_h3_600_semibold_lineHeight = rem(32);
// const primary_h4_500_medium_lineHeight = rem(24);
// const primary_h4_600_semibold_lineHeight = rem(24);
// const primary_body_400_regular_lineHeight = rem(24);
// const primary_body_600_semibold_lineHeight = rem(24);
// const primary_subtitle_400_regular_lineHeight = rem(16);
// const primary_caption_400_regular_lineHeight = rem(16);
//
// const secondary_h3_300_light_lineHeight = rem(40);
// const secondary_body_300_light_lineHeight = rem(24);
// const secondary_body_400_regular_lineHeight = rem(24);
// const secondary_subtitle_400_regular_lineHeight = rem(16);
// const secondary_caption_400_regular_lineHeight = rem(16);
//
// // xs
// // - iPhone 6/7/8
//
// // sm
// // - iPad
//
// // md
// // - iPad Pro
//
// // lg
// // - Desktop
//
// interface SpacingMap {
//     [spacing: string]: string;
// }
//
// interface WeightMap {
//     [weight: string]: SpacingMap;
// }
//
// interface ElementMap {
//     [element: string]: WeightMap
// }
//
// interface ClassMap {
//     [key: string]: ElementMap;
// }
//
export default function Typography(props: Props) {
//     const classes = useStyles();
    const {children, className, component, group, next, variant, weight} = props;

//     const result = useMemo(() => {
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
//
//         const lookup = (component) ? component : variant;
//
//         switch (lookup) {
//             case 'h1':
//                 return <h1 className={thisClassName}>{children}</h1>
//             case 'h2':
//                 return <h2 className={thisClassName}>{children}</h2>
//             case 'h3':
//                 return <h3 className={thisClassName}>{children}</h3>
//             case 'h4':
//                 return <h4 className={thisClassName}>{children}</h4>
//             default:
//                 return <p className={thisClassName}>{children}</p>
//         }
//     }, [children, classes, className, component, group, next, variant, weight]);
//
//     return (
//         <>
//             {result}
//         </>
//     );

    return <>{children}</>
};
