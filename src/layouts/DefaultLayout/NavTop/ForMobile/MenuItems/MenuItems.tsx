import MenuItem from './MenuItem';

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
      <MenuItem href={'/featured'} onClick={onClick} title="Featured" />
      <MenuItem href="/work" onClick={onClick} title="Work" />
      <MenuItem href={'/studies'} onClick={onClick} title="Studies" />
      <MenuItem href={'/appearances'} onClick={onClick} title="Appearances" />
      <MenuItem href={'/about'} onClick={onClick} title="About" />
      <MenuItem href={'/contact'} onClick={onClick} title="Contact" />
    </div>
  );
}

export default MenuItems;
