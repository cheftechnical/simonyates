// import Scrollspy from 'react-scrollspy';
// import {makeStyles} from '@material-ui/core/styles';
import NavRightItem from './NavRightItem/NavRightItem';
import {color} from '../../styling/Color/Color';
import {SectionItem} from '../Sections/SectionItem';
import {styled} from "@mui/material";

interface Props {
  sections?: SectionItem[];
}

// @todo mui5
// const useStyles = makeStyles(() => ({
//   root: {
//     position: 'fixed',
//     maxWidth: '17%' // no idea why this works, but it does
//   },
//
//   scrollspy: {
//     listStyleType: 'none'
//   },
//
//   // The Scrollspy component attaches this class to the currently selected item
//   isCurrent: {
//     color: color.grey['900'],
//
//     // borderLeft: `2px solid magenta`
//     borderLeft: `2px solid ${color.grey['500']}`
//   },
// }));

const StyledDivRoot = styled('div')(({theme}) => ({
    position: 'fixed',
    maxWidth: '17%' // no idea why this works, but it does
}));

export default function NavRight(props: Props) {
  // const classes = useStyles();
  const {sections} = props;

  if (!sections) return <></>;

  const items = sections.map(current => {
    return current.id;
  });

  // @todo mui5
  // return (
  //   <nav aria-label="Sections">
  //     <StyledDivRoot>
  //       <Scrollspy currentClassName={classes.isCurrent} items={items} style={{listStyleType: 'none'}} offset={-100}>
  //         {sections.map((item, index) => (
  //           <NavRightItem id={item.id} key={index} name={item.name}/>
  //         ))}
  //       </Scrollspy>
  //     </StyledDivRoot>
  //   </nav>
  // );

  return (
      <div>[NavRight]</div>
  )
};
