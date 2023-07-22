import {createStyles, makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color/Color';

/**
 * This component creates a hidden link that allows a screen reader to skip
 * the navigation and go right to the main content.
 *
 * IMPORTANT: Do not use `display=hidden`. The HTMl needs to be visible but unseen --
 * if that makes sense.
 *
 * This code is a direct copy/paste React adaptation of the example provided by
 * Deque University.
 *
 * @source: https://dequeuniversity.com/class/semantic-structure/within-pages/skip-navigation
 */
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      border: 0,
      clip: 'rect(0 0 0 0)', // disable this line if you want to debug
      heightWidth: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 0,
      whiteSpace: 'nowrap',
      width: 1, // disable this line if you want to debug
    },

    a: {
      '&:focus': {
        clip: 'auto',
        height: 'auto',
        left: 0,
        margin: 0,
        padding: '10px 0',
        top: 0,
        width: '100%',

        /**
         * The original source code included a styled background and border
         * but I removed that from my implementation
         */
        // background: '#fdf6e7',
        // border: '2px solid #990000',
        // borderWidth: 2,
        // borderStyle: 'solid',
        // borderColor: color.red[500],
        border: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        textAlign: 'center',
        fontWeight: 'bold',

        /**
         * The original source code specified a custom red color for the
         * focus event. I have changed this to use an on-brand shade of red.
         */
        // color: '#990000',
        color: color.red[500],
      }
    }
  }),
);

export interface Props {
  /**
   * The id of the main content which this component references
   */
  mainId: string;
}

export default function SkipNav(props: Props) {
  const classes = useStyles();
  const {mainId} = props;

  return (
    <div className={classes.root}><a className={classes.a} href={`#${mainId}`}>Skip navigation</a></div>
  );
}
