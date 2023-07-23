// import * as React from 'react';
// import CheckIcon from '@material-ui/icons/Check';
// import {Box, Link} from '@material-ui/core';
import Logo from '../../../components/Logo';
import Typography from '../../../styling/Typography/Typography';
// import {makeStyles} from '@material-ui/core/styles';
import rem from '../../../styling/rem';
import {color} from '../../../styling/Color/Color';
import {Box, Link, makeStyles, styled} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

// @todo mui5
// const useStyles = makeStyles(() => ({
//   root: {
//     padding: rem(40),
//     textAlign: 'center'
//   },
//   link: {
//     color: color.grey['900'],
//   },
//   wellChatSoon: {
//     color: color.grey['600']
//   }
// }));

const StyledDivRoot = styled('div')(({theme}) => ({
  padding: rem(40),
  textAlign: 'center'
}));

const StyledLink = styled(Link)(({theme}) => ({
  color: color.grey['900'],
}))

const StyledTypographyWellChatSoon = styled(Typography)(({theme}) => ({
  color: color.grey['600']
}))

export default function ContentSuccessful() {
  // const classes = useStyles();

  return (
    <StyledDivRoot>
      <Box mt={16 / 8}>
        <CheckIcon style={{fontSize: 104}}/>
      </Box>

      <Box mt={24 / 8}>
        <Typography group="primary" variant="h3" weight="regular">
          Thank you.
        </Typography>
      </Box>

      <Box mt={8 / 8}>
        <StyledTypographyWellChatSoon group="primary" variant="body" weight="regular">
          We&rsquo;ll chat soon.
        </StyledTypographyWellChatSoon>
      </Box>

      <Box mt={88 / 8}>
        <Typography group="primary" variant="body" weight="regular">
          In the meantime, let&rsquo;s connect on social media:
        </Typography>
      </Box>

      <Box mt={32 / 8} mb={(104 - 40) / 8}>
        <Box display="flex" justifyContent="center">
          <Box>

            {/* LinkedIn */}
            <Box display="flex">
              <Box>
                <Logo brand="linkedin" variant="grey-500" width={24}/>
              </Box>
              <Box ml={8 / 8}>
                <Typography group="secondary" variant="body" weight="regular">
                  <StyledLink
                    title="Find me on LinkedIn"
                    target="_blank"
                    href="https://www.linkedin.com/in/simonyates/"
                  >LinkedIn</StyledLink>
                </Typography>
              </Box>
            </Box>

            {/*	Twitter */}
            <Box display="flex" mt={24 / 8}>
              <Box>
                <Logo brand="twitter" variant="grey-500" width={24}/>
              </Box>
              <Box ml={8 / 8}>
                <Typography group="secondary" variant="body" weight="regular">
                  <StyledLink
                    title="Follow me on Twitter"
                    target="_blank"
                    href="https://twitter.com/cheftechnical"
                  >Twitter</StyledLink>
                </Typography>
              </Box>
            </Box>

          </Box>
        </Box>
      </Box>
    </StyledDivRoot>
  );
};
