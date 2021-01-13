import { Options } from "./interfaces";
import { getZBLLScramble } from "./scrambler/zbll";
import { Corner, Cube, Edge, Layer } from "./types";
import { getLayer, vizualizeFace, vizualizeLayer } from "./visualizer/face";

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

console.time("test");
const layer = getLayer(cube, "F");
console.log(vizualizeLayer(layer));
console.timeEnd("test");
