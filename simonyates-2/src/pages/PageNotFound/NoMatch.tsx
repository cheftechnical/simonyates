import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';
import {color} from '../../styling/Color/Color';
import {Link as ReactRouterDomLink} from 'react-router-dom';
import rem from '../../styling/rem';
import MyContainer from '../../styling/MyContainer/MyContainer';
import {Link, styled, Typography} from "@mui/material";

const StyledLink = styled(Link)(({theme}) => ({
  fontWeight: 'bold',
  color: color.grey['900'],
  paddingBottom: '4px',
})) as typeof Link;

const StyledTypographyBody = styled(Typography)(({theme}) => ({
  marginBottom: theme.spacing(388 / 8),
  color: color.grey['600']
})) as typeof Typography;

const StyledTypographyHeadline = styled(Typography)(({theme}) => ({
  fontSize: rem(88),
  lineHeight: rem(88),
  marginBottom: theme.spacing(72 / 8),
  marginTop: theme.spacing(272 / 8),
})) as typeof Typography;

export default function NoMatch() {
  return (
    <DefaultLayout title="404: Page Not Found">
      <MyContainer>
        <StyledTypographyHeadline component="h1" variant="primaryH1">
          404
        </StyledTypographyHeadline>
        <StyledTypographyBody component="p" variant="primaryH3">
          Sorry, that page doesn&rsquo;t&nbsp;exist.<br/>
          But you can navigate back to&nbsp;<StyledLink component={ReactRouterDomLink} to="/">home</StyledLink>.
        </StyledTypographyBody>
      </MyContainer>
    </DefaultLayout>
  );
};
