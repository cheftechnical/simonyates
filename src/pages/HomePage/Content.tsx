/**
 * This component will render the welcome text and consider widows/orphans at various viewport sizes.
 */
// import Typography from '../../styling/Typography/Typography';
import CenterVertically from "../../components/CenterVertically/CenterVertically";
import { Hidden, Typography } from "@mui/material";

export default function Content() {
  return (
    <CenterVertically>
      <Typography component="h1" variant="primaryH1">
        <Hidden only={[/*'xs',*/ "sm", "md", "lg", "xl"]}>
          Hi, I&rsquo;m Simon&nbsp;Yates.
          <br />I couldn&rsquo;t fit everything into LinkedIn, so I made
          a&nbsp;website.
          {/*[a]*/}
        </Hidden>

        <Hidden only={["xs", /*'sm',*/ "md", "lg", "xl"]}>
          Hi, I&rsquo;m Simon Yates.
          <br />I couldn&rsquo;t fit everything into LinkedIn,
          so&nbsp;I&nbsp;made&nbsp;a&nbsp;website.
          {/*[b]*/}
        </Hidden>

        <Hidden only={["xs", "sm", /*'md',*/ "lg", "xl"]}>
          Hi, I&rsquo;m Simon Yates.
          <br />I couldn&rsquo;t fit everything into LinkedIn, so&nbsp;I made
          a&nbsp;website.
          {/*[c]*/}
        </Hidden>

        <Hidden only={["xs", "sm", "md" /*'lg', 'xl'*/]}>
          Hi, I&rsquo;m Simon Yates.
          <br />
          I couldn&rsquo;t fit everything into&nbsp;LinkedIn,
          <br />
          so I made a&nbsp;website.
          {/*[d]*/}
        </Hidden>
      </Typography>
    </CenterVertically>
  );
}
