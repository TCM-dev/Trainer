import { Rotation, Type } from "./types";

export interface Options {
  type?: Type;
  rotation?: Rotation;
}

export interface Alg {
  alg: string;
  rotation?: Rotation;
}

export interface Case {
  algs: Array<Alg>;
}
