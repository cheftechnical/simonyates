import * as d3 from 'd3';
import {color} from '../../../styling/Color';

interface BaseVisualizationInterface {
	padding: number;
	height: number;
	width: number;
}

export class BaseVisualization implements BaseVisualizationInterface {
	// Properties
	height = 500;
	padding = 8 * 8;
	svg: any;
	tickDistance: number = 0;
	width = 500;

	// Properties with calculated defaults
	radius: number = (Math.min(this.width, this.height) - (2 * this.padding)) / 2;


	/**
	 * Calculates the distance of each tick on the x/y axis
	 * @param radius
	 * @param ticksPerRadius
	 */
	calculateTickDistance(radius: number, ticksPerRadius: number): number {
		return radius / ticksPerRadius;
	}

	/**
	 * Creates a D3 svg element
	 *
	 * @param selector
	 * @param width
	 * @param height
	 */
	createChart(selector: string, width: number, height: number): any {
		this.svg = d3.select(selector)
			.append('svg')
			.attr('width', width)
			.attr('height', height);
	}

	addBackground() {
		this.svg.append('rect')
			.attr('x', 0)
			.attr('y', 0)
			.attr('width', this.width)
			.attr('height', this.height)
			.attr('fill', color.grey['50']);
	}


	/**
	 * Add a dot grid to the chart
	 *
	 * The ticks should be centered.
	 *
	 * @param padding
	 * @param ticksPerRadius
	 * @param tickDistance
	 * @param width
	 * @param height
	 */
	addDotGrid(padding: number, ticksPerRadius: number, tickDistance: number, width: number, height: number) {
		const tickCount = (ticksPerRadius * 2) + 4; // 4=fudge to give some breathing room
		const center = {
			x: width / 2,
			y: height / 2
		};
		const start = {
			x: center.x - ((tickCount * tickDistance)  / 2),
			y: center.y - ((tickCount * tickDistance)  / 2),
		};

		for (let i = 0; i<=tickCount; i++) {
			for (let j = 0; j <= tickCount; j++) {
				this.svg.append('line')
					.attr('x1', start.x + (i * tickDistance))
					.attr('y1', start.y + (j * tickDistance))
					.attr('x2', start.x + (i * tickDistance) + 1)
					.attr('y2', start.y + (j * tickDistance))
					.attr('class', 'crisp')
					.attr('stroke-width', 1)
					.attr('stroke', color.grey['300'])
					// .attr('stroke', color.grey['900'])
			}
		}

		//
		// for (let x = padding - tickDistance; x <= (width - (2 * tickDistance)); x += tickDistance) {
		// 	for (let y = padding - tickDistance; y <= (height - (2 * tickDistance)); y += tickDistance) {
		// 		this.svg.append('line')
		// 			.attr('x1', x)
		// 			.attr('y1', y)
		// 			.attr('x2', x + 1)
		// 			.attr('y2', y)
		// 			.attr('class', 'crisp')
		// 			.attr('stroke-width', 1)
		// 			.attr('stroke', color.grey['300'])
		// 	}
		// }
	}
}