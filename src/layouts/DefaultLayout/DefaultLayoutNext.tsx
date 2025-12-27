import Footer from './Footer';
import NavTop from './NavTop/NavTopNext';
import SkipNav from './SkipNav';
import { ReactNode } from 'react';

/**
 * When the layout is in `fullScreen` mode, the content needs to be offset to compensate for the visual weight of the
 * header logo and nav bar.
 *
 * By increasing this number, you will shift the content down by that amount. Conversely, a smaller number will make the
 * content sit higher on the viewport.
 */
const fullHeightOpticalOffset = -32 - 8 - 8 - 1;
const mainId = 'main-content';

interface Props {
  /**
   * Child components
   */
  children: ReactNode;

  /**
   * If `true`, layout will use the full height of the viewport
   */
  fullHeight?: boolean;

  /**
   * This key identifies top-nav item is selected
   */
  top?: string;
}

export default function DefaultLayout(props: Props) {
  const { children, fullHeight, top } = props;

  // fullHeightOpticalOffset = -32 - 8 - 8 - 1 = -49px = -3.0625rem
  const footerMarginTop = fullHeight
    ? `${(0 - fullHeightOpticalOffset) / 16}rem` // rem(0 - fullHeightOpticalOffset) = rem(49) = 3.0625rem
    : '88px'; // theme.spacing(88 / 8) = 11 * 8px = 88px

  return (
    <div className="h-full">
      <SkipNav mainId={mainId} />

      <header>
        <NavTop selected={top} />
      </header>

      {/* IMPORTANT: use `tabIndex=-1` when using the <SkipNav/> component */}
      <main
        id={mainId}
        tabIndex={-1}
        className={`pt-[162px] ${fullHeight ? `mt-[-49px] h-full` : ''}`}
      >
        {children}
      </main>

      <footer className="w-full" style={{ marginTop: footerMarginTop }}>
        <Footer />
      </footer>
    </div>
  );
}
