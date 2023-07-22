import Scrollspy from 'react-scrollspy';
import {makeStyles} from '@material-ui/core/styles';
import NavRightItem from './NavRightItem';
import {color} from '../../styling/Color/Color';
import {SectionItem} from '../Sections/SectionItem';

interface Props {
  sections?: SectionItem[];
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    maxWidth: '17%' // no idea why this works, but it does
  },

  scrollspy: {
    listStyleType: 'none'
  },

  // The Scrollspy component attaches this class to the currently selected item
  isCurrent: {
    color: color.grey['900'],

    // borderLeft: `2px solid magenta`
    borderLeft: `2px solid ${color.grey['500']}`
  },
}));

export default function NavRight(props: Props) {
  const classes = useStyles();
  const {sections} = props;

  if (!sections) return <></>;

  const items = sections.map(current => {
    return current.id;
  });

  return (
    <nav aria-label="Sections">
      <div className={classes.root}>
        <Scrollspy currentClassName={classes.isCurrent} items={items} style={{listStyleType: 'none'}} offset={-100}>
          {sections.map((item, index) => (
            <NavRightItem id={item.id} key={index} name={item.name}/>
          ))}
        </Scrollspy>
      </div>
    </nav>
  );
};
