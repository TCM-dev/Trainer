import { Options } from "./interfaces";
import { getZBLLScramble } from "./scrambler/zbll";
import { Corner, Edge, Layer } from "./types";
import { vizualizeFace, vizualizeLayer } from "./visualizer/face";

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

const topLayer: Layer = [
  ["yellow", "orange", "green"],
  ["yellow", "green"],
  ["yellow", "green", "red"],
  ["yellow", "orange"],
  "yellow",
  ["yellow", "red"],
  ["yellow", "blue", "orange"],
  ["yellow", "blue"],
  ["yellow", "red", "blue"]
];

console.time("test");
vizualizeLayer(topLayer);
console.timeEnd("test");

const bottomLayer: Layer = [
  ["yellow", "orange", "green"],
  ["yellow", "green"],
  ["yellow", "green", "red"],
  ["yellow", "orange"],
  "yellow",
  ["yellow", "red"],
  ["yellow", "blue", "orange"],
  ["yellow", "blue"],
  ["yellow", "red", "blue"]
];