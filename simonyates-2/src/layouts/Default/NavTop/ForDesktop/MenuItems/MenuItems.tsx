// import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import './index.css';
// import classNames from 'classnames';
import Typography3 from '../../../../../components/Typography3/Typography3';
import {color} from '../../../../../styling/Color/Color';
import rem from '../../../../../styling/rem';

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

  // return (
  //   <div role="navigation">
  //     <ul className={classes.ul}>
  //       <li className={liClassName}>
  //         <Typography3 component="div" group="primary" variant="button" weight={selected === 'work' ? 'bold' : 'regular'}>
  //           <a className={aClassName} href="/work">Work</a>
  //         </Typography3>
  //       </li>
  //       <li className={liClassName}>
  //         <Typography3 component="div" group="primary" variant="button" weight={selected === 'featured' ? 'bold' : 'regular'}>
  //           <a className={aClassName} href="/featured">Featured</a>
  //         </Typography3>
  //       </li>
  //       <li className={liClassName}>
  //         <Typography3 component="div" group="primary" variant="button" weight={selected === 'about' ? 'bold' : 'regular'}>
  //           <a className={aClassName} href="/about">About</a>
  //         </Typography3>
  //       </li>
  //       <li className={liClassName}>
  //         <Typography3 component="div" group="primary" variant="button" weight={selected === 'contact' ? 'bold' : 'regular'}>
  //           <a className={aClassName} href="/contact">Contact</a>
  //         </Typography3>
  //       </li>
  //     </ul>
  //   </div>
  // );

  // @todo mui5
  return (
      <div>[MenuItems]</div>
  )
}

export default MenuItems;