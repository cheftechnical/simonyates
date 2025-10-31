/**
 * This component will render the welcome text and consider widows/orphans at various viewport sizes.
 */
export default function Content() {
  return (
    <div className="h-full flex items-center">
      <h1 className="font-normal text-[54px] leading-[88px] tracking-[0.5px]">
        {/* xs only */}
        <span className="block sm:hidden">
          Hi, I&rsquo;m Simon&nbsp;Yates.
          <br />I couldn&rsquo;t fit everything into LinkedIn, so I made
          a&nbsp;website.
        </span>

        {/* sm only */}
        <span className="hidden sm:block md:hidden">
          Hi, I&rsquo;m Simon Yates.
          <br />I couldn&rsquo;t fit everything into LinkedIn,
          so&nbsp;I&nbsp;made&nbsp;a&nbsp;website.
        </span>

        {/* md only */}
        <span className="hidden md:block lg:hidden">
          Hi, I&rsquo;m Simon Yates.
          <br />I couldn&rsquo;t fit everything into LinkedIn, so&nbsp;I made
          a&nbsp;website.
        </span>

        {/* lg and xl */}
        <span className="hidden lg:block">
          Hi, I&rsquo;m Simon Yates.
          <br />
          I couldn&rsquo;t fit everything into&nbsp;LinkedIn,
          <br />
          so I made a&nbsp;website.
        </span>
      </h1>
    </div>
  );
}
