import rem from "../../styling/rem";
import { color } from "../../styling/Color/Color";
import { ReactNode } from "react";
import { Box, styled, Typography } from "@mui/material";

export interface Props {
  /**
   * The content of the callout.
   */
  children?: ReactNode;
  /**
   * If `true`, additional top padding is applied. This should be used when multiple instances of the same component
   * are used in series.
   */
  next?: boolean;
  /**
   * If provided, this is the source of the quote
   */
  source?: string;
}

// @todo mui5
// const useStyles = makeStyles((themeMui) => ({
//   rootNext: {
//     paddingTop: themeMui.spacing(48 / 8),
//   },
//   boxQuote: {
//     paddingRight: themeMui.spacing(8 / 8),
//     fontFamily: `"Times New Roman"`,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     fontSize: rem(64),
//     lineHeight: '100%',
//     color: color.lime['500'],
//   },
//   boxContent: {
//     paddingTop: themeMui.spacing(12 / 8),
//   },
//   blockquote: {
//     margin: 0,
//     padding: 0,
//   },
//   blockquoteTypography: {
//     color: color.grey['800']
//   },
//   footer: {
//     paddingTop: themeMui.spacing(16 / 8),
//   },
//   footerTypography: {
//     color: color.grey['600']
//   },
//   span: {
//     fontFamily: `"Times New Roman"`,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     color: color.lime['500'],
//   },
// }));

const StyledBlockquote = styled("blockquote")(() => ({
  margin: 0,
  padding: 0,
}));

const StyledBlockquoteTypography = styled(Typography)(() => ({
  color: color.grey["800"],
})) as typeof Typography;

const StyledBoxQuote = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(8 / 8),
  fontFamily: `"Times New Roman"`,
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: rem(64),
  lineHeight: "100%",
  color: color.lime["500"],
}));

const StyledBoxContent = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(12 / 8),
}));

const StyledFooter = styled("footer")(({ theme }) => ({
  paddingTop: theme.spacing(16 / 8),
}));

const StyledTypographyFooter = styled(Typography)(() => ({
  color: color.grey["600"],
})) as typeof Typography;

const StyledSpan = styled("span")(() => ({
  fontFamily: `"Times New Roman"`,
  fontStyle: "normal",
  fontWeight: "normal",
  color: color.lime["500"],
}));

export default function Quote(props: Props) {
  // const classes = useStyles();
  const { children, next, source } = props;

  // const rootClassName = classNames(
  //   {[classes.rootNext]: next}
  // );

  const renderedEndQuote = <StyledSpan>&rdquo;</StyledSpan>;

  const renderedSource = source ? (
    <StyledFooter>
      <StyledTypographyFooter variant="primarySubtitle">
        {source}
      </StyledTypographyFooter>
    </StyledFooter>
  ) : (
    ""
  );

  return (
    <Box
      display="flex"
      sx={{ paddingTop: (theme) => (next ? theme.spacing(48 / 8) : 0) }}
    >
      <StyledBoxQuote>&ldquo;</StyledBoxQuote>
      <StyledBoxContent flexGrow={1}>
        <StyledBlockquote cite={source}>
          <StyledBlockquoteTypography
            component="blockquote"
            variant="secondaryBodyLight"
          >
            {children}
            {renderedEndQuote}
          </StyledBlockquoteTypography>
          {renderedSource}
        </StyledBlockquote>
      </StyledBoxContent>
    </Box>
  );
}
