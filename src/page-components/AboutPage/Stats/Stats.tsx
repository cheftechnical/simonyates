import MyContainer from "../../../styling/MyContainer/MyContainer";
import StatsItem from "./StatsItem";
import Carousel from "react-material-ui-carousel";

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
  return (
    <div className="pt-[36px] pb-[36px] bg-gray-25">
      {/* Desktop */}
      <div className="hidden sm:block">
        <MyContainer>
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
        </MyContainer>
      </div>

      {/* Mobile */}
      <div className="block sm:hidden">
        <Carousel animation="slide" autoPlay={false}>
          <div>
            <StatsItem {...stat[0]} />
          </div>
          <div>
            <StatsItem {...stat[1]} />
          </div>
          <div>
            <StatsItem {...stat[2]} />
          </div>
          <div>
            <StatsItem {...stat[3]} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
