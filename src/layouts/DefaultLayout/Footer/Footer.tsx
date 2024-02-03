import { Link as ReactRouterDomLink } from "react-router-dom";
import Logo from "../../../components/Logo";
import { color } from "../../../styling/Color/Color";
import MyContainer from "../../../styling/MyContainer/MyContainer";
import rem from "../../../styling/rem";
import { Grid, Link, styled, Typography } from "@mui/material";

// const useStyles = makeStyles((themeMui) => ({
// 	root: {
// 		paddingTop: themeMui.spacing(32 / 8),
// 		paddingBottom: themeMui.spacing(24 / 8),
// 		backgroundColor: color.grey['900']
// 	},
// 	gridItemLogo: {
// 		padding: 0,
// 	},
// 	gridItemLeft: {
// 		paddingTop: themeMui.spacing(16/8),
// 	},
// 	gridItemRight: {
// 		textAlign: 'right'
// 	},
// 	typography: {
// 		color: color.grey['400']
// 	},
// 	socialIcon: {
// 		marginLeft: rem(24),
// 	},
// }));

const StyledGridItemLeft = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(16 / 8),
}));

const StyledDivRoot = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(32 / 8),
  paddingBottom: theme.spacing(24 / 8),
  backgroundColor: color.grey["900"],
}));

const StyledGridItemLogo = styled(Grid)(() => ({
  padding: 0,
}));

const StyledGridItemRight = styled(Grid)(() => ({
  textAlign: "right",
}));

const StyledLink = styled(Link)(() => ({
  color: color.grey["400"],
})) as typeof Link;

const StyledLinkSocialIcon = styled(Link)(() => ({
  marginLeft: rem(24),
}));

const StyledTypography = styled(Typography)(() => ({
  color: color.grey["400"],
})) as typeof Typography;

export default function Footer() {
  // const classes = useStyles();

  return (
    <StyledDivRoot aria-label="Site Directory" role="navigation">
      <MyContainer>
        <Grid container spacing={0}>
          <StyledGridItemLogo item xs={12}>
            <Link component={ReactRouterDomLink} to="/">
              <Logo brand="simon-yates" variant="grey-100" width={128} />
            </Link>
          </StyledGridItemLogo>
        </Grid>

        <Grid container spacing={0}>
          <StyledGridItemLeft item xs={6}>
            <StyledTypography variant="secondaryCaption">
              &copy; 2024 Sybaris Analytics Corporation
              <br />
            </StyledTypography>
            <StyledTypography variant="secondaryCaption">
              {/* @todo mui5 */}
              <StyledLink component={ReactRouterDomLink} to="/legal">
                Legal
              </StyledLink>
            </StyledTypography>
          </StyledGridItemLeft>
          <StyledGridItemRight item xs={6}>
            <StyledLinkSocialIcon
              rel="noopener"
              title="Find me on LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/simonyates/"
            >
              <Logo brand="linkedin" variant="grey-300" width={24} />
            </StyledLinkSocialIcon>

            <StyledLinkSocialIcon
              rel="noopener"
              title="Follow me on Twitter"
              target="_blank"
              href="https://twitter.com/cheftechnical"
            >
              <Logo brand="twitter" variant="grey-300" width={24} />
            </StyledLinkSocialIcon>
          </StyledGridItemRight>
        </Grid>
      </MyContainer>
    </StyledDivRoot>
  );
}
