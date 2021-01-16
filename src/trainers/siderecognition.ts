import { PLL } from "../algs/pll/pll";
import { Alg } from "../interfaces";
import { addRandomRotation, getRandomFromArray } from "../utils";
import { reverseAlg } from "../visualizer/face";

export class SideRecognition {
  startTime: Date;
  currentAlg: Alg;

  constructor() {
    this.getRandomAlg();
  }

  start = () => {
    this.startTime = new Date();
  };

  getRandomAlg = () => {
    this.currentAlg = addRandomRotation(reverseAlg(getRandomFromArray(PLL)));
  };

  isAnswerCorrect = (answer: string) => {
    console.log("answer :", answer)
    console.log("solution :", this.currentAlg.name)
    return answer.toLowerCase() === this.currentAlg.name.toLowerCase();
  };

  getCurrentAlg = (): Alg => {
    return this.currentAlg;
  };

  getStartTime = (): Date => {
    return this.startTime;
  };
}
