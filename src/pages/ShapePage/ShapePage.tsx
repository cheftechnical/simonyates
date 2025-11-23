export default function ShapePage() {
  const debug = true; // Set to true to show reference lines, q-numbers, p-numbers, circle, and center cross
  const variant: "single" | "communal" = "single"; // Variant type: "single" or "communal"
  const radius = 250; // Circle radius in pixels
  const diameter = radius * 2; // Circle diameter
  // SVG size needs to accommodate grid lines extending 2r beyond circle
  // Lines extend radius + 2*radius from center, so total size = 2 * (radius + 2*radius) = 6 * radius
  const svgSize = 6 * radius;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  
  // Calculate hexagon vertices (flat top orientation)
  // Angles: 0°, 60°, 120°, 180°, 240°, 300°
  const angles = [0, 60, 120, 180, 240, 300];
  const vertices = angles.map((angle, index) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(rad),
      y: centerY - radius * Math.sin(rad),
      number: index,
    };
  });
  const points = vertices.map(v => `${v.x},${v.y}`).join(' ');

  // Calculate grid lines perpendicular to each hexagon side
  // Ordered clockwise from top (12 o'clock): 90°, 150°, 210°, 270°, 330°, 30°
  const perpendicularAngles = [90, 150, 210, 270, 330, 30];
  const lineLength = radius + 2 * radius; // Extend 2r beyond the circle edge
  const gridLines = perpendicularAngles.map((angle) => {
    const rad = (angle * Math.PI) / 180;
    const x1 = centerX - lineLength * Math.cos(rad);
    const y1 = centerY + lineLength * Math.sin(rad);
    const x2 = centerX + lineLength * Math.cos(rad);
    const y2 = centerY - lineLength * Math.sin(rad);
    // Calculate angle for sorting (use the outward direction)
    const lineAngle = angle; // Perpendicular angle
    return { x1, y1, x2, y2, angle: lineAngle, type: 'grid' };
  });

  // Lines connecting vertex pairs: 1-3, 0-4, 0-2, 5-3, and all similar pairs
  // Generate all unique pairs (opposite vertices and skip-one pairs)
  const vertexPairs: Array<[number, number]> = [];
  for (let i = 0; i < vertices.length; i++) {
    for (let j = i + 1; j < vertices.length; j++) {
      const diff = Math.abs(j - i);
      // Include opposite pairs (diff = 3) and skip-one pairs (diff = 2 or 4)
      if (diff === 2 || diff === 3 || diff === 4) {
        vertexPairs.push([i, j]);
      }
    }
  }
  const vertexConnectionLines = vertexPairs.map(([a, b]) => {
    const v1 = vertices[a];
    const v2 = vertices[b];
    // Calculate direction vector
    const dx = v2.x - v1.x;
    const dy = v2.y - v1.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const unitX = dx / length;
    const unitY = dy / length;
    
    // Calculate angle of line from center (for sorting) - use the midpoint
    const midX = (v1.x + v2.x) / 2;
    const midY = (v1.y + v2.y) / 2;
    const lineAngle = Math.atan2(centerY - midY, midX - centerX) * (180 / Math.PI);
    // Normalize to 0-360 range
    const normalizedAngle = lineAngle < 0 ? lineAngle + 360 : lineAngle;
    
    // Extend 1d (diameter = 2*radius) beyond each vertex
    return {
      x1: v1.x - diameter * unitX,
      y1: v1.y - diameter * unitY,
      x2: v2.x + diameter * unitX,
      y2: v2.y + diameter * unitY,
      angle: normalizedAngle,
      type: 'vertex',
      vertexPair: [a, b] as [number, number],
    };
  });
  
  // Manually order lines: 0 = top grid line, then vertex connection lines in specific order
  // Find the top grid line (90°)
  const topGridLine = gridLines.find(line => line.angle === 90)!;
  
  // Find vertex connection lines by their vertex pairs
  const findVertexLine = (v1: number, v2: number) => {
    return vertexConnectionLines.find(line => 
      (line.vertexPair[0] === v1 && line.vertexPair[1] === v2) ||
      (line.vertexPair[0] === v2 && line.vertexPair[1] === v1)
    );
  };
  
  // Order: 0 = top grid, 1 = 1-3, 2 = 0-4, then continue with remaining lines sorted by angle
  const line1to3 = findVertexLine(1, 3);
  const line0to4 = findVertexLine(0, 4);
  
  if (!line1to3) {
    console.error('Line 1-3 not found. Available vertex pairs:', vertexPairs);
  }
  
  const orderedLines: Array<typeof gridLines[0] | typeof vertexConnectionLines[0]> = [
    topGridLine,
    ...(line1to3 ? [line1to3] : []),
    ...(line0to4 ? [line0to4] : []),
  ];
  
  // Add remaining lines sorted by angle
  const remainingLines = [
    ...gridLines.filter(line => line.angle !== 90),
    ...vertexConnectionLines.filter(line => 
      !(line.vertexPair[0] === 1 && line.vertexPair[1] === 3) &&
      !(line.vertexPair[0] === 0 && line.vertexPair[1] === 4)
    ),
  ]
    .map(line => {
      let adjustedAngle = line.angle - 90;
      if (adjustedAngle < 0) adjustedAngle += 360;
      return { ...line, adjustedAngle };
    })
    .sort((a, b) => a.adjustedAngle - b.adjustedAngle);
  
  const allLines = [...orderedLines, ...remainingLines].map((line, index) => ({
    ...line,
    number: index,
  }));

  // Calculate q0 position (top grid line end point)
  const q0 = { x: topGridLine.x2, y: topGridLine.y2 };
  // Calculate q12 position (opposite end of top grid line)
  const q12 = { x: topGridLine.x1, y: topGridLine.y1 };
  
  // Find grid line at 150° to get q8 and q20 positions
  const gridLine150 = gridLines.find(line => line.angle === 150)!;
  const q8 = { x: gridLine150.x1, y: gridLine150.y1 };
  const q20 = { x: gridLine150.x2, y: gridLine150.y2 };
  
  // Find grid line at 210° to get q4 and q16 positions
  const gridLine210 = gridLines.find(line => line.angle === 210)!;
  const q4 = { x: gridLine210.x1, y: gridLine210.y1 };
  const q16 = { x: gridLine210.x2, y: gridLine210.y2 };
  
  // Find line for intersection calculation (line1to3 is already declared above)
  const line5to2 = findVertexLine(5, 2); // q10-q23 line
  
  // Calculate intersection point of q3-q17 (line 1-3) and q10-q23 (line 5-2)
  // This is q0L
  let q0L = { x: 0, y: 0 };
  if (line1to3 && line5to2) {
    // Line 1: through (x1, y1) and (x2, y2) of line1to3
    const x1_1 = line1to3.x1;
    const y1_1 = line1to3.y1;
    const x2_1 = line1to3.x2;
    const y2_1 = line1to3.y2;
    
    // Line 2: through (x1, y1) and (x2, y2) of line5to2
    const x1_2 = line5to2.x1;
    const y1_2 = line5to2.y1;
    const x2_2 = line5to2.x2;
    const y2_2 = line5to2.y2;
    
    // Use parametric line intersection formula to handle vertical lines
    // Line 1: P = P1 + t * (P2 - P1)
    // Line 2: Q = Q1 + s * (Q2 - Q1)
    // Solve for t and s where P = Q
    
    const dx1 = x2_1 - x1_1;
    const dy1 = y2_1 - y1_1;
    const dx2 = x2_2 - x1_2;
    const dy2 = y2_2 - y1_2;
    
    const denominator = dx1 * dy2 - dy1 * dx2;
    
    if (Math.abs(denominator) > 0.0001) { // Lines are not parallel
      const t = ((x1_2 - x1_1) * dy2 - (y1_2 - y1_1) * dx2) / denominator;
      const x = x1_1 + t * dx1;
      const y = y1_1 + t * dy1;
      q0L = { x, y };
    }
  }
  
  // Create a new reference line parallel to q0-q12 (vertical) through q0L
  // q0-q12 is the top grid line at 90°, which is vertical (x constant, y varies)
  const q0LLineLength = lineLength; // Same length as other grid lines
  const q0LLine = {
    x1: q0L.x,
    y1: q0L.y - q0LLineLength,
    x2: q0L.x,
    y2: q0L.y + q0LLineLength,
    angle: 90, // Vertical, same as q0-q12
    type: 'reference' as const,
  };
  
  // Find lines for q0R intersection calculation
  const line1to4 = findVertexLine(1, 4); // q2-q14 line
  const line0to2 = findVertexLine(0, 2); // q7-q21 line
  
  // Calculate intersection point of q2-q14 (line 1-4) and q7-q21 (line 0-2)
  // This is q0R
  let q0R = { x: 0, y: 0 };
  if (line1to4 && line0to2) {
    // Line 1: through (x1, y1) and (x2, y2) of line1to4
    const x1_1 = line1to4.x1;
    const y1_1 = line1to4.y1;
    const x2_1 = line1to4.x2;
    const y2_1 = line1to4.y2;
    
    // Line 2: through (x1, y1) and (x2, y2) of line0to2
    const x1_2 = line0to2.x1;
    const y1_2 = line0to2.y1;
    const x2_2 = line0to2.x2;
    const y2_2 = line0to2.y2;
    
    // Use parametric line intersection formula to handle vertical lines
    const dx1 = x2_1 - x1_1;
    const dy1 = y2_1 - y1_1;
    const dx2 = x2_2 - x1_2;
    const dy2 = y2_2 - y1_2;
    
    const denominator = dx1 * dy2 - dy1 * dx2;
    
    if (Math.abs(denominator) > 0.0001) { // Lines are not parallel
      const t = ((x1_2 - x1_1) * dy2 - (y1_2 - y1_1) * dx2) / denominator;
      const x = x1_1 + t * dx1;
      const y = y1_1 + t * dy1;
      q0R = { x, y };
    }
  }
  
  // Create a new reference line parallel to q0-q12 (vertical) through q0R
  const q0RLine = {
    x1: q0R.x,
    y1: q0R.y - q0LLineLength,
    x2: q0R.x,
    y2: q0R.y + q0LLineLength,
    angle: 90, // Vertical, same as q0-q12
    type: 'reference' as const,
  };
  
  // Create a new reference line parallel to q4-q16 (210°) through q0R
  // q0R is the intersection of q7-q21 and q2-q14
  // q4L is the line that passes through q0R and is parallel to q4-q16
  const q4LLineLength = lineLength; // Same length as other grid lines
  const q4LLine = {
    x1: q0R.x - q4LLineLength * Math.cos((210 * Math.PI) / 180),
    y1: q0R.y + q4LLineLength * Math.sin((210 * Math.PI) / 180),
    x2: q0R.x + q4LLineLength * Math.cos((210 * Math.PI) / 180),
    y2: q0R.y - q4LLineLength * Math.sin((210 * Math.PI) / 180),
    angle: 210, // Same as q4-q16
    type: 'reference' as const,
  };
  
  // Find lines for q4R intersection calculation
  const line5to3 = findVertexLine(5, 3); // q9-q19 line
  // line1to4 is already defined above (q2-q14 line)
  
  // Calculate intersection point of q9-q19 (line 5-3) and q2-q14 (line 1-4)
  // This is q4R
  let q4R = { x: 0, y: 0 };
  if (line5to3 && line1to4) {
    // Line 1: through (x1, y1) and (x2, y2) of line5to3
    const x1_1 = line5to3.x1;
    const y1_1 = line5to3.y1;
    const x2_1 = line5to3.x2;
    const y2_1 = line5to3.y2;
    
    // Line 2: through (x1, y1) and (x2, y2) of line1to4
    const x1_2 = line1to4.x1;
    const y1_2 = line1to4.y1;
    const x2_2 = line1to4.x2;
    const y2_2 = line1to4.y2;
    
    // Use parametric line intersection formula to handle vertical lines
    const dx1 = x2_1 - x1_1;
    const dy1 = y2_1 - y1_1;
    const dx2 = x2_2 - x1_2;
    const dy2 = y2_2 - y1_2;
    
    const denominator = dx1 * dy2 - dy1 * dx2;
    
    if (Math.abs(denominator) > 0.0001) { // Lines are not parallel
      const t = ((x1_2 - x1_1) * dy2 - (y1_2 - y1_1) * dx2) / denominator;
      const x = x1_1 + t * dx1;
      const y = y1_1 + t * dy1;
      q4R = { x, y };
    }
  }
  
  // Create a new reference line parallel to q4-q16 (210°) through q4R
  const q4RLineLength = lineLength; // Same length as other grid lines
  const q4RLine = {
    x1: q4R.x - q4RLineLength * Math.cos((210 * Math.PI) / 180),
    y1: q4R.y + q4RLineLength * Math.sin((210 * Math.PI) / 180),
    x2: q4R.x + q4RLineLength * Math.cos((210 * Math.PI) / 180),
    y2: q4R.y - q4RLineLength * Math.sin((210 * Math.PI) / 180),
    angle: 210, // Same as q4-q16
    type: 'reference' as const,
  };
  
  // Calculate intersection point of q3-q17 (line 1-3) and q10-q22 (line 5-2)
  // This is q8L
  // line1to3 and line5to2 are already defined above
  let q8L = { x: 0, y: 0 };
  if (line1to3 && line5to2) {
    // Line 1: through (x1, y1) and (x2, y2) of line1to3
    const x1_1 = line1to3.x1;
    const y1_1 = line1to3.y1;
    const x2_1 = line1to3.x2;
    const y2_1 = line1to3.y2;
    
    // Line 2: through (x1, y1) and (x2, y2) of line5to2
    const x1_2 = line5to2.x1;
    const y1_2 = line5to2.y1;
    const x2_2 = line5to2.x2;
    const y2_2 = line5to2.y2;
    
    // Use parametric line intersection formula to handle vertical lines
    const dx1 = x2_1 - x1_1;
    const dy1 = y2_1 - y1_1;
    const dx2 = x2_2 - x1_2;
    const dy2 = y2_2 - y1_2;
    
    const denominator = dx1 * dy2 - dy1 * dx2;
    
    if (Math.abs(denominator) > 0.0001) { // Lines are not parallel
      const t = ((x1_2 - x1_1) * dy2 - (y1_2 - y1_1) * dx2) / denominator;
      const x = x1_1 + t * dx1;
      const y = y1_1 + t * dy1;
      q8L = { x, y };
    }
  }
  
  // Create a new reference line parallel to q8-q20 (150°) through q8L
  const q8LLineLength = lineLength; // Same length as other grid lines
  const q8LLine = {
    x1: q8L.x - q8LLineLength * Math.cos((150 * Math.PI) / 180),
    y1: q8L.y + q8LLineLength * Math.sin((150 * Math.PI) / 180),
    x2: q8L.x + q8LLineLength * Math.cos((150 * Math.PI) / 180),
    y2: q8L.y - q8LLineLength * Math.sin((150 * Math.PI) / 180),
    angle: 150, // Same as q8-q20
    type: 'reference' as const,
  };
  
  // Calculate intersection point of q5-q15 (line 0-4) and q10-q22 (line 5-2)
  // This is q8R
  // line0to4 and line5to2 are already defined above
  let q8R = { x: 0, y: 0 };
  if (line0to4 && line5to2) {
    // Line 1: through (x1, y1) and (x2, y2) of line0to4
    const x1_1 = line0to4.x1;
    const y1_1 = line0to4.y1;
    const x2_1 = line0to4.x2;
    const y2_1 = line0to4.y2;
    
    // Line 2: through (x1, y1) and (x2, y2) of line5to2
    const x1_2 = line5to2.x1;
    const y1_2 = line5to2.y1;
    const x2_2 = line5to2.x2;
    const y2_2 = line5to2.y2;
    
    // Use parametric line intersection formula to handle vertical lines
    const dx1 = x2_1 - x1_1;
    const dy1 = y2_1 - y1_1;
    const dx2 = x2_2 - x1_2;
    const dy2 = y2_2 - y1_2;
    
    const denominator = dx1 * dy2 - dy1 * dx2;
    
    if (Math.abs(denominator) > 0.0001) { // Lines are not parallel
      const t = ((x1_2 - x1_1) * dy2 - (y1_2 - y1_1) * dx2) / denominator;
      const x = x1_1 + t * dx1;
      const y = y1_1 + t * dy1;
      q8R = { x, y };
    }
  }
  
  // Create a new reference line parallel to q8-q20 (150°) through q8R
  const q8RLineLength = lineLength; // Same length as other grid lines
  const q8RLine = {
    x1: q8R.x - q8RLineLength * Math.cos((150 * Math.PI) / 180),
    y1: q8R.y + q8RLineLength * Math.sin((150 * Math.PI) / 180),
    x2: q8R.x + q8RLineLength * Math.cos((150 * Math.PI) / 180),
    y2: q8R.y - q8RLineLength * Math.sin((150 * Math.PI) / 180),
    angle: 150, // Same as q8-q20
    type: 'reference' as const,
  };
  
  // Calculate arc from p1 to p2 with center at q0 and radius 2r (for single variant)
  const p0 = vertices[0];
  const p1 = vertices[1];
  const p2 = vertices[2];
  const p3 = vertices[3];
  const p4 = vertices[4];
  const p5 = vertices[5];
  const arcRadius = 2 * radius; // 2r
  
  // Calculate angles from center q0 to p1 and p2
  const angle1 = Math.atan2(p1.y - q0.y, p1.x - q0.x) * (180 / Math.PI);
  const angle2 = Math.atan2(p2.y - q0.y, p2.x - q0.x) * (180 / Math.PI);
  
  // Calculate arc sweep (difference in angles)
  let sweepAngle = angle2 - angle1;
  if (sweepAngle < 0) sweepAngle += 360;
  
  // Determine large-arc-flag (1 if sweep > 180°, 0 otherwise)
  const largeArcFlag = sweepAngle > 180 ? 1 : 0;
  // Determine sweep-flag (1 for clockwise, 0 for counterclockwise)
  // Since we're going from p1 to p2, and p1 is at 60° and p2 is at 120°, we go clockwise
  const sweepFlag = 1;
  
  // Create arc path from p1 to p2
  const arcPath1 = variant === "single" 
    ? `M ${p1.x} ${p1.y} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} ${sweepFlag} ${p2.x} ${p2.y}`
    : "";
  
  // Calculate arc from p2 to p3 with center at q20 and radius 2r (for single variant)
  const angle2_q20 = Math.atan2(p2.y - q20.y, p2.x - q20.x) * (180 / Math.PI);
  const angle3_q20 = Math.atan2(p3.y - q20.y, p3.x - q20.x) * (180 / Math.PI);
  
  // Calculate arc sweep (difference in angles)
  let sweepAngle_q20 = angle3_q20 - angle2_q20;
  if (sweepAngle_q20 < 0) sweepAngle_q20 += 360;
  
  // Determine large-arc-flag (1 if sweep > 180°, 0 otherwise)
  const largeArcFlag_q20 = sweepAngle_q20 > 180 ? 1 : 0;
  // Determine sweep-flag (1 for clockwise, 0 for counterclockwise)
  const sweepFlag_q20 = 1;
  
  // Create arc path from p2 to p3
  const arcPath2 = variant === "single" 
    ? `M ${p2.x} ${p2.y} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag_q20} ${sweepFlag_q20} ${p3.x} ${p3.y}`
    : "";
  
  // Calculate arc from p3 to p4 with center at q16 and radius 2r (for single variant)
  const angle3_q16 = Math.atan2(p3.y - q16.y, p3.x - q16.x) * (180 / Math.PI);
  const angle4_q16 = Math.atan2(p4.y - q16.y, p4.x - q16.x) * (180 / Math.PI);
  
  // Calculate arc sweep (difference in angles)
  let sweepAngle_q16 = angle4_q16 - angle3_q16;
  if (sweepAngle_q16 < 0) sweepAngle_q16 += 360;
  
  // Determine large-arc-flag (1 if sweep > 180°, 0 otherwise)
  const largeArcFlag_q16 = sweepAngle_q16 > 180 ? 1 : 0;
  // Determine sweep-flag (1 for clockwise, 0 for counterclockwise)
  const sweepFlag_q16 = 1;
  
  // Create arc path from p3 to p4
  const arcPath3 = variant === "single" 
    ? `M ${p3.x} ${p3.y} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag_q16} ${sweepFlag_q16} ${p4.x} ${p4.y}`
    : "";
  
  // Calculate arc from p4 to p5 with center at q12 and radius 2r (for single variant)
  const angle4_q12 = Math.atan2(p4.y - q12.y, p4.x - q12.x) * (180 / Math.PI);
  const angle5_q12 = Math.atan2(p5.y - q12.y, p5.x - q12.x) * (180 / Math.PI);
  
  // Calculate arc sweep (difference in angles)
  let sweepAngle_q12 = angle5_q12 - angle4_q12;
  if (sweepAngle_q12 < 0) sweepAngle_q12 += 360;
  
  // Determine large-arc-flag (1 if sweep > 180°, 0 otherwise)
  const largeArcFlag_q12 = sweepAngle_q12 > 180 ? 1 : 0;
  // Determine sweep-flag (1 for clockwise, 0 for counterclockwise)
  const sweepFlag_q12 = 1;
  
  // Create arc path from p4 to p5
  const arcPath4 = variant === "single" 
    ? `M ${p4.x} ${p4.y} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag_q12} ${sweepFlag_q12} ${p5.x} ${p5.y}`
    : "";
  
  // Calculate arc from p5 to p0 with center at q8 and radius 2r (for single variant)
  const angle5_q8 = Math.atan2(p5.y - q8.y, p5.x - q8.x) * (180 / Math.PI);
  const angle0_q8 = Math.atan2(p0.y - q8.y, p0.x - q8.x) * (180 / Math.PI);
  
  // Calculate arc sweep (difference in angles)
  let sweepAngle_q8 = angle0_q8 - angle5_q8;
  if (sweepAngle_q8 < 0) sweepAngle_q8 += 360;
  
  // Determine large-arc-flag (1 if sweep > 180°, 0 otherwise)
  const largeArcFlag_q8 = sweepAngle_q8 > 180 ? 1 : 0;
  // Determine sweep-flag (1 for clockwise, 0 for counterclockwise)
  const sweepFlag_q8 = 1;
  
  // Create arc path from p5 to p0
  const arcPath5 = variant === "single" 
    ? `M ${p5.x} ${p5.y} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag_q8} ${sweepFlag_q8} ${p0.x} ${p0.y}`
    : "";
  
  // Calculate arc from p0 to p1 with center at q4 and radius 2r (for single variant)
  const angle0_q4 = Math.atan2(p0.y - q4.y, p0.x - q4.x) * (180 / Math.PI);
  const angle1_q4 = Math.atan2(p1.y - q4.y, p1.x - q4.x) * (180 / Math.PI);
  
  // Calculate arc sweep (difference in angles)
  let sweepAngle_q4 = angle1_q4 - angle0_q4;
  if (sweepAngle_q4 < 0) sweepAngle_q4 += 360;
  
  // Determine large-arc-flag (1 if sweep > 180°, 0 otherwise)
  const largeArcFlag_q4 = sweepAngle_q4 > 180 ? 1 : 0;
  // Determine sweep-flag (1 for clockwise, 0 for counterclockwise)
  const sweepFlag_q4 = 1;
  
  // Create arc path from p0 to p1
  const arcPath6 = variant === "single" 
    ? `M ${p0.x} ${p0.y} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag_q4} ${sweepFlag_q4} ${p1.x} ${p1.y}`
    : "";

  return (
    <div className="flex items-center justify-center min-h-screen">
      <svg width={svgSize} height={svgSize} viewBox={`-0.5 -0.5 ${svgSize + 1} ${svgSize + 1}`}>
        {/* All reference lines */}
        {debug && allLines.map((line, index) => (
          <g key={index}>
            {/* Render gray line for all lines except the ones we're marking separately */}
            {!('vertexPair' in line && (
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 1 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 5) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 5 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 1) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 1 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 4) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 4 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 1) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 1 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 3) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 3 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 1) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 2 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 4) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 4 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 2) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 0 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 4) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 4 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 0) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 0 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 3) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 3 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 0) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 0 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 2) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 2 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 0) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 5 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 3) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 3 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 5) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 5 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 2) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 2 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 5)
            )) && (
              <line
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-50"
              />
            )}
            {/* Reference numbers */}
            {index === 0 && (
              <>
                <text
                  x={line.x2}
                  y={line.y2}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q0
                </text>
                <text
                  x={line.x1}
                  y={line.y1}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q12
                </text>
              </>
            )}
            {/* Reference number 8 - grid line at 150° */}
            {'type' in line && line.type === 'grid' && line.angle === 150 && (
              <>
                <text
                  x={line.x1}
                  y={line.y1}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q8
                </text>
                <text
                  x={line.x2}
                  y={line.y2}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q20
                </text>
              </>
            )}
            {/* Reference number 4 - grid line at 210° */}
            {'type' in line && line.type === 'grid' && line.angle === 210 && (
              <>
                <text
                  x={line.x1}
                  y={line.y1}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q4
                </text>
                <text
                  x={line.x2}
                  y={line.y2}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q16
                </text>
              </>
            )}
            {/* Mark line through points 0-4 (vertices 0-4) and label it 5 */}
            {'vertexPair' in line && (
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 0 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 4) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 4 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 0)
            ) && (
              <>
                <line
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-50"
                />
                <text
                  x={line.x1}
                  y={line.y1}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q5
                </text>
                <text
                  x={line.x2}
                  y={line.y2}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q15
                </text>
              </>
            )}
            {/* Mark line through points 0-3 (vertices 0-3) and label it 6 */}
            {'vertexPair' in line && (
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 0 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 3) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 3 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 0)
            ) && (
              <>
                <line
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-50"
                />
                <text
                  x={line.x1}
                  y={line.y1}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q6
                </text>
                <text
                  x={line.x2}
                  y={line.y2}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q18
                </text>
              </>
            )}
            {/* Mark line through points 0-2 (vertices 0-2) and label it 7 */}
            {'vertexPair' in line && (
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 0 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 2) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 2 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 0)
            ) && (
              <>
                <line
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-50"
                />
                <text
                  x={line.x1}
                  y={line.y1}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q7
                </text>
                <text
                  x={line.x2}
                  y={line.y2}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q21
                </text>
              </>
            )}
            {/* Mark line through points 5-3 (vertices 5-3) and label it 9 */}
            {'vertexPair' in line && (
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 5 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 3) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 3 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 5)
            ) && (
              <>
                <line
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-50"
                />
                <text
                  x={line.x1}
                  y={line.y1}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q19
                </text>
                <text
                  x={line.x2}
                  y={line.y2}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q9
                </text>
              </>
            )}
            {/* Mark line through points 5-2 (vertices 5-2) and label it 10 */}
            {'vertexPair' in line && (
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 5 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 2) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 2 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 5)
            ) && (
              <>
                <line
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-50"
                />
                <text
                  x={line.x1}
                  y={line.y1}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q22
                </text>
                <text
                  x={line.x2}
                  y={line.y2}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q10
                </text>
              </>
            )}
            {/* Mark line through points 1-5 (vertices 1-5) and label it 1 */}
            {'vertexPair' in line && (
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 1 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 5) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 5 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 1)
            ) && (
              <>
                <line
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-50"
                />
                <text
                  x={line.x1}
                  y={line.y1}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q1
                </text>
                <text
                  x={line.x2}
                  y={line.y2}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q11
                </text>
              </>
            )}
            {/* Mark line through points 1-4 (vertices 1-4) and label it 2 */}
            {'vertexPair' in line && (
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 1 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 4) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 4 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 1)
            ) && (
              <>
                <line
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-50"
                />
                <text
                  x={line.x1}
                  y={line.y1}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q2
                </text>
                <text
                  x={line.x2}
                  y={line.y2}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q14
                </text>
              </>
            )}
            {/* Mark line through points 1-3 (vertices 1-3) and label it 3 */}
            {'vertexPair' in line && (
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 1 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 3) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 3 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 1)
            ) && (
              <>
                <line
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-50"
                />
                <text
                  x={line.x1}
                  y={line.y1}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q3
                </text>
                <text
                  x={line.x2}
                  y={line.y2}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q17
                </text>
              </>
            )}
            {/* Mark line through points 2-4 (vertices 2-4) and label it 23 - parallel to lines 3 and 5 */}
            {'vertexPair' in line && (
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 2 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 4) ||
              ((line as typeof vertexConnectionLines[0]).vertexPair[0] === 4 && (line as typeof vertexConnectionLines[0]).vertexPair[1] === 2)
            ) && (
              <>
                <line
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-50"
                />
                <text
                  x={line.x1}
                  y={line.y1}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q23
                </text>
                <text
                  x={line.x2}
                  y={line.y2}
                  fontSize="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="currentColor"
                  className="text-gray-200"
                >
                  q13
                </text>
              </>
            )}
          </g>
        ))}
        {/* New reference line parallel to q0 through q0L */}
        {debug && (
          <>
            <line
              x1={q0LLine.x1}
              y1={q0LLine.y1}
              x2={q0LLine.x2}
              y2={q0LLine.y2}
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-50"
            />
            <text
              x={q0LLine.x1}
              y={q0LLine.y1}
              fontSize="16"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
              className="text-gray-200"
            >
              q0L
            </text>
          </>
        )}
        {/* New reference line parallel to q0-q12 through q0R */}
        {debug && (
          <>
            <line
              x1={q0RLine.x1}
              y1={q0RLine.y1}
              x2={q0RLine.x2}
              y2={q0RLine.y2}
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-50"
            />
            <text
              x={q0RLine.x1}
              y={q0RLine.y1}
              fontSize="16"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
              className="text-gray-200"
            >
              q0R
            </text>
          </>
        )}
        {/* New reference line parallel to q4-q16 through q4L */}
        {debug && (
          <>
            <line
              x1={q4LLine.x1}
              y1={q4LLine.y1}
              x2={q4LLine.x2}
              y2={q4LLine.y2}
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-50"
            />
            <text
              x={q4LLine.x1}
              y={q4LLine.y1}
              fontSize="16"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
              className="text-gray-200"
            >
              q4L
            </text>
          </>
        )}
        {/* New reference line parallel to q4-q16 through q4R */}
        {debug && (
          <>
            <line
              x1={q4RLine.x1}
              y1={q4RLine.y1}
              x2={q4RLine.x2}
              y2={q4RLine.y2}
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-50"
            />
            <text
              x={q4RLine.x1}
              y={q4RLine.y1}
              fontSize="16"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
              className="text-gray-200"
            >
              q4R
            </text>
          </>
        )}
        {/* New reference line parallel to q8-q20 through q8L */}
        {debug && (
          <>
            <line
              x1={q8LLine.x1}
              y1={q8LLine.y1}
              x2={q8LLine.x2}
              y2={q8LLine.y2}
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-50"
            />
            <text
              x={q8LLine.x1}
              y={q8LLine.y1}
              fontSize="16"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
              className="text-gray-200"
            >
              q8L
            </text>
          </>
        )}
        {/* New reference line parallel to q8-q20 through q8R */}
        {debug && (
          <>
            <line
              x1={q8RLine.x1}
              y1={q8RLine.y1}
              x2={q8RLine.x2}
              y2={q8RLine.y2}
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-50"
            />
            <text
              x={q8RLine.x1}
              y={q8RLine.y1}
              fontSize="16"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
              className="text-gray-200"
            >
              q8R
            </text>
          </>
        )}
        {debug && <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-900" />}
        <polygon points={points} fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-200" />
        {/* Arc from p1 to p2 with center at q0, radius 2r (single variant) */}
        {variant === "single" && arcPath1 && (
          <path
            d={arcPath1}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-900"
          />
        )}
        {/* Arc from p2 to p3 with center at q20, radius 2r (single variant) */}
        {variant === "single" && arcPath2 && (
          <path
            d={arcPath2}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-900"
          />
        )}
        {/* Arc from p3 to p4 with center at q16, radius 2r (single variant) */}
        {variant === "single" && arcPath3 && (
          <path
            d={arcPath3}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-900"
          />
        )}
        {/* Arc from p4 to p5 with center at q12, radius 2r (single variant) */}
        {variant === "single" && arcPath4 && (
          <path
            d={arcPath4}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-900"
          />
        )}
        {/* Arc from p5 to p0 with center at q8, radius 2r (single variant) */}
        {variant === "single" && arcPath5 && (
          <path
            d={arcPath5}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-900"
          />
        )}
        {/* Arc from p0 to p1 with center at q4, radius 2r (single variant) */}
        {variant === "single" && arcPath6 && (
          <path
            d={arcPath6}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-900"
          />
        )}
        {/* Vertex numbers */}
        {debug && vertices.map((vertex, index) => (
          <text
            key={index}
            x={vertex.x}
            y={vertex.y}
            fontSize="16"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="currentColor"
            className="text-gray-900"
          >
            p{vertex.number}
          </text>
        ))}
        {debug && (
          <>
            <line x1={centerX - 5} y1={centerY} x2={centerX + 5} y2={centerY} stroke="magenta" strokeWidth="1" />
            <line x1={centerX} y1={centerY - 5} x2={centerX} y2={centerY + 5} stroke="magenta" strokeWidth="1" />
          </>
        )}
      </svg>
    </div>
  );
}

