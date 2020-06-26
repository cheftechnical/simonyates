/**
 * Convert a value in pixels and return in rems.
 *
 * This function is useful for converting designs from Figma.
 *
 * @param value
 */
export default function rem(value: number) {
	return (value/16) + 'rem'
};
