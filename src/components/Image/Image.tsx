interface Props {
  alt: string;
  className?: string;
  src: string;
}

export default function Image(props: Props) {
  const { alt, className = "", src } = props;

  return (
    <img
      alt={alt}
      className={`-mb-1 w-full ${className}`}
      // src={process.env.PUBLIC_URL + src} @todo <!---- this needs to be set
      src={src}
    />
  );
}
