import { Box, styled } from "@mui/material";
import color from "../../../../../styling/Color";
import rem from "../../../../../styling/rem";
import { NavLink } from "react-router-dom";

interface Props {
  /**
   * The URL of the navigation link
   */
  href: string;
  /**
   * Callback raised when the user clicks on a menu item
   */
  onClick: () => void;
  /**
   * The label
   */
  title: string;
}

const StyledNavLink = styled(NavLink)(() => ({
  color: color.grey[100],
  textDecoration: "none",
  fontWeight: "normal",
  fontSize: rem(24),
  lineHeight: rem(32),

  "&.active": {
    fontWeight: "bold",
  },
}));

export default function MenuItem(props: Props) {
  const { href, onClick, title } = props;

  return (
    <Box pt={3}>
      <StyledNavLink color="secondary" onClick={onClick} to={href}>
        {title}
      </StyledNavLink>
    </Box>
  );
}
