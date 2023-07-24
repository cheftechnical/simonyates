import {css} from '@emotion/react';

// import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import './index.css';
// import classNames from 'classnames';
import Typography3 from '../../../../../components/Typography3/Typography3';
import {color} from '../../../../../styling/Color/Color';
import rem from '../../../../../styling/rem';
import {styled} from "@mui/material";
import {useMemo} from "react";
import {render} from "@testing-library/react";

enum Variant {
  FadeIn = 'fadeIn',
  SlideIn = 'slideIn',
  Center = 'center',
}

export interface Props {
  /**
   * The key of the selected nav item
   */
  selected?: string;
  /**
   * The underline animation
   */
  variant?: Variant.FadeIn | Variant.SlideIn | Variant.Center;
}

const nMilliseconds = '150ms';

// @todo mui5
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//
//     ul: {
//       listStyle: 'none',
//       margin: '0',
//       padding: '0',
//
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'center',
//     },
//
//     li: {
//       // margin: '0 2rem',
//       marginLeft: theme.spacing(3), // controls the spacing between each menu item
//     },
//
//     liFadeIn: {},
//
//     liSlideIn: {
//       // slide in
//       '& a': {
//         overflow: 'hidden',
//       },
//
//       '& a::after': {
//         opacity: '1',
//
//         // A weird glitch with Chrome will cause 1px to remain visible after the animation, but if you set the reset
//         // to `-110%`,it will hide it
//         transform: 'translate3d(-105%, 0, 0)',
//       },
//
//       '& a:hover::after, & a:focus::after': {
//         transform: 'translate3d(0, 0, 0)',
//       }
//     },
//
//     liCenter: {
//       '& a::after': {
//         opacity: '1',
//         transform: 'scale(0)',
//         transformOrigin: 'center',
//       },
//
//       '& a:hover::after, & a:focus::after': {
//         transform: 'scale(1)',
//       },
//     },
//
//     a: {
//       color: 'inherit',
//       textDecoration: 'none',
//
//       display: 'block',
//       position: 'relative',
//       // padding: '0.2em 0;',
//       // padding: '10px 0', // Sets the distance the underline has from the text
//       paddingTop: rem(6),
//       paddingBottom: rem(6),
//
//       // FadeIn in
//       '&::after': {
//         content: '""',
//         position: 'absolute',
//         bottom: '0',
//         left: '0',
//         width: '100%',
//         // height: '0.1em',
//         height: rem(2), // Sets the thickness of the underline
//         backgroundColor: color.grey[900],
//         opacity: '0',
//         transition: `opacity ${nMilliseconds}, transform ${nMilliseconds}`,
//       },
//
//       '&:hover::after, &:focus::after': {
//         opacity: '1',
//         transform: 'translate3d(0, 0.2em, 0)',
//       }
//     },
//
//     aFadeIn: {}
//   })
// );

const StyledLi = styled('li')(({theme}) => ({
  // margin: '0 2rem',
  marginLeft: theme.spacing(3), // controls the spacing between each menu item
}));

const StyledLiFadeIn = styled(StyledLi)(({theme}) => ({
  // do nothing
}));

const StyledLiSlideIn = styled(StyledLi)(({theme}) => ({
  // slide in
  '& a': {
    overflow: 'hidden',
  },

  '& a::after': {
    opacity: '1',

    // A weird glitch with Chrome will cause 1px to remain visible after the animation, but if you set the reset
    // to `-110%`,it will hide it
    transform: 'translate3d(-105%, 0, 0)',
  },

  '& a:hover::after, & a:focus::after': {
    transform: 'translate3d(0, 0, 0)',
  }
}));

const StyledLiCenter = styled(StyledLi)(({theme}) => ({
  '& a::after': {
    opacity: '1',
    transform: 'scale(0)',
    transformOrigin: 'center',
  },

  '& a:hover::after, & a:focus::after': {
    transform: 'scale(1)',
  },
}));

const StyledUl = styled('ul')(({theme}) => ({
  listStyle: 'none',
  margin: '0',
  padding: '0',

  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}))

const StyledA = styled('a')(({theme}) => ({
  color: 'inherit',
  textDecoration: 'none',

  display: 'block',
  position: 'relative',
  // padding: '0.2em 0;',
  // padding: '10px 0', // Sets the distance the underline has from the text
  paddingTop: rem(6),
  paddingBottom: rem(6),

  // FadeIn in
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    // height: '0.1em',
    height: rem(2), // Sets the thickness of the underline
    backgroundColor: color.grey[900],
    opacity: '0',
    transition: `opacity ${nMilliseconds}, transform ${nMilliseconds}`,
  },

  '&:hover::after, &:focus::after': {
    opacity: '1',
    transform: 'translate3d(0, 0.2em, 0)',
  }
}));

const StyledAFadeIn = styled(StyledA)(({theme}) => ({}));

export function MenuItems(props: Props) {
  // const classes = useStyles();
  const {selected, variant = Variant.SlideIn} = props;

  // const liClassName = classNames([classes.li], {
  //   [classes.liFadeIn]: variant === Variant.FadeIn,
  //   [classes.liSlideIn]: variant === Variant.SlideIn,
  //   [classes.liCenter]: variant === Variant.Center,
  // });

  // const aClassName = classNames([classes.a], {
  //   [classes.aFadeIn]: variant === Variant.FadeIn,
  // });

  const MyLi = useMemo(() => {
    switch (variant) {
      case Variant.Center:
        return StyledLiCenter;
      case Variant.FadeIn:
        return StyledLiFadeIn;
      case Variant.SlideIn:
        return StyledLiSlideIn;
      default:
        throw new Error(`"${variant}" is not a valid variant for "MenuItems"`);
    }
  }, [variant]);

  const MyStyledA = (variant === Variant.FadeIn)
    ? StyledAFadeIn
    : StyledA;

  return (
    <div role="navigation">
      <StyledUl>
        <MyLi>
          <Typography3
            component="div"
            group="primary"
            variant="button"
            weight={selected === 'work' ? 'bold' : 'regular'}
          >
            <MyStyledA href="/work">Work</MyStyledA>
          </Typography3>
        </MyLi>
        <MyLi>
          <Typography3
            component="div"
            group="primary"
            variant="button"
            weight={selected === 'featured' ? 'bold' : 'regular'}
          >
            <MyStyledA href="/featured">Featured</MyStyledA>
          </Typography3>
        </MyLi>
        <MyLi>
          <Typography3
            component="div"
            group="primary"
            variant="button"
            weight={selected === 'about' ? 'bold' : 'regular'}
          >
            <MyStyledA href="/about">About</MyStyledA>
          </Typography3>
        </MyLi>
        <MyLi>
          <Typography3
            component="div"
            group="primary"
            variant="button"
            weight={selected === 'contact' ? 'bold' : 'regular'}
          >
            <MyStyledA href="/contact">Contact</MyStyledA>
          </Typography3>
        </MyLi>
      </StyledUl>
    </div>
  );
}

export default MenuItems;