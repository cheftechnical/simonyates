/**
 * This component creates a hidden link that allows a screen reader to skip
 * the navigation and go right to the main content.
 *
 * IMPORTANT: Do not use `display=hidden`. The HTMl needs to be visible but unseen --
 * if that makes sense.
 *
 * This code is a direct copy/paste React adaptation of the example provided by
 * Deque University.
 *
 * @source: https://dequeuniversity.com/class/semantic-structure/within-pages/skip-navigation
 */

export interface Props {
  /**
   * The id of the main content which this component references
   */
  mainId: string;
}

export default function SkipNav(props: Props) {
  const { mainId } = props;

  return (
    <div className="border-0 overflow-hidden p-0 absolute top-0 whitespace-nowrap w-px h-px -m-px [clip:rect(0,0,0,0)]">
      <a
        href={`#${mainId}`}
        className="focus:[clip:auto] focus:h-auto focus:left-0 focus:m-0 focus:py-[10px] focus:px-0 focus:top-0 focus:w-full focus:border-0 focus:text-center focus:font-bold focus:text-[#A93030]"
      >
        Skip navigation
      </a>
    </div>
  );
}
