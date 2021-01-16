import { PLL } from "../algs/pll/pll";
import { Alg, Recognition } from "../interfaces";
import { addRandomRotation, getRandomFromArray } from "../utils";
import { reverseAlg } from "../visualizer/face";

export class SideRecognition {
  startTime: Date;
  currentAlg: Alg;
  session: Array<Recognition>;

  constructor() {
    this.getRandomAlg();
    this.session = [];
  }

  start = () => {
    this.startTime = new Date();
  };

  getRandomAlg = () => {
    this.currentAlg = addRandomRotation(reverseAlg(getRandomFromArray(PLL)));
  };

  answer = (answer: string) => {
    this.addRecognition(this.isAnswerCorrect(answer));
  };

  isAnswerCorrect = (answer: string) => {
    return answer.toLowerCase() === this.currentAlg.name.toLowerCase();
  };

  addRecognition = (correct: boolean) => {
    this.session.push({
      correct,
      alg: this.currentAlg,
    });
  };

  getSession = () => {
    return this.session;
  };

  getCurrentAlg = (): Alg => {
    return this.currentAlg;
  };

  getStartTime = (): Date => {
    return this.startTime;
  };
}
