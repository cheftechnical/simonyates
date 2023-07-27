import {Link as ReactRouterDom} from 'react-router-dom';
import Typography from '../../../styling/Typography/Typography';
// import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color/Color';
import {styled} from "@mui/material";

interface Props {
  employer: string;
  href: string;
  role: string;
  when: string;
}

// const useStyles = makeStyles((themeMui) => ({
//   root: {
//     marginBottom: themeMui.spacing(72 / 8)
//   },
//   employer: {
//     marginBottom: themeMui.spacing(20 / 8)
//   },
//   h3Link: {
//     color: color.grey['600'],
//     '&:hover': {
//       color: color.grey['600'],
//     }
//   },
//   readFullDetails: {
//     marginTop: themeMui.spacing(32 / 8)
//   },
//   when: {
//     whiteSpace: 'nowrap'
//   }
// }));

const StyledLink = styled(ReactRouterDom)(({theme}) => ({
  color: color.grey['600'],
  '&:hover': {
    color: color.grey['600'],
  }
}));

const StyledSpanWhen = styled('span')(({theme}) => ({
  whiteSpace: 'nowrap'
}));

const StyledTypographyEmployer = styled(Typography)(({theme}) => ({
  marginBottom: theme.spacing(20 / 8)
}));

export default function EmployerRollAndWhen(props: Props) {
  const {employer, href, role, when} = props;

  return (
    <StyledTypographyEmployer component="h2" group="primary" variant="h3" weight="regular">
      <StyledLink to={href}>
        {employer}, {role}, <StyledSpanWhen>{when}</StyledSpanWhen>
      </StyledLink>
    </StyledTypographyEmployer>
  );
}
