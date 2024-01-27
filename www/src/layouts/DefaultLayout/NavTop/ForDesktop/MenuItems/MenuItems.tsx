import './index.css';
import {color} from '../../../../../styling/Color/Color';
import rem from '../../../../../styling/rem';
import {styled, Typography} from "@mui/material";
import {useMemo} from "react";
import {NavLink} from 'react-router-dom';

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

const StyledLi = styled('li')(({theme}) => ({
  // margin: '0 2rem',
  marginLeft: theme.spacing(3), // controls the spacing between each menu item
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

const StyledUl = styled('ul')(({theme}) => ({
  listStyle: 'none',
  margin: '0',
  padding: '0',

  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}))

const StyledReactRouterDomLink = styled(NavLink)(({theme}) => ({
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
  },

  '&.active': {
    fontWeight: 'bold',
  }
}));

const StyledReactRouterDomLinkFadeIn = styled(StyledReactRouterDomLink)(({theme}) => ({}));

export function MenuItems(props: Props) {
  const {selected, variant = Variant.SlideIn} = props;

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

  const MyStyledReactRouterDomLink = (variant === Variant.FadeIn)
    ? StyledReactRouterDomLinkFadeIn
    : StyledReactRouterDomLink;

  return (
    <div role="navigation">
      <StyledUl>
        <MyLi>
          <Typography
            fontWeight={selected === 'work' ? 'bold' : 'regular'}
            variant="primaryButtonText"
          >
            <MyStyledReactRouterDomLink to="/work">Work</MyStyledReactRouterDomLink>
          </Typography>
        </MyLi>
        <MyLi>
          <Typography
            fontWeight={selected === 'featured' ? 'bold' : 'regular'}
            variant="primaryButtonText"
          >
            <MyStyledReactRouterDomLink to="/featured">Featured</MyStyledReactRouterDomLink>
          </Typography>
        </MyLi>
        <MyLi>
          <Typography
            fontWeight={selected === 'about' ? 'bold' : 'regular'}
            variant="primaryButtonText"
          >
            <MyStyledReactRouterDomLink to="/about">About</MyStyledReactRouterDomLink>
          </Typography>
        </MyLi>
        {/* <MyLi>
          <Typography
            fontWeight={selected === 'contact' ? 'bold' : 'regular'}
            variant="primaryButtonText"
          >
            <MyStyledReactRouterDomLink to="/contact">Contact</MyStyledReactRouterDomLink>
          </Typography>
        </MyLi> */}
      </StyledUl>
    </div>
  );
}

export default MenuItems;