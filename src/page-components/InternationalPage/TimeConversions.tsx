'use client';

import { useEffect, useState } from "react";
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
  // IMPORTANT: Client Components can still be server-rendered. Initializing state
  // with `new Date()` causes server/client markup to differ at hydration time.
  // Start with `null` and set the real time after mount.
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const intervalId = window.setInterval(update, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        {/* Zulu time is always top and center */}
        <div className="px-3 w-1/4" />
        <div className="px-3 w-1/2">
          {now ? <DateTime now={now} timeZone="GMT" /> : null}
        </div>

        {/* List all other time zones*/}
        <div className="px-3 w-1/4" />
        {regions.map((region: Region, index: number) => (
          <div key={index} className="px-3 w-1/2 sm:w-1/3 lg:w-1/4">
            {now ? <DateTime now={now} timeZone={region.timeZone} /> : null}
          </div>
        ))}
      </div>
    </>
  );
}
