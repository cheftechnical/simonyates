import MyContainer from '../../../../styling/MyContainer/MyContainer';
import {Link as ReactRouterDom} from 'react-router-dom';
import Logo from '../../../../components/Logo';
import Menu from './Menu';
import {color} from '../../../../styling/Color/Color';
import rem from '../../../../styling/rem';
import CenterVertically from '../../../../components/CenterVertically/CenterVertically';
import {useCallback, useState} from "react";
import {Box, IconButton, Link, styled} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  selected?: string;
}

// @todo mui5
// const useStyles = makeStyles((themeMui) => ({
// 	root: {
// 		paddingTop: themeMui.spacing(48 / 8),
// 		paddingBottom: themeMui.spacing(24 / 8),
// 		position: 'fixed',
// 		backgroundColor: color.white,
// 		// border: '1px solid magenta',
// 		width: '100%',
// 		top: 0,
// 		zIndex: 999
// 	},
// 	selected: {
// 		paddingRight: themeMui.spacing((16-12) / 8),
// 		fontWeight: 'bold',
// 		fontSize: rem(14),
// 		lineHeight: rem(16),
// 		letterSpacing: rem(1.25),
// 		textTransform: 'uppercase',
// 	},
// 	box1: {
// 		// backgroundColor: 'magenta'
// 	},
// 	box2: {
// 		// backgroundColor: 'cyan'
// 	},
// 	box3: {
// 		// backgroundColor: 'lime'
// 	}
// }));

const StyledTypographySelected = styled(Box)(({theme}) => ({
  ...theme.typography.primaryBody,
  paddingRight: theme.spacing((16 - 12) / 8),
  fontWeight: 'bold',
  fontSize: rem(14),
  lineHeight: rem(16),
  letterSpacing: rem(1.25),
  textTransform: 'uppercase',
})) as typeof Box;

const StyledDivRoot = styled('div')(({theme}) => ({
  paddingTop: theme.spacing(48 / 8),
  paddingBottom: theme.spacing(24 / 8),
  position: 'fixed',
  backgroundColor: color.white,
  width: '100%',
  top: 0,
  zIndex: 999
}));

export default function ForMobile(props: Props) {
  // const classes = useStyles();
  const {selected} = props;

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleHideMenu = useCallback(() => {
    setIsMenuVisible(false);
  }, []);

  const handleShowMenu = useCallback(() => {
    setIsMenuVisible(true);
  }, []);


  return (
    <StyledDivRoot>
      <MyContainer>
        <Box display="flex" justifyContent="flex-end">
          {/* Left align */}
          <Box flexGrow={1}>
            <CenterVertically>
              <Link component={ReactRouterDom} to="/"><Logo
                brand="simon-yates"
                variant="default"
                width={149}
              /></Link>
            </CenterVertically>
          </Box>

          {/*	Right align */}
          <Box>
            <CenterVertically>
              {/*<StyledTypographySelected variant="primaryBody">*/}
              <StyledTypographySelected>
                {selected}[selected]
              </StyledTypographySelected>
            </CenterVertically>
          </Box>
          <Box>
            <CenterVertically>
              <IconButton aria-label="menu" onClick={handleShowMenu}>
                <MenuIcon/>
              </IconButton>
            </CenterVertically>
          </Box>
        </Box>
      </MyContainer>

      <Menu
        onClose={handleHideMenu}
        selected={selected}
        visible={isMenuVisible}
      />
    </StyledDivRoot>
  );
};
