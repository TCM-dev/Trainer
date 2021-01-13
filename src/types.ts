export type Type = "PLL" | "OLL" | "ZBLL";
export type Rotation = null | "U" | "U'" | "U2";
export type Angle = "y" | "y'" | "z" | "z'" | "x" | "x'";
export type FaceNotation = "U" | "F" | "R" | "B" | "L" | "D";
export type Color = "white" | "yellow" | "red" | "orange" | "green" | "blue";
export type Center = Color;
export type Edge = [Color, Color];
export type Corner = [Color, Color, Color];
export type Layer = [
  Corner,
  Edge,
  Corner,
  Edge,
  Center,
  Edge,
  Corner,
  Edge,
  Corner
];
// export type MiddleLayer = [
//   Edge,
//   Center,
//   Edge,
//   Center,
//   Center,
//   Edge,
//   Center,
//   Edge
// ];
export type Face = [
  Color,
  Color,
  Color,
  Color,
  Color,
  Color,
  Color,
  Color,
  Color
];
export type Cube = [Face, Face, Face, Face, Face, Face];
