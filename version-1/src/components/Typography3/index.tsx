import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import classNames from 'classnames';
import {ReactNode, useMemo} from 'react';
import {fontFamilyTiemposText} from './fontFamilies';
import rem from '../../styling/rem';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

/**
 * This is version 3.0 of my Typography component
 *
 * @param props
 * @constructor
 */
export function Typography3(props: Props) {
  const classes = useStyles();
  const {children, component = ComponentIs.p, group, variant, weight} = props;

  const renderedComponent = useMemo(() => {
    const className = classNames({
      // Groups
      [classes.groupPrimary]: group === 'primary',

      // Variants
      [classes.variantButton]: variant === 'button',

      // Weights
      [classes.weightBold]: weight === 'bold',
      [classes.weightRegular]: weight === 'regular',
    });

    switch (component) {
      case ComponentIs.div:
        return <div className={className}>{children}</div>;
      case ComponentIs.p:
        return <p className={className}>{children}</p>;
      default:
        throw new Error('Component not supported');
    }
  }, [classes, children, component, group, variant, weight]);

  return <>{renderedComponent}</>;
}

export default Typography3;