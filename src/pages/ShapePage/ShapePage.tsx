export default function ShapePage() {
  const debug = false; // Set to true to show reference lines, q-numbers, p-numbers, circle, and center cross
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
        {debug && <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-900" />}
        <polygon points={points} fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-900" />
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

