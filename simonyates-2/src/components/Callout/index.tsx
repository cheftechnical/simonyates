import {ReactNode, useMemo} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color/Color';
import Typography from '../../styling/Typography/Typography';
import classNames from 'classnames';

export interface Props {
  /**
   * The content of the callout.
   */
  children?: ReactNode;
  /**
   * Component class name
   */
  className?: string;
  /**
   * If you pass a an array to the component, it will automatically delimit the list with a bullet
   */
  list?: string[];
  /**
   * If `true`, the component will not have any gutter space at the bottom of the component
   */
  noBottomGutter?: boolean;
  /**
   * The variant to use.
   */
  variant?: 'default' | 'alert';
}

const defaultProps = {
  noBottomGutter: false,
  variant: 'default'
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(24 / 8),
    marginBottom: theme.spacing(24 / 8),
    padding: theme.spacing(8 / 8),
    backgroundColor: color.limeWithOpacity['500']['10%'],
    textAlign: 'center',
  },
  typography: {
    color: color.grey['700'],
  },
  alert: {
    color: color.red['400'],
  },
  noBottomGutter: {
    marginBottom: 0,
  }
}));

interface DelimiterProps {
  index: number;
  length: number;
}


/**
 * This Delimiter component will add a bullet between items.
 *
 * The component defends against orphans.
 *
 * @param props
 * @constructor
 */
function Delimiter(props: DelimiterProps) {
  const {index, length} = props;

  // Don't append a delimiter to the last item
  if (index === length - 1) {
    return (
      <></>
    );
  }

  // Prevent orphan of 2nd-last item
  if (index === length - 2) {
    return (
      <>&nbsp;&bull;&nbsp;</>
    );
  }

  // Render all other items normally
  return (
    <span> &bull; </span>
  );
}


/**
 * Main callout component
 *
 * @param props
 * @constructor
 */
export default function Callout(props: Props) {
  const classes = useStyles();
  const {children, className, list, noBottomGutter, variant} = {...defaultProps, ...props};

  const content = useMemo(() => {
    if (!list) return children;

    return list.map((item, index) => (
      <span key={index}>
        {item}<Delimiter index={index} length={list.length}/>
      </span>
    ));

  }, [children, list]);

  const rootClassName = classNames([
    classes.root,
    {[classes.noBottomGutter]: noBottomGutter},
    className
  ]);

  // const typographyClassName = (variant === 'alert')
  //   ? `${classes.typography} ${classes.alert}`
  //   : classes.typography;

  const typographyClassName = classNames([
    {[classes.alert]: variant === 'alert'},
    {[classes.typography]: variant !== 'alert'},
  ]);

  return (
    <div className={rootClassName}>
      <Typography className={typographyClassName} group="secondary" variant="body" weight="regular">
        {content}
      </Typography>
    </div>
  );
};
