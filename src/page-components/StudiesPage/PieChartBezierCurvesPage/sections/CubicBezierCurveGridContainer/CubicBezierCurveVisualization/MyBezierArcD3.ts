import { color } from "../../../libs/Color";
import { BaseVisualization } from "../../../libs/BaseVisualization";
import { Coordinate } from "../../../libs/Coordinate";
import { Visualization } from "../../../libs/Visualization";
import { degToRad, radToDeg } from "../../../libs/trig";
import * as d3 from "d3";

interface MyArc {
  // onChange: (endAngle: number, radius: number) => any;
}

export class MyBezierArcD3
  extends BaseVisualization
  implements Visualization, MyArc
{
  sCircle: any;
  sText: any;
  eCircle: any;
  eText: any;
  c1Circle: any;
  c1Text: any;
  c1Line: any;
  c2Circle: any;
  c2Text: any;
  c2Line: any;
  endAngleLine: any;

  endAngle: any;

  draggableNode: any;
  arc: any;

  axisPadding = 8;
  labelHeight = 21;

  point: any;

  color = {
    axisLine: color.grey["200"],
    pointCalculatedCircle: color.grey["500"],
    pointCalculatedText: color.grey["800"],
    pointInteractiveCircle: color.blue["500"],
    pointInteractiveText: color.blue["800"],
    controlPointLine: color.grey["300"],
    endAngleLine: color.blue["500"],
    arc: color.grey["500"], // this should be similar/same as pointCalculatedCircle
    arcContour: color.grey["100"], // should be darker than the axis line and less than arc
  };

  zeroAt: Coordinate = {
    x: 0,
    y: 0,
  };

  onChange = (endAngle: number, radius: number) => {
    this.onChange(endAngle, radius);
  };

  drawChart(container: HTMLElement) {
    // Calculate the radius
    this.radius = this.width - 3 * this.padding;

    // Calculate the distance between each tick
    const ticksPerRadius = 5;
    this.tickDistance = this.calculateTickDistance(this.radius, ticksPerRadius);

    // Move (0,0) to the center of the svg element
    const center = {
      x: this.width / 2,
      y: this.height / 2,
    };
    this.zeroAt = {
      x: center.x - 2.75 * this.tickDistance,
      y: center.y - 2.5 * this.tickDistance,
    };
    const transform = `translate(${this.zeroAt.x}, ${this.zeroAt.y})`;

    // Create the chart
    this.createChart(container, this.width, this.height);

    // Add the background
    this.addBackground();

    // Add the dot grid
    // this.addDotGrid(this.padding, ticksPerRadius, this.tickDistance, this.width, this.height);
    this.addDotGrid2(this.zeroAt.x, this.zeroAt.y, 10, this.tickDistance / 2);

    // Add the axis lines
    this.svg
      .append("path")
      .attr("transform", transform)
      .attr("class", "crisp")
      .attr(
        "d",
        d3.line()([
          [0, 0],
          [this.radius, 0],
        ]),
      )
      .attr("stroke-width", 1)
      .attr("stroke", this.color.axisLine);
    this.svg
      .append("path")
      .attr("transform", transform)
      .attr("class", "crisp")
      .attr(
        "d",
        d3.line()([
          [0, 0],
          [0, this.radius],
        ]),
      )
      .attr("stroke-width", 1)
      .attr("stroke", this.color.axisLine);

    // Add the axis ticks
    this.addAxisTicks(transform, 9, 0, 10);

    // Calculate the point
    const endAngle = 270;
    this.point = this.calculatePoints(360, endAngle);

    const pointRadius = 7;
    const pointWidth = 2;

    // Add start
    this.sCircle = this.svg
      .append("circle")
      .attr("transform", transform)
      .attr("cx", this.point.s.x)
      .attr("cy", this.point.s.y)
      .attr("r", pointRadius)
      .attr("fill", "none")
      .attr("stroke", this.color.pointCalculatedCircle)
      .attr("stroke-width", pointWidth);
    this.sText = this.svg
      .append("text")
      .attr("transform", transform)
      .attr("x", this.labelOffset(this.point.s).x)
      .attr("y", this.labelOffset(this.point.s).y)
      .attr("fill", this.color.pointCalculatedText)
      .attr("font-size", "12px")
      .text("S");

    // Add end
    this.eCircle = this.svg
      .append("circle")
      .attr("transform", transform)
      .attr("cx", this.point.e.x)
      .attr("cy", this.point.e.y)
      .attr("r", pointRadius)
      .attr("fill", "none")
      .attr("stroke", this.color.pointInteractiveCircle)
      .attr("stroke-width", pointWidth);
    this.eText = this.svg
      .append("text")
      .attr("transform", transform)
      .attr("x", this.labelOffset(this.point.e).x)
      .attr("y", this.labelOffset(this.point.e).y)
      .attr("fill", this.color.pointInteractiveText)
      .attr("font-size", "12px")
      .text("E");

    // Add control point 1
    this.c1Circle = this.svg
      .append("circle")
      .attr("transform", transform)
      .attr("cx", this.point.c1.x)
      .attr("cy", this.point.c1.y)
      .attr("r", 5)
      .attr("fill", "none")
      .attr("stroke", this.color.pointCalculatedCircle);
    this.c1Text = this.svg
      .append("text")
      .attr("transform", transform)
      .attr("x", this.labelOffset(this.point.c1).x)
      .attr("y", this.labelOffset(this.point.c1).y)
      .attr("fill", this.color.pointCalculatedText)
      .attr("font-size", "12px")
      .text("C1");

    // Add control point 2
    this.c2Circle = this.svg
      .append("circle")
      .attr("transform", transform)
      .attr("cx", this.point.c2.x)
      .attr("cy", this.point.c2.y)
      .attr("r", 5)
      .attr("fill", "none")
      .attr("stroke", this.color.pointCalculatedCircle);
    this.c2Text = this.svg
      .append("text")
      .attr("transform", transform)
      .attr("x", this.labelOffset(this.point.c2).x)
      .attr("y", this.labelOffset(this.point.c2).y)
      .attr("fill", this.color.pointCalculatedText)
      .attr("font-size", "12px")
      .text("C2");

    // Add control point 1 line
    this.c1Line = this.svg
      .append("path")
      .attr("transform", transform)
      .attr(
        "d",
        d3.line()([
          [this.point.s.x, this.point.s.y],
          [this.point.c1.x, this.point.c1.y],
        ]),
      )
      .attr("stroke", this.color.controlPointLine);

    // Add control point 2 line
    this.c2Line = this.svg
      .append("path")
      .attr("transform", transform)
      .attr(
        "d",
        d3.line()([
          [this.point.e.x, this.point.e.y],
          [this.point.c2.x, this.point.c2.y],
        ]),
      )
      .attr("stroke", this.color.controlPointLine);

    // Add the end angle line
    this.endAngleLine = this.svg
      .append("path")
      .attr("transform", transform)
      .attr(
        "d",
        d3.line()([
          [0, 0],
          [this.point.e.x, this.point.e.y],
        ]),
      )
      .attr("stroke", this.color.endAngleLine);

    // Add the arc contour (that path which the arc must follow)
    this.svg
      .append("path")
      .attr("transform", transform)
      .attr("class", "crisp")
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
      .attr("stroke", this.color.arcContour);

    // Add the projected arc
    this.arc = this.svg
      .append("path")
      .attr("transform", transform)
      .attr("class", "my-arc")
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
      .attr("stroke-width", 2)
      .attr("stroke", this.color.arc);

    // Draw the draggable node
    this.draggableNode = this.svg
      .append("circle")
      .attr("transform", transform)
      .attr("cx", this.point.e.x)
      .attr("cy", this.point.e.y)
      .attr("r", 15)
      .attr("fill", "white")
      .attr("opacity", "0.0")
      .attr("stroke", color.grey["200"])
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

    const that = this;

    function dragStarted(this: any) {
      d3.select(this).attr("opacity", "0.75").attr("stroke", color.lime["500"]);
    }

    function dragging(this: any, event: any) {
      // Calculate the new position of the draggable touch point (this match needs to match the transform)
      const touchPoint: Coordinate = {
        x: event.x - that.zeroAt.x,
        y: event.y - that.zeroAt.y,
      };
      d3.select(this).raise().attr("cx", touchPoint.x).attr("cy", touchPoint.y);

      // Calculate the endAngle
      const yAxisDirection = -1;
      const adjacent = touchPoint.x;
      const opposite = touchPoint.y * yAxisDirection;
      const radians = Math.atan(opposite / adjacent);
      const degrees = radToDeg(radians);

      const endAngle = ((): number => {
        if (touchPoint.x < 0) {
          return 270;
        }

        if (touchPoint.y < 0) {
          return 359.9;
        }

        return 360 + degrees;
      })();

      that.updateChart(endAngle);
    }

    function dragEnded(this: any) {
      that.resetDragTouchPoint();

      // Raise the onChange event
      that.onChange(that.endAngle, that.radius);
    }
  }

  resetDragTouchPoint(): void {
    this.draggableNode
      .attr("cx", this.point.e.x)
      .attr("cy", this.point.e.y)
      .attr("stroke", color.grey["200"]);
  }

  updateChart(endAngle: number) {
    this.endAngle = endAngle;

    const d = (value: number) => value.toFixed(1);

    // Reverse the circle (to work with d3's circle)
    const arcEndAngle = 360 - endAngle + 90;

    this.arc.attr(
      "d",
      d3
        .arc()
        .innerRadius(this.radius)
        .outerRadius(this.radius)
        .startAngle(degToRad(90))
        .endAngle(degToRad(arcEndAngle)),
    );

    // Calculate the point
    this.point = this.calculatePoints(360, endAngle);

    // End
    this.eCircle.attr("cx", this.point.e.x).attr("cy", this.point.e.y);
    this.eText
      .attr("x", this.point.e.x + this.axisPadding)
      .attr("y", this.point.e.y + this.labelHeight)
      .text(`E = (${d(this.point.e.x)}, ${d(this.point.e.y)})`);
    this.endAngleLine.attr(
      "d",
      d3.line()([
        [0, 0],
        [this.point.e.x, this.point.e.y],
      ]),
    );

    // Control Point 2
    this.c2Circle.attr("cx", this.point.c2.x).attr("cy", this.point.c2.y);
    this.c2Line.attr(
      "d",
      d3.line()([
        [this.point.e.x, this.point.e.y],
        [this.point.c2.x, this.point.c2.y],
      ]),
    );
    this.c2Text
      .attr("x", this.labelOffset(this.point.c2).x)
      .attr("y", this.labelOffset(this.point.c2).y)
      .text(`C2 = (${d(this.point.c2.x)}, ${d(this.point.c2.y)})`);

    // Control Point 1
    this.c1Circle.attr("cx", this.point.c1.x).attr("cy", this.point.c1.y);
    this.c1Line.attr(
      "d",
      d3.line()([
        [this.point.s.x, this.point.s.y],
        [this.point.c1.x, this.point.c1.y],
      ]),
    );
    this.c1Text
      .attr("x", this.labelOffset(this.point.c1).x)
      .attr("y", this.labelOffset(this.point.c1).y)
      .text(`C1 = (${d(this.point.c1.x)}, ${d(this.point.c1.y)})`);

    // Start
    this.sText.text(`S = (${d(this.point.s.x)}, ${d(this.point.s.y)})`);
  }
}
