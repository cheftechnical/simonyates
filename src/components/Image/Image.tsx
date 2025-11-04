interface Props {
  /** Alternative text for the image, used for accessibility and when the image cannot be displayed */
  alt: string;
  /** Optional additional CSS classes to apply to the image */
  className?: string;
  /** The source URL or path of the image */
  src: string;
}

export default function Image(props: Props) {
  const { alt, className = "", src } = props;

  return (
    <img
      alt={alt}
      className={`-mb-1 w-full ${className}`}
      src={src}
    />
  );
}
