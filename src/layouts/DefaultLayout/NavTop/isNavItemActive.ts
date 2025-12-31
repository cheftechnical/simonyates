export function isNavItemActive(params: {
  pathname: string | null;
  href: string;
}) {
  const { pathname, href } = params;
  if (!pathname) return false;

  // Aliases: treat certain routes as belonging to a nav section.
  // Example: Figpie is a "Study" even though it lives at the root level.
  if (href === '/studies' && (pathname === '/figpie' || pathname.startsWith('/figpie/'))) {
    return true;
  }

  return pathname === href || pathname.startsWith(href + '/');
}


