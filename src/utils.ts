const _ = require("lodash");
import { Alg, Case } from "./interfaces";
import { Rotation } from "./types";

export const getRandomFromArray = (array: Array<any>, not: any = null) => {
  if (not) {
    const arrayWithoutLast = array.filter(obj => !_.isEqual(obj, not));
    return arrayWithoutLast[
      Math.floor(Math.random() * arrayWithoutLast.length)
    ];
  }

  return array[Math.floor(Math.random() * array.length)];
};

export const setLastCase = ($case: Case) => {
  localStorage.setItem("case", JSON.stringify($case));
};

export const getLastCase = (): Case => {
  return JSON.parse(localStorage.getItem("case"));
};

export const addRandomRotation = (alg: Alg): Alg => {
  const rotations: Array<Rotation> = ["U", "U'", "U2"];
  const rotation: Rotation =
    rotations[Math.floor(Math.random() * rotations.length)];

  alg.alg += ` ${rotation}`;

  return alg;
};

export const changeAlgRotation = (alg: Alg, rotation: Rotation): Alg => {
  if (alg.rotation === rotation) {
    return alg;
  }

  const algorithm = _.clone(alg);

  console.log("start", algorithm);

  // const U2: Rotation = "U2";
  // const U: Rotation = "U";
  // const U: Rotation = "U";
  // const U2: Rotation = "U2"

  // (alg.alg + " " + "U2") as Rotation;
  switch (true) {
    case rotation === "U" && algorithm.rotation === "U'":
      algorithm.alg += " U2";
      break;
    case rotation === "U" && algorithm.rotation === "U2":
      algorithm.alg += " U";
      break;
    case rotation === "U'" && algorithm.rotation === "U":
      algorithm.alg += " U2";
      break;
    case rotation === "U'" && algorithm.rotation === "U2":
      algorithm.alg += " U'";
      break;
    case rotation === "U2" && algorithm.rotation === "U":
      algorithm.alg += " U'";
      break;
    case rotation === "U2" && algorithm.rotation === "U'":
      algorithm.alg += " U";
      break;
  }

  console.log("end", algorithm);

  return algorithm;
};
