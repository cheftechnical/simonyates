import { color } from "../../../libs/Color";
import { BaseVisualization } from "../../../libs/BaseVisualization";
import { CubicBezier } from "../../../libs/CubicBezier";
import { Visualization } from "../../../libs/Visualization";
import { degToRad, radToDeg } from "../../../libs/trig";
import * as d3 from "d3";

export class RotationD3 extends BaseVisualization implements Visualization {
  color = {
    axisLine: color.grey["100"],

    circleContour: color.grey["100"],
    circleTicks: color.grey["200"],

    draggableFill: "white",
    draggableOutlineInactive: color.grey["200"],
    draggableOutlineStarted: color.lime["500"],

    nodeMutable: color.blue["500"],
    nodeLabel: color.grey["900"],

    vectorLine: color.grey["400"],
    magenta: "magenta",
  };

  // elements
  elementEdge0S: any;
  elementEdge0E: any;
  elementEdgeEC2: any;
  elementEdgeSC1: any;
  elementEdgeSE: any;
  elementNodeC1: any;
  elementNodeC1Label: any;
  elementNodeC2: any;
  elementNodeC2Label: any;
  elementNodeS: any;
  elementNodeSLabel: any;
  elementNodeE: any;
  elementNodeELabel: any;
  draggableNode: any;

  startAngle = 0;
  endAngle = 0;

  point = {
    s: {
      x: 0,
      y: 0,
    },
    c1: {
      x: 0,
      y: 0,
    },
    c2: {
      x: 0,
      y: 0,
    },
    e: {
      x: 0,
      y: 0,
    },
  };
  pointUpdated = {
    s: {
      x: 0,
      y: 0,
    },
    c1: {
      x: 0,
      y: 0,
    },
    c2: {
      x: 0,
      y: 0,
    },
    e: {
      x: 0,
      y: 0,
    },
  };

  zeroAt = {
    x: 0,
    y: 0,
  };

  onChange = (_endAngle: number, _rotatedCubicBezier: CubicBezier) => {
    // This will be assigned from RotationVisualization
  };

  drawChart(container: HTMLElement) {
    // (0,0) should be the center
    this.zeroAt = {
      x: this.width / 2,
      y: this.height / 2,
    };
    const transform = `translate(${this.zeroAt.x}, ${this.zeroAt.y})`;

    // Calculate the point coordinates
    this.point = this.calculatePoints(360, 270);

    // Create the chart
    this.createChart(container, this.width, this.height);

    // Add the background
    this.addBackground();

    // Add the dot grid
    const ticksPerRadius = 10;
    this.addDotGrid(
      this.padding,
      ticksPerRadius,
      this.tickDistance,
      this.width,
      this.height,
    );

    // Add the axis lines
    this.svg
      .append("path")
      .attr("transform", transform)
      .attr(
        "d",
        d3.line()([
          [0 - this.radius, 0],
          [this.radius, 0],
        ]),
      )
      .attr("class", "crisp")
      .attr("stroke", this.color.axisLine)
      .attr("stroke-width", 1);
    this.svg
      .append("path")
      .attr("transform", transform)
      .attr(
        "d",
        d3.line()([
          [0, 0 - this.radius],
          [0, this.radius],
        ]),
      )
      .attr("class", "crisp")
      .attr("stroke", this.color.axisLine)
      .attr("stroke-width", 1);

    // Add the circle
    this.svg
      .append("circle")
      .attr("transform", transform)
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", this.radius)
      .attr("fill", "none")
      .attr("stroke", this.color.circleContour)
      .attr("stroke-width", 1);

    // add the circle ticks
    this.drawTicks(transform);

    // ---[ Add the slice ]----

    // (0-S)
    this.elementEdge0S = this.svg
      .append("path")
      .attr("transform", transform)
      .attr(
        "d",
        d3.line()([
          [0, 0],
          [this.point.s.x, this.point.s.y],
        ]),
      )
      .attr("stroke", this.color.vectorLine);

    // S
    this.elementNodeS = this.svg
      .append("circle")
      .attr("transform", transform)
      .attr("cx", this.point.s.x)
      .attr("cy", this.point.s.y)
      .attr("r", 7)
      .attr("fill", "none")
      .attr("opacity", 1)
      .attr("stroke", this.color.nodeMutable)
      .attr("stroke-width", 2)
      .style("cursor", "pointer");

    this.elementNodeSLabel = this.svg
      .append("text")
      .attr("transform", transform)
      .attr("x", this.labelOffset(this.point.s).x)
      .attr("y", this.labelOffset(this.point.s).y)
      .attr("fill", this.color.nodeLabel)
      .attr("font-size", "12px")
      .text("S");

    // (0-E)
    this.elementEdge0E = this.svg
      .append("path")
      .attr("transform", transform)
      .attr(
        "d",
        d3.line()([
          [0, 0],
          [this.point.e.x, this.point.e.y],
        ]),
      )
      .attr("stroke", this.color.vectorLine);

    this.elementNodeE = this.svg
      .append("circle")
      .attr("transform", transform)
      .attr("cx", this.point.e.x)
      .attr("cy", this.point.e.y)
      .attr("r", 7)
      .attr("fill", "none")
      .attr("stroke", this.color.vectorLine)
      .attr("stroke-width", 2);

    this.elementNodeELabel = this.svg
      .append("text")
      .attr("transform", transform)
      .attr("x", this.labelOffset(this.point.e).x)
      .attr("y", this.labelOffset(this.point.e).y)
      .attr("fill", this.color.nodeLabel)
      .attr("font-size", "12px")
      .text("E");

    // S-C1
    this.elementEdgeSC1 = this.svg
      .append("path")
      .attr("transform", transform)
      .attr(
        "d",
        d3.line()([
          [this.point.s.x, this.point.s.y],
          [this.point.c1.x, this.point.c1.y],
        ]),
      )
      .attr("stroke", this.color.vectorLine);

    this.elementNodeC1 = this.svg
      .append("circle")
      .attr("transform", transform)
      .attr("cx", this.point.c1.x)
      .attr("cy", this.point.c1.y)
      .attr("r", 5)
      .attr("fill", "none")
      .attr("stroke", this.color.vectorLine)
      .attr("stroke-width", 1);

    this.elementNodeC1Label = this.svg
      .append("text")
      .attr("transform", transform)
      .attr("x", this.labelOffset(this.point.c1).x)
      .attr("y", this.labelOffset(this.point.c1).y)
      .attr("fill", this.color.nodeLabel)
      .attr("font-size", "12px")
      .text("C1");

    // E-C2
    this.elementEdgeEC2 = this.svg
      .append("path")
      .attr("transform", transform)
      .attr(
        "d",
        d3.line()([
          [this.point.e.x, this.point.e.y],
          [this.point.c2.x, this.point.c2.y],
        ]),
      )
      .attr("stroke", this.color.vectorLine);

    this.elementNodeC2 = this.svg
      .append("circle")
      .attr("transform", transform)
      .attr("cx", this.point.c2.x)
      .attr("cy", this.point.c2.y)
      .attr("r", 5)
      .attr("fill", "none")
      .attr("stroke", this.color.vectorLine)
      .attr("stroke-width", 1);

    this.elementNodeC2Label = this.svg
      .append("text")
      .attr("transform", transform)
      .attr("x", this.labelOffset(this.point.c2).x)
      .attr("y", this.labelOffset(this.point.c2).y)
      .attr("fill", this.color.nodeLabel)
      .attr("font-size", "12px")
      .text("C1");

    // arc
    this.elementEdgeSE = this.svg
      .append("path")
      .attr("transform", transform)
      .attr("cx", 0)
      .attr("cy", 0)
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(this.radius)
          .outerRadius(this.radius)
          .startAngle(degToRad(90))
          .endAngle(degToRad(180)),
      )
      .attr("stroke-width", 1)
      .attr("stroke", this.color.vectorLine);

    // Draw the draggable node
    this.draggableNode = this.svg
      .append("circle")
      .attr("transform", transform)
      .attr("cx", this.radius)
      .attr("cy", 0)
      .attr("r", 15)
      .attr("fill", "white")
      .attr("opacity", "0.0")
      .attr("stroke", this.color.draggableOutlineInactive)
      .attr("stroke-width", 2)
      .style("cursor", "pointer")
      .on("mouseover", function (this: any) {
        d3.select(this).raise().attr("opacity", ".75");
      })
      .on("mouseout", function (this: any) {
        d3.select(this).raise().attr("opacity", "0.0");
      })
      .call(
        d3
          .drag()
          .on("start", dragStarted)
          .on("drag", dragging)
          .on("end", dragEnded),
      );

    // Initialize the chart with the initial rotation (0 degrees)
    this.updateChart(0);

    const that = this;

    function dragStarted(this: any) {
      that.startAngle = 0;

      d3.select(this)
        .attr("opacity", "0.75")
        .attr("stroke", that.color.draggableOutlineStarted);
    }

    function dragging(this: any, event: any) {
      // Calculate the new position of the draggable touch point
      const touchPoint = {
        x: event.x - that.width / 2,
        y: event.y - that.height / 2,
      };
      d3.select(this).raise().attr("cx", touchPoint.x).attr("cy", touchPoint.y);

      // Calculate the endAngle
      const adjacent = touchPoint.x;
      const opposite = touchPoint.y * -1; // invert y axis
      const radians = Math.atan(opposite / adjacent);
      const degrees = radToDeg(radians);

      const endAngle =
        360 -
        ((): number => {
          if (touchPoint.x < 0) {
            return degrees + 180;
          }

          if (touchPoint.y > 0) {
            return 360 + degrees;
          }

          return degrees;
        })();

      that.updateChart(endAngle);
    }

    function dragEnded(this: any) {
      that.resetDragTouchPoint();
      // onChange is already called from updateChart, so no need to call it here
    }
  }

  /**
   * Draw the ticks for the circle
   *
   * @param transform
   */
  drawTicks(transform: string) {
    for (let i = 0; i < 360; i += 4.5) {
      const theta = i * (Math.PI / 180);

      const tickLength = i % (360 / 16) ? 3 : 7;

      const x1 = (this.radius - tickLength) * Math.cos(theta);
      const y1 = (this.radius - tickLength) * Math.sin(theta);

      const x2 = (this.radius + tickLength) * Math.cos(theta);
      const y2 = (this.radius + tickLength) * Math.sin(theta);

      this.svg
        .append("path")
        .attr("transform", transform)
        .attr(
          "d",
          d3.line()([
            [x1, y1],
            [x2, y2],
          ]),
        )
        .attr("class", "crisp")
        .attr("stroke", this.color.circleTicks)
        .attr("stroke-width", 1);
    }
  }

  /**
   * Returns the drag touch point to the needle position
   */
  resetDragTouchPoint() {
    this.draggableNode
      .attr("cx", this.pointUpdated.s.x)
      .attr("cy", this.pointUpdated.s.y)
      .attr("stroke", this.color.draggableOutlineInactive);
  }

  updateChart(endAngle: number) {
    this.endAngle = endAngle;

    const d = (value: number) => value.toFixed(1);

    const theta = degToRad(endAngle);

    this.pointUpdated = {
      s: {
        x: this.point.s.x * Math.cos(theta) - this.point.s.y * Math.sin(theta),
        y: this.point.s.x * Math.sin(theta) + this.point.s.y * Math.cos(theta),
      },
      c1: {
        x:
          this.point.c1.x * Math.cos(theta) - this.point.c1.y * Math.sin(theta),
        y:
          this.point.c1.x * Math.sin(theta) + this.point.c1.y * Math.cos(theta),
      },
      c2: {
        x:
          this.point.c2.x * Math.cos(theta) - this.point.c2.y * Math.sin(theta),
        y:
          this.point.c2.x * Math.sin(theta) + this.point.c2.y * Math.cos(theta),
      },
      e: {
        x: this.point.e.x * Math.cos(theta) - this.point.e.y * Math.sin(theta),
        y: this.point.e.x * Math.sin(theta) + this.point.e.y * Math.cos(theta),
      },
    };

    // Raise the onChange event with rotated cubicBezier
    this.onChange(endAngle, this.pointUpdated);

    this.elementNodeS
      .attr("cx", this.pointUpdated.s.x)
      .attr("cy", this.pointUpdated.s.y);

    this.elementNodeSLabel
      .attr("x", this.labelOffset(this.pointUpdated.s).x)
      .attr("y", this.labelOffset(this.pointUpdated.s).y)
      .text(`S = (${d(this.pointUpdated.s.x)}, ${d(this.pointUpdated.s.y)}`);

    this.elementEdge0S.attr(
      "d",
      d3.line()([
        [0, 0],
        [this.pointUpdated.s.x, this.pointUpdated.s.y],
      ]),
    );

    this.elementNodeC1
      .attr("cx", this.pointUpdated.c1.x)
      .attr("cy", this.pointUpdated.c1.y);

    this.elementNodeC1Label
      .attr("x", this.labelOffset(this.pointUpdated.c1).x)
      .attr("y", this.labelOffset(this.pointUpdated.c1).y)
      .text(`C1 = (${d(this.pointUpdated.c1.x)}, ${d(this.pointUpdated.c1.y)}`);

    this.elementEdgeSC1.attr(
      "d",
      d3.line()([
        [this.pointUpdated.s.x, this.pointUpdated.s.y],
        [this.pointUpdated.c1.x, this.pointUpdated.c1.y],
      ]),
    );

    this.elementNodeC2
      .attr("cx", this.pointUpdated.c2.x)
      .attr("cy", this.pointUpdated.c2.y);

    this.elementNodeC2Label
      .attr("x", this.labelOffset(this.pointUpdated.c2).x)
      .attr("y", this.labelOffset(this.pointUpdated.c2).y)
      .text(`C2 = (${d(this.pointUpdated.c2.x)}, ${d(this.pointUpdated.c2.y)}`);

    this.elementEdgeEC2.attr(
      "d",
      d3.line()([
        [this.pointUpdated.e.x, this.pointUpdated.e.y],
        [this.pointUpdated.c2.x, this.pointUpdated.c2.y],
      ]),
    );

    this.elementNodeE
      .attr("cx", this.pointUpdated.e.x)
      .attr("cy", this.pointUpdated.e.y);

    this.elementNodeELabel
      .attr("x", this.labelOffset(this.pointUpdated.e).x)
      .attr("y", this.labelOffset(this.pointUpdated.e).y)
      .text(`E = (${d(this.pointUpdated.e.x)}, ${d(this.pointUpdated.e.y)}`);

    this.elementEdge0E.attr(
      "d",
      d3.line()([
        [0, 0],
        [this.pointUpdated.e.x, this.pointUpdated.e.y],
      ]),
    );

    // arc
    this.elementEdgeSE.attr(
      "d",
      d3
        .arc()
        .innerRadius(this.radius)
        .outerRadius(this.radius)
        .startAngle(degToRad(90 + endAngle))
        .endAngle(degToRad(180 + endAngle)),
    );
  }
}
