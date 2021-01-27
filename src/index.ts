// import "./pages/side";

// import { Alg, Options } from "./interfaces";
// import { getZBLLScramble } from "./scrambler/zbll";
// import { Corner, Cube, Edge, Layer } from "./types";
// import {
//   getLayer,
//   vizualizeFace,
//   vizualizeLayer,
//   generateCube,
//   vizualizeCube,
//   rotateCubeLayer,
//   rotateCube,
//   useAlgOnCube
// } from "./visualizer/face";

// const getScramble = (options: Options) => {
//   switch (options?.type) {
//     case "PLL":
//       return "PLL";

//     case "OLL":
//       return "OLL";

//     case "ZBLL":
//       return getZBLLScramble();

//     default:
//       return "NORMAL SCRAMBLE";
//   }
// };

// const element_scramble = document.getElementById("scramble");

// const button = document.getElementById("button");

// button.addEventListener("click", () => {
//   element_scramble.innerHTML = getScramble({ type: "ZBLL" });
// });

// // const topLeft = "red";
// // const topRight = "red";
// // const bottomLeft = "red";
// // const bottomRight = "red";
// // const top = "red";
// // const left = "red";
// // const right = "red";
// // const bottom = "red";
// // const center = "red";

// // vizualizeFace([
// //   topLeft,
// //   top,
// //   topRight,
// //   left,
// //   center,
// //   right,
// //   bottomLeft,
// //   bottom,
// //   bottomRight
// // ]);

// let cube = generateCube();
// const layer = getLayer(cube, "F");
// console.log(vizualizeLayer(layer));

// const displayCube = () => {
//   console.time("test");
//   const cubeDiv = vizualizeCube(cube);
//   console.log(cube);
//   const currentCubeDiv = document.getElementById("cube");
//   cubeDiv.id = "cube";
//   document.body.replaceChild(cubeDiv, currentCubeDiv);
//   console.timeEnd("test");
// };

// displayCube();

// const button_U = document.getElementById("button_U");

// button_U.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "U", "U");
//   displayCube();
// });

// const button_Uprime = document.getElementById("button_U'");

// button_Uprime.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "U", "U'");
//   displayCube();
// });

// const button_U2 = document.getElementById("button_U2");

// button_U2.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "U", "U2");
//   displayCube();
// });

// const button_F = document.getElementById("button_F");

// button_F.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "F", "U");
//   displayCube();
// });

// const button_Fprime = document.getElementById("button_F'");

// button_Fprime.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "F", "U'");
//   displayCube();
// });

// const button_F2 = document.getElementById("button_F2");

// button_F2.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "F", "U2");
//   displayCube();
// });

// const button_R = document.getElementById("button_R");

// button_R.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "R", "U");
//   displayCube();
// });

// const button_Rprime = document.getElementById("button_R'");

// button_Rprime.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "R", "U'");
//   displayCube();
// });

// const button_R2 = document.getElementById("button_R2");

// button_R2.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "R", "U2");
//   displayCube();
// });

// const button_B = document.getElementById("button_B");

// button_B.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "B", "U");
//   displayCube();
// });

// const button_Bprime = document.getElementById("button_B'");

// button_Bprime.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "B", "U'");
//   displayCube();
// });

// const button_B2 = document.getElementById("button_B2");

// button_B2.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "B", "U2");
//   displayCube();
// });

// const button_L = document.getElementById("button_L");

// button_L.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "L", "U");
//   displayCube();
// });

// const button_Lprime = document.getElementById("button_L'");

// button_Lprime.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "L", "U'");
//   displayCube();
// });

// const button_L2 = document.getElementById("button_L2");

// button_L2.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "L", "U2");
//   displayCube();
// });

// const button_D = document.getElementById("button_D");

// button_D.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "D", "U");
//   displayCube();
// });

// const button_Dprime = document.getElementById("button_D'");

// button_Dprime.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "D", "U'");
//   displayCube();
// });

// const button_D2 = document.getElementById("button_D2");

// button_D2.addEventListener("click", () => {
//   cube = rotateCubeLayer(cube, "D", "U2");
//   displayCube();
// });

// const button_z = document.getElementById("button_z");

// button_z.addEventListener("click", () => {
//   cube = rotateCube(cube, "z");
//   displayCube();
// });

// const button_zprime = document.getElementById("button_z'");

// button_zprime.addEventListener("click", () => {
//   cube = rotateCube(cube, "z'");
//   displayCube();
// });

// const button_z2 = document.getElementById("button_z2");

// button_z2.addEventListener("click", () => {
//   cube = rotateCube(cube, "z2");
//   displayCube();
// });

// const button_x = document.getElementById("button_x");

// button_x.addEventListener("click", () => {
//   cube = rotateCube(cube, "x");
//   displayCube();
// });

// const button_xprime = document.getElementById("button_x'");

// button_xprime.addEventListener("click", () => {
//   cube = rotateCube(cube, "x'");
//   displayCube();
// });

// const button_x2 = document.getElementById("button_x2");

// button_x2.addEventListener("click", () => {
//   cube = rotateCube(cube, "x2");
//   displayCube();
// });

// const button_y = document.getElementById("button_y");

// button_y.addEventListener("click", () => {
//   cube = rotateCube(cube, "y");
//   displayCube();
// });

// const button_yprime = document.getElementById("button_y'");

// button_yprime.addEventListener("click", () => {
//   cube = rotateCube(cube, "y'");
//   displayCube();
// });

// const button_y2 = document.getElementById("button_y2");

// button_y2.addEventListener("click", () => {
//   cube = rotateCube(cube, "y2");
//   displayCube();
// });

// const alg: Alg = {
//   alg: "y2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2"
// };

// cube = useAlgOnCube(alg, cube);
// displayCube();
