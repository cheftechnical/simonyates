import rem from "../../../styling/rem";
import { Link, styled } from "@mui/material";
import color from "../../../styling/Color";
import { Section } from "../../../types/Section.ts";

type NavRightItemProps = {
  section: Section;
}

const StyledLi = styled("li")(({ theme }) => ({
  marginBottom: theme.spacing(24 / 8),
  paddingLeft: theme.spacing(8 / 8),

  color: color.grey["500"],

  borderLeft: `2px solid ${color.white}`,
}));

const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  lineHeight: rem(16),
  letterSpacing: rem(0.25),
  color: color.grey["500"],
  borderLeft: "none !important",

  "&:hover": {
    color: color.grey["900"],
  },
})) as typeof Link;

export default function NavRightItem(props: NavRightItemProps) {
  const { section } = props;

  return (
    <StyledLi data-to-scrollspy-id={section.id}>
      <StyledLink href={`#${section.id}`}>{section.title}</StyledLink>
    </StyledLi>
  );
}
