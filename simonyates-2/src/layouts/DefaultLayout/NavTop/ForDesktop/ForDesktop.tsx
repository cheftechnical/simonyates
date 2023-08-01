import {Link as ReactRouterDomLink} from 'react-router-dom';
import Logo from '../../../../components/Logo';
import {color} from '../../../../styling/Color/Color';
import MyContainer from '../../../../styling/MyContainer/MyContainer';
import MenuItems from './MenuItems/MenuItems';
import {Box, Link, styled} from "@mui/material";

interface Props {
  /**
   * The key of the selected nav item
   */
  selected?: string;
}

// @todo mui5
// const useStyles = makeStyles((themeMui) => ({
//   root: {
//     backgroundColor: color.white,
//     paddingTop: themeMui.spacing(48 / 8),
//     paddingBottom: themeMui.spacing(24 / 8),
//     position: 'fixed',
//     top: 0,
//     width: '100%',
//     zIndex: 999,
//   }
// }));

const StyledDivRoot = styled('div')(({theme}) => ({
    backgroundColor: color.white,
    paddingTop: theme.spacing(48 / 8),
    paddingBottom: theme.spacing(24 / 8),
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 999,
}));

export default function ForDesktop(props: Props) {
  // const classes = useStyles();
  const {selected} = props;

  return (
    <StyledDivRoot sx={{opacity: 0.1}}>
      <MyContainer>
        <Box display="flex" justifyContent="flex-end">
          {/* Left align */}
          <Box flexGrow={1}>
            <Link component={ReactRouterDomLink} to="/"><Logo
              brand="simon-yates"
              variant="default"
              width={149}
            /></Link>
          </Box>

          {/* Right align */}
          {/*<Box><Item href="/work" selected={selected === 'work'} title="Work"/></Box>*/}
          {/*<Box><Item href="/featured" selected={selected === 'featured'} title="Featured"/></Box>*/}
          {/*<Box><Item href="/about" selected={selected === 'about'} title="About"/></Box>*/}
          {/*<Box><Item href="/contact" selected={selected === 'contact'} title="Contact"/></Box>*/}
          <Box><MenuItems selected={selected}/></Box>
        </Box>
      </MyContainer>
    </StyledDivRoot>
  );
};