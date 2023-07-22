import {ReactElement, useMemo} from 'react';
import CenterVertically from '../../../components/CenterVertically/CenterVertically';
import NavRight from '../../../components/NavRight';
import {SectionItem} from '../../../components/Sections/SectionItem';
import MyContainer from '../../../styling/MyContainer';
import MyGridContainer from '../../../styling/MyGridContainer';
import WorkAtEmployer from './WorkAtEmployer';
import WorkAtRole from './WorkAtRole';
import WorkAtWhenWhere from './WorkAtWhenWhere';

interface Props {
  /**
   * The main content
   */
  content: ReactElement;
  /**
   * The name of the employer
   */
  employer: string;
  /**
   * The employer's logo
   */
  logo: ReactElement;
  /**
   * The role I performed
   */
  role: ReactElement | string;
  /**
   * A collection of sections
   */
  sections?: SectionItem[];
  /**
   * When I worked here
   */
  when: string;
  /**
   * Where the work was located
   */
  where: string;
}

const useStyles = makeStyles((theme) => ({
  root: {},
  role: {
    paddingTop: theme.spacing(28 / 8),
  }
}));

export default function WorkAtTemplate(props: Props) {
  const classes = useStyles();
  const {content, employer, logo, role, sections, when, where} = props;

  const renderedWorkAtEmployer = useMemo(() => {
    return (<WorkAtEmployer employer={employer}/>);
  }, [employer]);

  const renderedWorkAtRole = useMemo(() => {
    return (<WorkAtRole>{role}</WorkAtRole>);
  }, [role]);

  const renderedWorkAtWhenWhere = useMemo(() => {
    return (<WorkAtWhenWhere when={when} where={where}/>);
  }, [when, where]);

  return (
    <MyContainer className={classes.root}>
      <MyGridContainer>
        {/* Avatar */}
        <Grid item sm={1} xs={2}>
          {logo}
        </Grid>

        {/* Show for mobile (xs, sm) */}
        <Hidden mdUp>
          {/* Content */}
          <Grid item sm={6} xs={10}>
            <CenterVertically>
              {renderedWorkAtEmployer}
            </CenterVertically>
          </Grid>
          <Grid item sm={12} xs={12}>
            {renderedWorkAtRole}
            {renderedWorkAtWhenWhere}
            {content}
          </Grid>
        </Hidden>

        {/* Show for desktop (md, lg, xl) */}
        <Hidden smDown>
          {/* Content */}
          <Grid item sm={6} xs={10}>
            <div>
              {renderedWorkAtEmployer}
            </div>
            <div className={classes.role}>
              {renderedWorkAtRole}
            </div>
            {renderedWorkAtWhenWhere}
            {content}
          </Grid>

          {/* Gutter */}
          <Grid item md={2}/>

          {/* Navigation */}
          <Grid item md={3}>
            <NavRight sections={sections}/>
          </Grid>
        </Hidden>
      </MyGridContainer>
    </MyContainer>
  );
};
