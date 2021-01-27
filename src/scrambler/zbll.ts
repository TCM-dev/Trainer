import { OLL } from "../algs/oll/oll";
import { U_ZBLL } from "../algs/zbll/u";
import { Alg } from "../interfaces";
import {
  changeAlgRotation,
  getLastCase,
  getRandomFromArray,
  setLastCase,
} from "../utils";

export const getZBLLScramble = (): string => {
  const randomCase = getRandomFromArray(U_ZBLL, getLastCase());

  setLastCase(randomCase);

  const randomAlg = getRandomFromArray(randomCase.algs);

  return changeAlgRotation(randomAlg, "U").alg;
};

export const getOllPredictionScramble = () => {
  const oll: Alg = getRandomFromArray(OLL, getLastCase());
  const insertion = "R U' R'";

  oll.alg = insertion + " " + oll.alg;

  return oll;
};
