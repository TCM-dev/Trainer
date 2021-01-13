import {
  Angle,
  Corner,
  Cube,
  Edge,
  Face,
  FaceNotation,
  Layer,
  Rotation,
} from "../types";

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
    [bottomLeft, bottom, bottomRight],
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
    ["", bottomLeft[1], bottom[1], bottomRight[2], ""],
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

export const getLayer = (cube: Cube, faceNotation: FaceNotation): Layer => {
  const finalCube = ((): Cube => {
    switch (faceNotation) {
      case "U":
        return cube;
      case "F":
        return rotateCube(cube, "x");
      case "R":
        return rotateCube(cube, "z'");
      case "B":
        return rotateCube(cube, "x'");
      case "L":
        return rotateCube(cube, "z");
      case "D":
        return rotateCube(cube, "x2");
    }
  })();

  const U_face = getFace(finalCube, "U");
  const F_face = getFace(finalCube, "F");
  const R_face = getFace(finalCube, "R");
  const B_face = getFace(finalCube, "B");
  const L_face = getFace(finalCube, "L");

  const center = U_face[4];

  // Corners
  const topLeft: Corner = [U_face[0], L_face[0], B_face[2]];
  const topRight: Corner = [U_face[2], B_face[0], R_face[2]];
  const bottomLeft: Corner = [U_face[6], F_face[0], L_face[2]];
  const bottomRight: Corner = [U_face[8], R_face[0], F_face[2]];

  // Edges
  const top: Edge = [U_face[1], B_face[1]];
  const left: Edge = [U_face[3], L_face[1]];
  const right: Edge = [U_face[5], R_face[1]];
  const bottom: Edge = [U_face[7], F_face[1]];

  const layer: Layer = [
    topLeft,
    top,
    topRight,
    left,
    center,
    right,
    bottomLeft,
    bottom,
    bottomRight,
  ];

  return layer;
};

const rotateFace = (face: Face, rotation: Rotation): Face => {
  switch (rotation) {
    case "U":
      return [
        face[6],
        face[3],
        face[0],
        face[7],
        face[4],
        face[1],
        face[8],
        face[5],
        face[2],
      ];

    case "U'":
      return [
        face[2],
        face[5],
        face[8],
        face[1],
        face[4],
        face[7],
        face[0],
        face[3],
        face[6],
      ];

    case "U2":
      return [
        face[8],
        face[7],
        face[6],
        face[5],
        face[4],
        face[3],
        face[2],
        face[1],
        face[0],
      ];
  }
};

const rotateCube = (cube: Cube, angle: Angle): Cube => {
  const U_face = cube[0];
  const F_face = cube[1];
  const R_face = cube[2];
  const B_face = cube[3];
  const L_face = cube[4];
  const D_face = cube[5];

  switch (angle) {
    case "x":
      return [
        F_face,
        D_face,
        rotateFace(R_face, "U"),
        U_face,
        rotateFace(L_face, "U'"),
        B_face,
      ];

    case "x'":
      return [
        L_face,
        U_face,
        rotateFace(R_face, "U'"),
        D_face,
        rotateFace(L_face, "U"),
        F_face,
      ];

    case "x2":
      return [
        D_face,
        B_face,
        rotateFace(R_face, "U2"),
        F_face,
        rotateFace(L_face, "U2"),
        U_face,
      ];

    case "y":
      return [
        rotateFace(U_face, "U"),
        R_face,
        B_face,
        L_face,
        F_face,
        rotateFace(D_face, "U'"),
      ];

    case "y'":
      return [
        rotateFace(U_face, "U'"),
        L_face,
        F_face,
        R_face,
        B_face,
        rotateFace(D_face, "U"),
      ];

    case "y2":
      return [
        rotateFace(U_face, "U2"),
        B_face,
        L_face,
        F_face,
        R_face,
        rotateFace(D_face, "U2"),
      ];

    case "z":
      return [
        L_face,
        rotateFace(F_face, "U"),
        U_face,
        rotateFace(B_face, "U'"),
        D_face,
        R_face,
      ];

    case "z'":
      return [
        R_face,
        rotateFace(F_face, "U'"),
        D_face,
        rotateFace(B_face, "U"),
        U_face,
        L_face,
      ];

    case "z2":
      return [
        D_face,
        rotateFace(F_face, "U2"),
        L_face,
        rotateFace(B_face, "U2"),
        R_face,
        U_face,
      ];
  }
};

const rotateCubeLayer = (
  cube: Cube,
  faceNotation: FaceNotation,
  rotation: Rotation
): Cube => {
  const face = rotateFace(getFace(cube, faceNotation), rotation);
  const U_face = getFace(cube, "U");
  const F_face = getFace(cube, "F");
  const R_face = getFace(cube, "R");
  const B_face = getFace(cube, "B");
  const L_face = getFace(cube, "L");
  const D_face = getFace(cube, "D");

  if (faceNotation === "U") {
    switch (rotation) {
      case "U": {
        const newF_face: Face = [
          R_face[0],
          R_face[1],
          R_face[2],
          F_face[3],
          F_face[4],
          F_face[5],
          F_face[6],
          F_face[7],
          F_face[8],
        ];
        const newR_face: Face = [
          B_face[0],
          B_face[1],
          B_face[2],
          R_face[3],
          R_face[4],
          R_face[5],
          R_face[6],
          R_face[7],
          R_face[8],
        ];
        const newB_face: Face = [
          L_face[0],
          L_face[1],
          L_face[2],
          B_face[3],
          B_face[4],
          B_face[5],
          B_face[6],
          B_face[7],
          B_face[8],
        ];
        const newL_face: Face = [
          F_face[0],
          F_face[1],
          F_face[2],
          L_face[3],
          L_face[4],
          L_face[5],
          L_face[6],
          L_face[7],
          L_face[8],
        ];

        return [face, newF_face, newR_face, newB_face, newL_face, D_face];
      }

      case "U'": {
        const newF_face: Face = [
          L_face[0],
          L_face[1],
          L_face[2],
          F_face[3],
          F_face[4],
          F_face[5],
          F_face[6],
          F_face[7],
          F_face[8],
        ];
        const newR_face: Face = [
          F_face[0],
          F_face[1],
          F_face[2],
          R_face[3],
          R_face[4],
          R_face[5],
          R_face[6],
          R_face[7],
          R_face[8],
        ];
        const newB_face: Face = [
          R_face[0],
          R_face[1],
          R_face[2],
          B_face[3],
          B_face[4],
          B_face[5],
          B_face[6],
          B_face[7],
          B_face[8],
        ];
        const newL_face: Face = [
          B_face[0],
          B_face[1],
          B_face[2],
          L_face[3],
          L_face[4],
          L_face[5],
          L_face[6],
          L_face[7],
          L_face[8],
        ];

        return [face, newF_face, newR_face, newB_face, newL_face, D_face];
      }

      case "U2": {
        const newF_face: Face = [
          B_face[0],
          B_face[1],
          B_face[2],
          F_face[3],
          F_face[4],
          F_face[5],
          F_face[6],
          F_face[7],
          F_face[8],
        ];
        const newR_face: Face = [
          L_face[0],
          L_face[1],
          L_face[2],
          R_face[3],
          R_face[4],
          R_face[5],
          R_face[6],
          R_face[7],
          R_face[8],
        ];
        const newB_face: Face = [
          F_face[0],
          F_face[1],
          F_face[2],
          B_face[3],
          B_face[4],
          B_face[5],
          B_face[6],
          B_face[7],
          B_face[8],
        ];
        const newL_face: Face = [
          R_face[0],
          R_face[1],
          R_face[2],
          L_face[3],
          L_face[4],
          L_face[5],
          L_face[6],
          L_face[7],
          L_face[8],
        ];

        return [face, newF_face, newR_face, newB_face, newL_face, D_face];
      }
    }
  } else if (faceNotation === "F") {
    switch (rotation) {
      case "U": {
        const newU_face: Face = [
          U_face[0],
          U_face[1],
          U_face[2],
          U_face[3],
          U_face[4],
          U_face[5],
          L_face[2],
          L_face[5],
          L_face[8],
        ];
        const newR_face: Face = [
          U_face[6],
          R_face[1],
          R_face[2],
          U_face[7],
          R_face[4],
          R_face[5],
          U_face[8],
          R_face[7],
          R_face[8],
        ];
        const newL_face: Face = [
          L_face[0],
          L_face[1],
          D_face[0],
          L_face[3],
          L_face[4],
          D_face[1],
          L_face[6],
          L_face[7],
          D_face[2],
        ];
        const newD_face: Face = [
          R_face[6],
          R_face[3],
          R_face[0],
          D_face[3],
          D_face[4],
          D_face[5],
          D_face[6],
          D_face[7],
          D_face[8],
        ];

        return [newU_face, face, newR_face, B_face, newL_face, newD_face];
      }

      case "U'": {
        // TODO
        const newU_face: Face = [
          U_face[0],
          U_face[1],
          U_face[2],
          U_face[3],
          U_face[4],
          U_face[5],
          L_face[2],
          L_face[5],
          L_face[8],
        ];
        const newR_face: Face = [
          U_face[6],
          R_face[1],
          R_face[2],
          U_face[7],
          R_face[4],
          R_face[5],
          U_face[8],
          R_face[7],
          R_face[8],
        ];
        const newL_face: Face = [
          L_face[0],
          L_face[1],
          D_face[0],
          L_face[3],
          L_face[4],
          D_face[1],
          L_face[6],
          L_face[7],
          D_face[2],
        ];
        const newD_face: Face = [
          R_face[6],
          R_face[3],
          R_face[0],
          D_face[3],
          D_face[4],
          D_face[5],
          D_face[6],
          D_face[7],
          D_face[8],
        ];

        return [face, newF_face, newR_face, newB_face, newL_face, D_face];
      }

      case "U2": {
        const newF_face: Face = [
          B_face[0],
          B_face[1],
          B_face[2],
          F_face[3],
          F_face[4],
          F_face[5],
          F_face[6],
          F_face[7],
          F_face[8],
        ];
        const newR_face: Face = [
          L_face[0],
          L_face[1],
          L_face[2],
          R_face[3],
          R_face[4],
          R_face[5],
          R_face[6],
          R_face[7],
          R_face[8],
        ];
        const newB_face: Face = [
          F_face[0],
          F_face[1],
          F_face[2],
          B_face[3],
          B_face[4],
          B_face[5],
          B_face[6],
          B_face[7],
          B_face[8],
        ];
        const newL_face: Face = [
          R_face[0],
          R_face[1],
          R_face[2],
          L_face[3],
          L_face[4],
          L_face[5],
          L_face[6],
          L_face[7],
          L_face[8],
        ];

        return [face, newF_face, newR_face, newB_face, newL_face, D_face];
      }
    }
  }

  return cube;
};

const generateCube = (): Cube => {
  const cube: Cube = [
    [
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
    ],
    ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
    [
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
    ],
    [
      "orange",
      "orange",
      "orange",
      "orange",
      "orange",
      "orange",
      "orange",
      "orange",
      "orange",
    ],
    ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
    [
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
    ],
  ];

  return cube;
};
