// import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
// import classNames from 'classnames';
import {ReactNode, useMemo} from 'react';
import {fontFamilyTiemposText} from './fontFamilies';
import rem from '../../styling/rem';
import {styled} from "@mui/material";
import {css} from '@emotion/react';

export enum ComponentIs {
  div = 'div',
  p = 'p',
}

export interface Props {
  children: ReactNode;
  className?: string;
  component?: 'div' | 'p';
  group: 'primary';
  variant: 'button';
  weight: 'bold' | 'regular';
}

// @todo mui5
// const useStyles = makeStyles((themeMui: Theme) =>
//   createStyles({
//     groupPrimary: {
//       fontFamily: fontFamilyTiemposText,
//       fontStyle: 'normal',
//     },
//     variantButton: {
//       fontSize: rem(14),
//       lineHeight: rem(16),
//       letterSpacing: rem(1.25),
//       textTransform: 'uppercase',
//     },
//
//     // Weights
//     weightBold: {
//       fontWeight: 'bold',
//     },
//     weightRegular: {
//       fontWeight: 'normal',
//     }
//   })
// );

// const StyledDiv = styled('div')(({themeMui}) => ({
//
// }));

const styles = {
  groupPrimary: {
    fontFamily: fontFamilyTiemposText,
    fontStyle: 'normal',
  },
  variantButton: {
    fontSize: rem(14),
    lineHeight: rem(16),
    letterSpacing: rem(1.25),
    textTransform: 'uppercase',
  },

  // Weights
  weightBold: {
    fontWeight: 'bold',
  },
  weightRegular: {
    fontWeight: 'normal',
  }
}

/**
 * This is version 3.0 of my Typography component
 *
 * @param props
 * @constructor
 */
export function Typography3(props: Props) {
  // const classes = useStyles();
  const {children, component = ComponentIs.p, group, variant, weight} = props;

  let myStyles = {};

  if (group === 'primary') {
    myStyles = {...myStyles, ...styles.groupPrimary}
  }

  if (variant === 'button') {
    myStyles = {...myStyles, ...styles.variantButton}
  }

  switch (weight) {
    case 'bold':
      myStyles = {...myStyles, ...styles.weightBold};
      break;
    case 'regular':
      myStyles = {...myStyles, ...styles.weightRegular};
      break;
  }

  // const renderedComponent = useMemo(() => {
  //   const className = classNames({
  //     // Groups
  //     [classes.groupPrimary]: group === 'primary',
  //
  //     // Variants
  //     [classes.variantButton]: variant === 'button',
  //
  //     // Weights
  //     [classes.weightBold]: weight === 'bold',
  //     [classes.weightRegular]: weight === 'regular',
  //   });
  //
  //   switch (component) {
  //     case ComponentIs.div:
  //       return <div className={className}>{children}</div>;
  //     case ComponentIs.p:
  //       return <p className={className}>{children}</p>;
  //     default:
  //       throw new Error('Component not supported');
  //   }
  // }, [classes, children, component, group, variant, weight]);
  //
  // return <>{renderedComponent}</>;

  switch (component) {
    case ComponentIs.div:
      return <div css={myStyles}>{children}</div>;
    case ComponentIs.p:
      return <p css={myStyles}>{children}</p>;
    default:
      throw new Error(`group="${group}" is not a valid property for Typography3`);
  }
}

export default Typography3;