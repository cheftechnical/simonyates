import {ReactNode, useMemo} from 'react';
import {color} from '../../styling/Color/Color';
import {styled, Typography} from "@mui/material";

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

const StyledDivRoot = styled('div')(({theme}) => ({
  marginTop: theme.spacing(24 / 8),
  marginBottom: theme.spacing(24 / 8),
  padding: theme.spacing(8 / 8),
  backgroundColor: color.limeWithOpacity['500']['10%'],
  textAlign: 'center',
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
  // const classes = useStyles();
  const {children, list, noBottomGutter, variant} = {...defaultProps, ...props};

  const content = useMemo(() => {
    if (!list) return children;

    return list.map((item, index) => (
      <span key={index}>
        {item}<Delimiter index={index} length={list.length}/>
      </span>
    ));

  }, [children, list]);

  return (
    <StyledDivRoot sx={{marginBottom: noBottomGutter ? 0 : ''}}>
      <Typography sx={{color: variant === 'alert' ? color.red['400'] : color.grey['700']}} variant="secondaryBody">
        {content}
      </Typography>
    </StyledDivRoot>
  );
};
