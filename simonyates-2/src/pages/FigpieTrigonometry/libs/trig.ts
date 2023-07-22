/**
 * Converts an angle in degrees to its equivalent in radians
 *
 * @param degrees
 */
export function degToRad(degrees: number): number {
	return degrees * (Math.PI / 180.0);
}

export function radToDeg(radians: number): number {
	return radians * (180.0 / Math.PI);
}