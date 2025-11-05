import Logo from "../../../components/Logo";

interface Props {
  brand: any;
  variant: any;
}

export default function WorkAtLogo(props: Props) {
  const { brand, variant } = props;

  return (
    // <div className="pl-2">
      <Logo brand={brand} variant={variant} width="100%" />
    // </div>
  );
}
