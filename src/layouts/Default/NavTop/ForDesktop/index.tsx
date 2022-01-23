import {Box, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link as ReactRouterDom} from 'react-router-dom';
import Logo from '../../../../components/Logo';
import {color} from '../../../../styling/Color';
import MyContainer from '../../../../styling/MyContainer';
import Item from './Item';
import MenuItems from './MenuItems';

interface Props {
  /**
   * The key of the selected nav item
   */
  selected?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: color.white,
    paddingTop: theme.spacing(48 / 8),
    paddingBottom: theme.spacing(24 / 8),
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 999,
  }
}));

export default function ForDesktop(props: Props) {
  const classes = useStyles();
  const {selected} = props;

  return (
    <div className={classes.root}>
      <MyContainer>
        <Box display="flex" justifyContent="flex-end">
          {/* Left align */}
          <Box flexGrow={1}>
            <Link component={ReactRouterDom} to="/"><Logo
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
    </div>
  );
};