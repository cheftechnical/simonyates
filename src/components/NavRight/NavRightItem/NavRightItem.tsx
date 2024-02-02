// import {makeStyles} from '@material-ui/core/styles';
// import {color} from '../../../styling/Color/Color';
import rem from '../../../styling/rem';
import {Link, styled} from "@mui/material";
import color from "../../../styling/Color";

// NOTE: scrollspy injects a className into this object
interface Props {
  /**
   * Unique anchor id
   */
  id?: string;
  /**
   * (Optional) class name
   */
  className?: any;
  /**
   * Display name of the link
   */
  name: string;
}

// @todo mui5
// const useStyles = makeStyles((themeMui) => ({
//   li: {
//     marginBottom: themeMui.spacing(24 / 8),
//     paddingLeft: themeMui.spacing(8 / 8),
//
//     color: color.grey['500'],
//
//     borderLeft: `2px solid ${color.white}`,
//   },
//   a: {
//     textDecoration: 'none',
//     lineHeight: rem(16),
//     letterSpacing: rem(0.25),
//     color: color.grey['500'],
//     borderLeft: 'none !important',
//
//     '&:hover': {
//       color: color.grey['900']
//     }
//   },
// }));

const StyledLi = styled('li')(({theme}) => ({
  marginBottom: theme.spacing(24 / 8),
  paddingLeft: theme.spacing(8 / 8),

  color: color.grey['500'],

  borderLeft: `2px solid ${color.white}`,
}));

const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  lineHeight: rem(16),
  letterSpacing: rem(0.25),
  color: color.grey['500'],
  borderLeft: 'none !important',

  '&:hover': {
    color: color.grey['900']
  }
})) as typeof Link;

export default function NavRightItem(props: Props) {
  // const classes = useStyles();
  const {id, name} = props;

  // return (
  //   <li className={`${classes.li} ${className}`}>
  //     <a className={`${classes.a} ${className}`} href={`#${id}`}>{name}</a>
  //   </li>
  // );

  return (
    <StyledLi>
      <StyledLink href={`#${id}`}>{name}</StyledLink>
    </StyledLi>
  )
};
