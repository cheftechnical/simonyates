import Image from "../Image/Image";
import { ReactElement, useMemo } from "react";

interface Props {
  alt: string;
  callToAction?: string | ReactElement;
  caption?: string | ReactElement;
  href?: string | undefined;
  next?: boolean;
  src: string;
}


export default function Figure(props: Props) {
  const { alt, callToAction, caption, href, next, src } = props;

  const renderedFigureContent = useMemo(() => {
    const image = <Image alt={alt} src={src} />;

    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {image}
        </a>
      );
    }

    return image;
  }, [alt, href, src]);

  const renderedFigureCaption = useMemo(() => {
    if (!caption) return;

    const captionContent = callToAction ? (
      <div>
        <div>{caption}</div>
        <div>
          <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 no-underline hover:underline"
          >
            Watch Video &rsaquo;
          </a>
        </div>
      </div>
    ) : (
      <>{caption}</>
    );

    return (
      <figcaption className="mt-1.5 font-primary font-normal text-xs leading-4 tracking-[0.4px] text-[#515151]">
        {captionContent}
      </figcaption>
    );
  }, [callToAction, caption, href]);

  return (
    <div className={next ? "pt-10" : ""}>
      <figure>
        {renderedFigureContent}
        {renderedFigureCaption}
      </figure>
    </div>
  );
}
