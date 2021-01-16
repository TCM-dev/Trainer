import { SideRecognition } from "../trainers/siderecognition";
import {
  generateCube,
  reverseAlg,
  useAlgOnCube,
  vizualizeCube
} from "../visualizer/face";

const trainer = new SideRecognition();

const displayCube = () => {
  const alg = trainer.getCurrentAlg();
  console.log(alg);
  const cube = useAlgOnCube(alg, generateCube());
  const cubeDiv = vizualizeCube(cube);
  const currentCubeDiv = document.getElementById("cube");
  cubeDiv.id = "cube";
  document.body.replaceChild(cubeDiv, currentCubeDiv);
};

displayCube();

const answerInput = <HTMLInputElement>document.getElementById("answer");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const answer = answerInput.value;
  answerInput.value = "";
  console.log(trainer.isAnswerCorrect(answer));
  trainer.getRandomAlg();
  displayCube();
});
