import MenuItem from "./MenuItem";

export interface Props {
  /**
   * Callback raised when the user clicks on a menu item
   */
  onClick: () => void;
}

export function MenuItems(props: Props) {
  const { onClick } = props;

  return (
    <div className="pt-2 text-right">
      <MenuItem href="/work" onClick={onClick} title="Work" />
      <MenuItem href={"/featured"} onClick={onClick} title="Featured" />
      <MenuItem href={"/about"} onClick={onClick} title="About" />
      <MenuItem href={"/contact"} onClick={onClick} title="Contact" />
    </div>
  );
}

export default MenuItems;
