import { OLL } from "../algs/oll/oll";
import { PLL } from "../algs/pll/pll";
import { Alg, Recognition } from "../interfaces";
import { getOllPredictionScramble } from "../scrambler/zbll";
import { addRandomRotation, getRandomFromArray } from "../utils";
import { reverseAlg } from "../visualizer/face";
import { Trainer } from "./trainer";

export class OllPredictionTrainer extends Trainer {
  algList = OLL;

  constructor() {
    super();
    this.getRandomAlg();
  }

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

  public getRandomAlg = () => {
    this.setCurrentAlg(reverseAlg(getRandomFromArray(this.algList)));
    console.log(this.getCurrentAlg());
  };

  public getCurrentModifiedAlg = () => {
    return this.getCurrentAlg().alg + " R U R'";
  };

  getCurrentAlgChoices = () => {
    const choices = [
      this.getCurrentAlg(),
      this.getCurrentAlg(),
      this.getCurrentAlg(),
    ];

    return choices;
  };
}
