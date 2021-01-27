import { PLL } from "../algs/pll/pll";
import { Alg, Recognition } from "../interfaces";
import { addRandomRotation, getRandomFromArray } from "../utils";
import { reverseAlg } from "../visualizer/face";
import { Trainer } from "./trainer";

export class SideRecognitionTrainer extends Trainer {
  algList = PLL;

  answer = (answer: string) => {
    this.addRecognition(this.isAnswerCorrect(answer));
  };

  isAnswerCorrect = (answer: string) => {
    return answer.toLowerCase() === this.getCurrentAlg().name.toLowerCase();
  };

  addRecognition = (correct: boolean) => {
    this.addToSession({
      correct,
      alg: this.getCurrentAlg(),
    });
  };
}
