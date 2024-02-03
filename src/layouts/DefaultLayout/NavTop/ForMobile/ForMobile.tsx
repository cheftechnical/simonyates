import MyContainer from "../../../../styling/MyContainer/MyContainer";
import { Link as ReactRouterDomLink, useMatches } from "react-router-dom";
import Logo from "../../../../components/Logo";
import Menu from "./Menu";
import { color } from "../../../../styling/Color/Color";
import rem from "../../../../styling/rem";
import CenterVertically from "../../../../components/CenterVertically/CenterVertically";
import { ReactNode, useCallback, useMemo, useState } from "react";
import { Box, IconButton, Link, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const StyledTypographySelected = styled(Box)(({ theme }) => ({
  ...theme.typography.primaryBody,
  paddingRight: theme.spacing((16 - 12) / 8),
  fontWeight: "bold",
  fontSize: rem(14),
  lineHeight: rem(16),
  letterSpacing: rem(1.25),
  textTransform: "uppercase",

  "& a": {
    color: "inherit",
  },
})) as typeof Box;

const StyledDivRoot = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(48 / 8),
  paddingBottom: theme.spacing(24 / 8),
  position: "fixed",
  backgroundColor: color.white,
  width: "100%",
  top: 0,
  zIndex: 999,
}));

interface CustomHandles {
  breadcrumb?: ReactNode;
}

export default function ForMobile() {
  const matches = useMatches();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleHideMenu = useCallback(() => {
    setIsMenuVisible(false);
  }, []);

  const handleShowMenu = useCallback(() => {
    setIsMenuVisible(true);
  }, []);

  const selected = useMemo(() => {
    if (matches && matches[1] && matches[1].handle) {
      const handle = matches[1].handle as CustomHandles;

      if (handle.breadcrumb) {
        return <div>{handle.breadcrumb}</div>;
      }
    }

    return <></>;
  }, [matches]);

  return (
    <StyledDivRoot>
      <MyContainer>
        <Box display="flex" justifyContent="flex-end">
          {/* Left align */}
          <Box flexGrow={1}>
            <CenterVertically>
              <Link component={ReactRouterDomLink} to="/">
                <Logo brand="simon-yates" variant="default" width={149} />
              </Link>
            </CenterVertically>
          </Box>

          {/*	Right align */}
          <Box>
            <CenterVertically>
              <StyledTypographySelected>{selected}</StyledTypographySelected>
            </CenterVertically>
          </Box>
          <Box>
            <CenterVertically>
              <IconButton aria-label="menu" onClick={handleShowMenu}>
                <MenuIcon />
              </IconButton>
            </CenterVertically>
          </Box>
        </Box>
      </MyContainer>

      <Menu onClose={handleHideMenu} visible={isMenuVisible} />
    </StyledDivRoot>
  );
}
