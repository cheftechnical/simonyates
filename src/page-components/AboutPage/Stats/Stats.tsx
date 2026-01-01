'use client';

import Container from "../../../components/Container/Container";
import StatsItem from "./StatsItem";
import { useCallback, useMemo, useState } from "react";

interface Stat {
  caption: string;
  value: string;
}

const stat: Stat[] = [
  {
    caption: "First production system built",
    value: "1997",
  },
  {
    caption: "Retail role → trusted software",
    value: "Age 16",
  },
  {
    caption: "Repetitive work automated",
    value: "2h → 20m",
  },
  {
    caption: "First manager who trusted me",
    value: "Still in touch",
  },
];

export default function Stats() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStat = stat[activeIndex];

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + stat.length) % stat.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % stat.length);
  }, []);

  const dots = useMemo(() => {
    return stat.map((_, i) => (
      <button
        key={i}
        type="button"
        aria-label={`Go to item ${i + 1} of ${stat.length}`}
        aria-current={i === activeIndex ? "true" : "false"}
        onClick={() => setActiveIndex(i)}
        className={`h-2 w-2 rounded-full ${
          i === activeIndex ? "bg-gray-700" : "bg-gray-300"
        }`}
      />
    ));
  }, [activeIndex]);

  return (
    <div className="pt-[36px] pb-[36px] bg-gray-25">
      {/* Desktop */}
      <div className="hidden sm:block">
        <Container>
          <div className="flex flex-wrap">
            <div className="w-1/4">
              <StatsItem {...stat[0]} />
            </div>
            <div className="w-1/4">
              <StatsItem {...stat[1]} />
            </div>
            <div className="w-1/4">
              <StatsItem {...stat[2]} />
            </div>
            <div className="w-1/4">
              <StatsItem {...stat[3]} />
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile */}
      <div className="block sm:hidden">
        <Container>
          <StatsItem {...activeStat} />

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous"
              className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900"
            >
              Prev
            </button>

            <div className="flex items-center gap-2">{dots}</div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next"
              className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900"
            >
              Next
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}
