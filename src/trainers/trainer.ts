import { PLL } from "../algs/pll/pll";
import { Alg, Recognition, Time } from "../interfaces";
import { addRandomRotation, getRandomFromArray } from "../utils";
import { reverseAlg } from "../visualizer/face";

export class Trainer {
  private startTime: Date;
  private currentAlg: Alg;
  private session: Array<Recognition | Time> = [];
  protected algList: Array<Alg> = PLL;

  constructor() {
    this.getRandomAlg();
  }

  start = () => {
    this.startTime = new Date();
  };

  protected getRandomAlg = () => {
    this.currentAlg = addRandomRotation(
      reverseAlg(getRandomFromArray(this.algList))
    );
  };

  public getSession = () => {
    return this.session;
  };

  protected setSession = (session: Array<Recognition | Time>) => {
    this.session = session;
  };

  protected addToSession = (item: Recognition | Time) => {
    this.session.push(item);
  };

  public getCurrentAlg = (): Alg => {
    return this.currentAlg;
  };

  protected setCurrentAlg = (alg: Alg) => {
    this.currentAlg = alg;
  };

  public getStartTime = (): Date => {
    return this.startTime;
  };
}
