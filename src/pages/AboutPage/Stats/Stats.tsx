import MyContainer from "../../../styling/MyContainer/MyContainer";
import StatsItem from "./StatsItem";
import Carousel from "react-material-ui-carousel";

interface Stat {
  caption: string;
  value: number;
}

const stat: Stat[] = [
  {
    caption: "years programming",
    value: 25,
  },
  {
    caption: "when I started programming",
    value: 10,
  },
  {
    caption: "software projects completed",
    value: 200,
  },
  {
    caption: "figma plugin",
    value: 1,
  },
];

export default function Stats() {
  return (
    <div className="pt-[60px] pb-[36px] bg-gray-25">
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
