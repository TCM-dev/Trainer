import { Options } from "./interfaces";
import { getZBLLScramble } from "./scrambler/zbll";
import { Corner, Cube, Edge, Layer } from "./types";
import {
  getLayer,
  vizualizeFace,
  vizualizeLayer,
  generateCube,
  vizualizeCube,
  rotateCubeLayer,
  rotateCube,
} from "./visualizer/face";

const getScramble = (options: Options) => {
  switch (options?.type) {
    case "PLL":
      return "PLL";

    case "OLL":
      return "OLL";

    case "ZBLL":
      return getZBLLScramble();

    default:
      return "NORMAL SCRAMBLE";
  }
};

const element_scramble = document.getElementById("scramble");

const button = document.getElementById("button");

button.addEventListener("click", () => {
  element_scramble.innerHTML = getScramble({ type: "ZBLL" });
});

// const topLeft = "red";
// const topRight = "red";
// const bottomLeft = "red";
// const bottomRight = "red";
// const top = "red";
// const left = "red";
// const right = "red";
// const bottom = "red";
// const center = "red";

// vizualizeFace([
//   topLeft,
//   top,
//   topRight,
//   left,
//   center,
//   right,
//   bottomLeft,
//   bottom,
//   bottomRight
// ]);

let cube = generateCube();
const layer = getLayer(cube, "F");
console.log(vizualizeLayer(layer));

const displayCube = () => {
  console.time("test");
  const cubeDiv = vizualizeCube(cube);
  console.log(cube);
  const currentCubeDiv = document.getElementById("cube");
  cubeDiv.id = "cube";
  document.body.replaceChild(cubeDiv, currentCubeDiv);
  console.timeEnd("test");
};

displayCube();

const button_U = document.getElementById("button_U");

button_U.addEventListener("click", () => {
  cube = rotateCubeLayer(cube, "U", "U");
  displayCube();
});

const button_Uprime = document.getElementById("button_U'");

button_Uprime.addEventListener("click", () => {
  cube = rotateCubeLayer(cube, "U", "U'");
  displayCube();
});

const button_U2 = document.getElementById("button_U2");

button_U2.addEventListener("click", () => {
  cube = rotateCubeLayer(cube, "U", "U2");
  displayCube();
});

const button_z = document.getElementById("button_z");

button_z.addEventListener("click", () => {
  cube = rotateCube(cube, "z");
  displayCube();
});

const button_zprime = document.getElementById("button_z'");

button_zprime.addEventListener("click", () => {
  cube = rotateCube(cube, "z'");
  displayCube();
});

const button_z2 = document.getElementById("button_z2");

button_z2.addEventListener("click", () => {
  cube = rotateCube(cube, "z2");
  displayCube();
});
