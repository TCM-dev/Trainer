import { Rotation, Type } from "./types";

export interface Options {
  type?: Type;
  rotation?: Rotation;
}

export interface Alg {
  alg: string;
  name?: string;
  rotation?: Rotation;
}

export interface Case {
  algs: Array<Alg>;
}

export interface Recognition {
  correct: boolean;
  alg: Alg;
}

export interface Time {
  duration: number;
  alg: Alg;
}
