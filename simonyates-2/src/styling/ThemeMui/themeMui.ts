import {createTheme} from "@mui/material";
import {apercu, apercuBold, apercuLight, apercuLightItalic, apercuRegular, apercuRegularItalic} from "./fontFaceApercu";
import {
  tiemposText,
  tiemposTextBold, tiemposTextBoldItalic,
  tiemposTextMedium,
  tiemposTextMediumItalic,
  tiemposTextRegular,
  tiemposTextRegularItalic, tiemposTextSemibold, tiemposTextSemiboldItalic
} from "./fontFaceTiemposText";
import rem from "../rem";
import color from "../Color";
import {CSSProperties} from "@mui/material/styles/createMixins";

const containerPaddingLeft = 22;
const containerPaddingRight = 22;

declare module '@mui/material/styles' {
  interface TypographyVariants {
    //
    // The following are sorted by the order used in the Figma file
    //

    // Primary: Tiempo
    primaryH1: CSSProperties;
    primaryH2: CSSProperties;
    primaryH2Next: CSSProperties;
    primaryH3: CSSProperties;
    primaryH3Next: CSSProperties;
    primaryH3Medium: CSSProperties;
    primaryH3Semibold: CSSProperties;
    primaryH4: CSSProperties;
    primaryH4Next: CSSProperties;
    primaryH4Semibold: CSSProperties;
    primaryBody: CSSProperties;
    primaryBodyNext: CSSProperties;
    primaryBodySemibold: CSSProperties;
    primarySubtitle: CSSProperties;
    primarySubtitleNext: CSSProperties;
    primaryButtonText: CSSProperties;
    primaryButtonTextBold: CSSProperties;
    primaryButtonContained: CSSProperties;
    primaryCaption: CSSProperties;

    // Secondary: Apercu
    secondaryH3: CSSProperties;
    secondaryBody: CSSProperties;
    secondaryBodyLight: CSSProperties;
    secondarySubtitle: CSSProperties;
    secondaryCaption: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    //
    // The following are sorted by the order used in the Figma file
    //

    // Primary: Tiempo
    primaryH1: CSSProperties;
    primaryH2: CSSProperties;
    primaryH2Next: CSSProperties;
    primaryH3: CSSProperties;
    primaryH3Next: CSSProperties;
    primaryH3Medium: CSSProperties;
    primaryH3Semibold: CSSProperties;
    primaryH4: CSSProperties;
    primaryH4Next: CSSProperties;
    primaryH4Semibold: CSSProperties;
    primaryBody: CSSProperties;
    primaryBodyNext: CSSProperties;
    primaryBodySemibold: CSSProperties;
    primarySubtitle: CSSProperties;
    primarySubtitleNext: CSSProperties;
    primaryButtonText: CSSProperties;
    primaryButtonTextBold: CSSProperties;
    primaryButtonContained: CSSProperties;
    primaryCaption: CSSProperties;

    // Secondary: Apercu
    secondaryH3: CSSProperties;
    secondaryBody: CSSProperties;
    secondaryBodyLight: CSSProperties;
    secondarySubtitle: CSSProperties;
    secondaryCaption: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    // Disable default variants
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    button: false;


    //
    // The following are sorted by the order used in the Figma file
    //

    // Primary: Tiempo
    primaryH1: true;
    primaryH2: true;
    primaryH2Next: true;
    primaryH3: true;
    primaryH3Next: true;
    primaryH3Medium: true;
    primaryH3Semibold: true;
    primaryH4: true;
    primaryH4Next: true;
    primaryH4Semibold: true;
    primaryBody: true;
    primaryBodyNext: true;
    primaryBodySemibold: true;
    primarySubtitle: true;
    primarySubtitleNext: true;
    primaryButtonText: true;
    primaryButtonTextBold: true;
    primaryButtonContained: true;
    primaryCaption: true;

    // Secondary: Apercu
    secondaryH3: true;
    secondaryBody: true;
    secondaryBodyLight: true;
    secondarySubtitle: true;
    secondaryCaption: true;
  }
}

export const themeMui = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1032 + containerPaddingLeft + containerPaddingRight,   // custom: to match figma
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0
        },
        endIcon: {
          marginLeft: rem(8)
        },
        contained: {
          padding: rem(16),

          fontFamily: tiemposText,
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: rem(16),
          lineHeight: rem(16),
          letterSpacing: rem(1.25),
          textTransform: 'uppercase',

          color: color.grey['50'],
          backgroundColor: color.grey['900'],

          boxShadow: 'none',

          '&:active': {
            color: color.grey['900'],
            backgroundColor: color.grey['50'],
            boxShadow: `inset 0px 0px 0px 2px ${color.grey[900]}`,

            '@media (hover: none)': {
              color: color.grey['900'],
              backgroundColor: color.grey['50'],
              boxShadow: `inset 0px 0px 0px 2px ${color.grey[900]}`,
            }
          },

          '&:hover': {
            color: color.grey['900'],
            backgroundColor: color.grey['50'],
            boxShadow: `inset 0px 0px 0px 2px ${color.grey[900]}`,

            '@media (hover: none)': {
              color: color.grey['900'],
              backgroundColor: color.grey['50'],
              boxShadow: `inset 0px 0px 0px 2px ${color.grey[900]}`,
            }
          },

          '&$disabled': {
            color: color.grey['50'],
            backgroundColor: color.grey['300'],

            '@media (hover: none)': {
              color: color.grey['50'],
              backgroundColor: color.grey['300'],
            }
          },
        },
        text: {
          padding: 0,
          fontFamily: tiemposText,
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: rem(14),
          lineHeight: rem(16),
          letterSpacing: rem(1.25),
          textTransform: 'uppercase',

          color: color.grey[900],

          minWidth: 'inherit',

          '& .MuiButton-endIcon': {
            marginLeft: rem(0)
          },

          '& .MuiButton-label': {
            paddingBottom: rem(6),
            borderBottom: `2px solid ${color.white}`
          },

          '&:hover': {
            backgroundColor: 'inherit',

            '& .MuiButton-label': {
              borderBottom: `2px solid ${color.grey[900]}`,
            },

            '& .MuiButton-label .MuiButton-endIcon': {
              paddingBottom: rem(6),
              marginBottom: '-8px',
              borderBottom: `2px solid ${color.white}`
            }
          },

          '&$disabled': {
            color: color.grey[300],
          },

          '&$textSecondary': {
            color: color.grey['100'],

            '& .MuiButton-label': {
              borderBottom: `2px solid ${color.grey['900']}`
            },

            '&:hover': {
              '& .MuiButton-label': {
                borderBottom: `2px solid ${color.grey['100']}`
              },
            }
          }
        }
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          marginRight: rem(8),

          fontFamily: apercu,
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: rem(14),
          lineHeight: rem(16),
          letterSpacing: rem(0.25),
          color: color.grey['800'],

          backgroundColor: color.lime['50'],
          borderWidth: 1.5,
          borderStyle: 'solid',
          borderColor: color.lime['300'],
        }
      }
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: rem(containerPaddingLeft),
          paddingRight: rem(containerPaddingRight),
        }
      }
    },

    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': [
            // Apercu
            apercuBold,
            apercuRegularItalic,
            apercuLight,
            apercuLightItalic,
            apercuRegular,

            // Tiempos
            tiemposTextRegular,
            tiemposTextRegularItalic,

            tiemposTextMedium,
            tiemposTextMediumItalic,

            tiemposTextSemibold,
            tiemposTextSemiboldItalic,

            tiemposTextBold,
            tiemposTextBoldItalic,
          ],
        },
        html: {
          scrollBehavior: 'smooth',
          // backgroundColor: 'red !important'
        },
        'html,body': {
          height: '100%',
          // backgroundColor: 'orange !important'
        },
        '#root': {
          height: '100%',
          // backgroundColor: 'green !important'
        },
        'ul': {  // todo, check if this section is still needed in mui5
          marginTop: 0,
          marginLeft: '0px',
          paddingLeft: '15px',
        },
      }
    },

    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: color.grey['200'],
        },
        barColorPrimary: {
          backgroundColor: color.grey['900'],
        }
      },
    },

    MuiLink: {
      defaultProps: {
        underline: 'hover'
      },
      styleOverrides: {
        root: {
          color: color.blue['500'],

          '&:hover': {
            color: color.blue['800']
          }
        }
      },
    },

    MuiInput: {
      styleOverrides: {
        underline: {
          // Indent the value of the text field
          paddingTop: rem(10),
          paddingBottom: rem(12),
          paddingLeft: rem(16),
          paddingRight: rem(16),


          // border of active state
          '&:after': {
            borderBottomColor: color.lime['500']
          },

          // border of hover state
          '&:hover:not(.Mui-disabled):before': {
            borderBottomColor: color.grey['900']
          },

          // border of inactive state
          '&:before': {
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: color.grey['200']
          },

          // disabled state
          '&$disabled': {
            color: color.grey['200'],

            '&:before': {
              borderBottomStyle: 'solid',
              borderBottomColor: color.grey['200']
            }
          },

          '&$error': {
            '& .MuiInputBase-input': {
              color: color.red['500']
            },
            '& .MuiInputAdornment-root': {
              color: color.red['500']
            }
          },

          '&$error:after': {
            borderBottomColor: color.red['500']
          }
        }
      }
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          paddingLeft: rem(16),
          paddingRight: rem(16),
          color: color.grey['900'],

          '&$disabled': {
            color: color.grey['200'],
          },

          '&$error': {
            color: color.red['500']
          }
        }
      }
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: rem(24), // this creates a vertical space between components
        }
      }
    },

    // MuiTypography: {
    //   styleOverrides: {
    //
    //   }
    // }
  },

  palette: {
    background: {
      default: color.white
    },
  },

  typography: {
    fontFamily: tiemposText,
    primaryH1: {
      fontWeight: 400,
      fontSize: rem(54),
      lineHeight: rem(88),
      letterSpacing: rem(0.5),
    },
    primaryH2: {
      fontWeight: 400,
      fontSize: rem(34),
      lineHeight: rem(56),
      letterSpacing: rem(0.25),
    },
    primaryH2Next: {
      fontWeight: 400,
      fontSize: rem(34),
      lineHeight: rem(56),
      letterSpacing: rem(0.25),

      // additional space
      marginTop: rem(56), // same as lineHeight
    },
    primaryH3: {
      fontWeight: 400,
      fontSize: rem(24),
      lineHeight: rem(32),
    },
    primaryH3Next: {
      fontWeight: 400,
      fontSize: rem(24),
      lineHeight: rem(32),

      // additional space
      marginTop: rem(32), // lineHeight
    },
    primaryH3Medium: {
      fontWeight: 500,
      fontSize: rem(24),
      lineHeight: rem(32),
      letterSpacing: rem(0.25),
    },
    primaryH3Semibold: {},
    primaryH4: {
      fontWeight: 500,
      fontSize: rem(16),
      lineHeight: rem(24),
      letterSpacing: rem(0.5)
    },
    primaryH4Next: {
      fontWeight: 500,
      fontSize: rem(16),
      lineHeight: rem(24),
      letterSpacing: rem(0.5),

      // additional space
      marginTop: rem(24), // lineHeight
    },
    primaryH4Semibold: {
      fontWeight: 600,
      fontSize: rem(16),
      lineHeight: rem(24),
      letterSpacing: rem(0.5)
    },
    primaryBody: {
      fontWeight: 400,
      fontSize: rem(16),
      lineHeight: rem(24),
      letterSpacing: rem(0.5),
    },
    primaryBodyNext: {
      // same as body
      fontWeight: 400,
      fontSize: rem(16),
      lineHeight: rem(24),
      letterSpacing: rem(0.5),

      // additional space
      marginTop: rem(24), // lineHeight
    },
    primaryBodySemibold: {},
    primarySubtitle: {
      fontWeight: 400,
      fontSize: rem(14),
      lineHeight: rem(16),
      letterSpacing: rem(0.25),
    },
    primarySubtitleNext: {
      fontWeight: 400,
      fontSize: rem(14),
      lineHeight: rem(16),
      letterSpacing: rem(0.25),

      marginTop: rem(16), // same as line height
    },
    primaryButtonText: {
      fontWeight: 400,
      fontSize: rem(14),
      lineHeight: rem(16),
      letterSpacing: rem(1.25),
      textTransform: 'uppercase'

    },
    primaryButtonTextBold: {},
    primaryButtonContained: {},
    primaryCaption: {},

    // Secondary: Apercu
    secondaryH3: {},
    secondaryBody: {},
    secondaryBodyLight: {},
    secondarySubtitle: {},
    secondaryCaption: {}
  }
});

export default themeMui;
