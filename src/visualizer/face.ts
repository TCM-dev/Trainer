import { Angle, Cube, Face, FaceNotation, Layer, Rotation } from "../types";

export const vizualizeFace = (face: Face) => {
  const center = face[4];

  // Corners
  const topLeft = face[0];
  const topRight = face[2];
  const bottomLeft = face[6];
  const bottomRight = face[8];

  // Edges
  const top = face[1];
  const left = face[3];
  const right = face[5];
  const bottom = face[7];

  console.table([
    [topLeft, top, topRight],
    [left, center, right],
    [bottomLeft, bottom, bottomRight]
  ]);
};

export const vizualizeLayer = (layer: Layer) => {
  const center = layer[4];

  // Corners
  const topLeft = layer[0];
  const topRight = layer[2];
  const bottomLeft = layer[6];
  const bottomRight = layer[8];

  // Edges
  const top = layer[1];
  const left = layer[3];
  const right = layer[5];
  const bottom = layer[7];

  console.table([
    ["", topLeft[2], top[1], topRight[1], ""],
    [topLeft[1], topLeft[0], top[0], topRight[0], topRight[2]],
    [left[1], left[0], center, right[0], right[1]],
    [bottomLeft[2], bottomLeft[0], bottom[0], bottomRight[0], bottomRight[1]],
    ["", bottomLeft[1], bottom[1], bottomRight[2], ""]
  ]);
};

export const vizualizeCube = (cube: Cube) => {};

// const rotateCube = (cube: Cube, angle: Angle) => {
//   const oldFirstLayer: Layer = cube[0]
//   const oldMiddleLayer: MiddleLayer = cube[1]
//   const oldLastLayer: Layer = cube[2]
// }

const getFace = (cube: Cube, faceNotation: FaceNotation): Face => {
  switch (faceNotation) {
    case "U":
      return cube[0];
    case "F":
      return cube[1];
    case "R":
      return cube[2];
    case "B":
      return cube[3];
    case "L":
      return cube[4];
    case "D":
      return cube[5];
  }
};

const getLayer = (cube: Cube, faceNotation: FaceNotation): Layer => {
  const face = getFace(cube, faceNotation);

  const center = face[4];

  // Corners
  const topLeft = face[0];
  const topRight = face[2];
  const bottomLeft = face[6];
  const bottomRight = face[8];

  // Edges
  const top = face[1];
  const left = face[3];
  const right = face[5];
  const bottom = face[7];
  // const face = getFace(cube, faceNotation);
  // const face = getFace(cube, faceNotation);

  const layer: Layer = [
    [topLeft, "white", "white"],
    [top, "white"],
    [topRight, "white", "white"],
    [left, "white"],
    center,
    [right, "white"],
    [bottomLeft, "white", "white"],
    [bottom, "white"],
    [bottomRight, "white", "white"]
  ];

  return layer;
};

// const getFLayer = (cube: Cube) => {

//   return cube[0];
// }

// const getFace = (cube: Cube) => {

//   const face: Face = []
// }
