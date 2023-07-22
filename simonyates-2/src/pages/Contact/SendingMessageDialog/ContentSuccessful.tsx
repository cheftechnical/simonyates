import * as React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import {Box, Link} from '@material-ui/core';
import Logo from '../../../components/Logo';
import Typography from '../../../styling/Typography/Typography';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../../styling/rem';
import {color} from '../../../styling/Color/Color';

const useStyles = makeStyles(() => ({
  root: {
    padding: rem(40),
    textAlign: 'center'
  },
  link: {
    color: color.grey['900'],
  },
  wellChatSoon: {
    color: color.grey['600']
  }
}));

export default function ContentSuccessful() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box mt={16 / 8}>
        <CheckIcon style={{fontSize: 104}}/>
      </Box>

      <Box mt={24 / 8}>
        <Typography group="primary" variant="h3" weight="regular">
          Thank you.
        </Typography>
      </Box>

      <Box mt={8 / 8}>
        <Typography className={classes.wellChatSoon} group="primary" variant="body" weight="regular">
          We&rsquo;ll chat soon.
        </Typography>
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
                  <Link
                    className={classes.link}
                    title="Find me on LinkedIn"
                    target="_blank"
                    href="https://www.linkedin.com/in/simonyates/"
                  >LinkedIn</Link>
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
                  <Link
                    className={classes.link}
                    title="Follow me on Twitter"
                    target="_blank"
                    href="https://twitter.com/cheftechnical"
                  >Twitter</Link>
                </Typography>
              </Box>
            </Box>

          </Box>
        </Box>
      </Box>
    </div>
  );
};
