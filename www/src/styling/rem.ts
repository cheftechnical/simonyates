/**
 * Convert a value in pixels and return in rems.
 *
 * This function is useful for converting designs from Figma.
 *
 * @param px
 */
export default function rem(px: number) {
	return (px/16) + 'rem'
};
