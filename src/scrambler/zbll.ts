import { U_ZBLL } from "../algs/zbll/u";
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
