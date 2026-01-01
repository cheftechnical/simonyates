import Footer from './Footer';
import NavTop from './NavTop/NavTop';
import SkipNav from './SkipNav';
import { ReactNode } from 'react';

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

  const mainClasses = [
    'pt-[162px]',
    'pb-30', // 60px minimum whitespace before footer
    fullHeight
      ? // For fullHeight pages, give <main> an explicit viewport-based height so
        // children using `h-full` (e.g. HomePage) can vertically center. The top
        // padding then pushes the footer below the initial viewport.
        // We also compensate for the -49px optical offset so the footer stays
        // entirely below the fold (otherwise ~49px can "peek" into the viewport).
        'mt-[-49px] h-[calc(100vh+49px)]'
      : // For normal pages, allow main to grow and keep footer at bottom when content is short.
        'flex-1',
  ].join(' ');

  return (
    <div className="min-h-screen flex flex-col">
      <SkipNav mainId={mainId} />

      <header>
        <NavTop selected={top} />
      </header>

      {/* IMPORTANT: use `tabIndex=-1` when using the <SkipNav/> component */}
      <main
        id={mainId}
        tabIndex={-1}
        className={mainClasses}
      >
        {children}
      </main>

      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
