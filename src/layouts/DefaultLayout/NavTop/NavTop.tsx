import ForMobile from "./ForMobile";
import ForDesktop from "./ForDesktop";

interface Props {
  /**
   * Key of the selected nav item
   */
  selected?: string;
}

export default function NavTop(props: Props) {
  const { selected } = props;

  return (
    <nav aria-label="Global">
      {/* Desktop */}
      <div className="hidden md:block">
        <ForDesktop selected={selected} />
      </div>

      {/*	Mobile */}
      <div className="block md:hidden">
        <ForMobile />
      </div>
    </nav>
  );
}
