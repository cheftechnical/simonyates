import {makeStyles} from '@material-ui/core/styles';
import {ReactNode} from 'react';

export interface Props {
  /**
   * The content of the callout.
   */
  children?: ReactNode;
  /**
   * The component styling
   */
  className?: string;
  /**
   * An id that uniquely identifies the component on the page
   */
  id: string;
  /**
   * The name of the section
   */
  name: string;
  /**
   * Callback is raised with the visible status of the component changes
   *
   * @param id
   * @param visible
   */
  onVisibleChange?: (id: string, visible: boolean) => void;
}

const useStyles = makeStyles(() => ({
  section: {
    // backgroundColor: 'magenta',
    // border: '1px solid cyan',
  },
  jumpTarget: {
    content: '',
    display: 'block',
    height: '100px',
    marginTop: '-100px',
    visibility: 'hidden',
  },
}));

export default function Section(props: Props) {
  const classes = useStyles();
  const {children, className, id} = props;

  return (
    <div className={className}>
      <section id={id} className={classes.section}>
        <div id={`${id}_link`} className={classes.jumpTarget}/>
        {children}
      </section>
    </div>
  );
};
