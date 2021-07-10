import {useEffect, useState} from 'react';
import {Box, Grid} from '@material-ui/core';
import MyGridContainer from '../../styling/MyGridContainer';
import DateTime from './DateTime';

interface Region {
  timeZone: string;
}

const regions: Region[] = [
  {
    timeZone: 'America/Los_Angeles',
  },
  {
    timeZone: 'America/Chicago',
  },
  {
    timeZone: 'America/New_York',
  },
  {
    timeZone: 'Europe/London',
  },
  {
    timeZone: 'Europe/Berlin',
  },
];

export default function TimeConversions() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setNow(new Date());
    }, 1000);
  }, [now]);

  return (
    <div>
      <MyGridContainer>
        <Grid item xs={2}/>
        <Grid item xs={2}/>
        <Grid item xs={4}>
          <DateTime now={now} timeZone="GMT"/>
        </Grid>
        <Grid item xs={2}/>
        <Grid item xs={2}/>
      </MyGridContainer>

      <Box mt={6}>
        <table>
          <tbody>
          <tr>
            {regions.map((region: Region, index: number) => (
              <td key={index} width={(1 / regions.length * 100).toString() + '%'} valign="top">
                <DateTime now={now} timeZone={region.timeZone}/>
              </td>
            ))}
          </tr>
          </tbody>
        </table>
      </Box>
    </div>
  );
}