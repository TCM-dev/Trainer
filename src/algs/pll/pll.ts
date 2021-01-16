import { Alg } from "../../interfaces";

const Adjacent_PLL: Array<Alg> = [
  {
    name: "Aa",
    alg: "x R' U R' D2 R U' R' D2 R2 x'"
  },
  {
    name: "Ab",
    alg: "x' L2 D2 L U L' D2 L U' L x"
  },
  {
    name: "F",
    alg: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R"
  },
  {
    name: "Ga",
    alg: "R2 U R' U R' U' R U' R2 U' D R' U R D'"
  },
  {
    name: "Gb",
    alg: "R' U' R U D' R2 U R' U R U' R U' R2 D"
  },
  {
    name: "Gc",
    alg: "R2 U' R U' R U R' U R2 U D' R U' R' D"
  },
  {
    name: "Gd",
    alg: "R U R' U' D R2 U' R U' R' U R' U R2 D'"
  },
  {
    name: "Ja",
    alg: "x R2 F R F' R U2 r' U r U2 x'"
  },
  {
    name: "Jb",
    alg: "R U R' F' R U R' U' R' F R2 U' R'"
  },
  {
    name: "Ra",
    alg: "R U' R' U' R U R D R' U' R D' R' U2 R'"
  },
  {
    name: "Rb",
    alg: "R2 F R U R U' R' F' R U2 R' U2 R"
  },
  {
    name: "T",
    alg: "R U R' U' R' F R2 U' R' U' R U R' F'"
  }
];

const Diagonal_PLL: Array<Alg> = [
  {
    name: "E",
    alg: "x' L' U L D' L' U' L D L' U' L D' L' U L D x"
  },
  {
    name: "Na",
    alg: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'"
  },
  {
    name: "Nb",
    alg: "R' U R U' R' F' U' F R U R' F R' F' R U' R"
  },
  {
    name: "V",
    alg: "R' U R' U' y R' F' R2 U' R' U R' F R F"
  },
  {
    name: "Y",
    alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'"
  }
];

const Edge_PLL: Array<Alg> = [
  {
    name: "H",
    alg: "M2 U M2 U2 M2 U M2"
  },
  {
    name: "Ua",
    alg: "M2 U M U2 M' U M2"
  },
  {
    name: "Ub",
    alg: "M2 U' M U2 M' U' M2"
  },
  {
    name: "Z",
    alg: "M' U M2 U M2 U M' U2 M2"
  }
];

// export const PLL: Array<Alg> = [...Adjacent_PLL, ...Diagonal_PLL, ...Edge_PLL];
export const PLL: Array<Alg> = [{ alg: "x R' U R' D2 R U' R' D2 R2 x'", name: "aa" }];
