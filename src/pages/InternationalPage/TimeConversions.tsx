import { useEffect, useState } from "react";
import MyGridContainer from "../../styling/MyGridContainer/MyGridContainer";
import DateTime from "./DateTime";

interface Region {
  timeZone: string;
}

const regions: Region[] = [
  {
    timeZone: "America/Los_Angeles",
  },
  {
    timeZone: "America/Denver",
  },
  {
    timeZone: "America/Chicago",
  },
  {
    timeZone: "America/New_York",
  },
  {
    timeZone: "Europe/London",
  },
  {
    timeZone: "Europe/Berlin",
  },
  {
    timeZone: "Asia/Hong_Kong",
  },
  {
    timeZone: "Asia/Tokyo",
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
    <>
      <MyGridContainer>
        {/* Zulu time is always top and center */}
        <div className="px-3 w-1/4" />
        <div className="px-3 w-1/2">
          <DateTime now={now} timeZone="GMT" />
        </div>

        {/* List all other time zones*/}
        <div className="px-3 w-1/4" />
        {regions.map((region: Region, index: number) => (
          <div key={index} className="px-3 w-1/2 sm:w-1/3 lg:w-1/4">
            <DateTime now={now} timeZone={region.timeZone} />
          </div>
        ))}
      </MyGridContainer>
    </>
  );
}
