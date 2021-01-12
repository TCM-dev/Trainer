import { Orientation, Type } from "./types";

export interface Options {
  type?: Type;
  orientation?: Orientation;
}

export interface Alg {
  alg: string;
  orientation?: Orientation;
}

export interface Case {
  algs: Array<Alg>;
}
