type HeaderProps = {
  title?: string;
};

export function Header(props: HeaderProps) {
  const {title} = props;

  return (
    <div>[Header title = {title}]</div>
  );
};

export default Header;
