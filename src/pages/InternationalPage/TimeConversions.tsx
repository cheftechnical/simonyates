import {useEffect, useState} from 'react';
import MyGridContainer from '../../styling/MyGridContainer/MyGridContainer';
import DateTime from './DateTime';
import {Grid} from "@mui/material";

interface Region {
  timeZone: string;
}

const regions: Region[] = [
  {
    timeZone: 'America/Los_Angeles',
  },
  {
    timeZone: 'America/Denver',
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
  {
    timeZone: 'Asia/Hong_Kong',
  },
  {
    timeZone: 'Asia/Tokyo',
  }
];

export default function TimeConversions() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setNow(new Date());
    }, 1000);
  }, [now]);

  return (
    <>
      <MyGridContainer>
        {/* Zulu time is always top and center */}
        <Grid item xs={3}/>
        <Grid item xs={6}>
          <DateTime now={now} timeZone="GMT"/>
        </Grid>

        {/* List all other time zones*/}
        <Grid item xs={3}/>
        {regions.map((region: Region, index: number) => (
          <Grid item key={index} xs={6} sm={4} md={3}>
            <DateTime now={now} timeZone={region.timeZone}/>
          </Grid>
        ))}
      </MyGridContainer>
    </>
  );
}