import { Recognition } from "../interfaces";
import { SideRecognitionTrainer } from "../trainers/siderecognition";
import { generateCube, useAlgOnCube, vizualizeCube } from "../visualizer/face";

const trainer = new SideRecognitionTrainer();

const displayCube = () => {
  const alg = trainer.getCurrentAlg();
  console.log(alg);
  const cube = useAlgOnCube(alg, generateCube());
  const cubeDiv = vizualizeCube(cube);
  const currentCubeDiv = document.getElementById("cube");
  cubeDiv.id = "cube";
  document.body.replaceChild(cubeDiv, currentCubeDiv);
};

const displaySession = (session: Array<Recognition>) => {
  const sessionDiv = document.getElementById("session");
  sessionDiv.innerHTML = "";

  session.forEach((recognition) => {
    const recognitionDiv = document.createElement("div");
    recognitionDiv.className = recognition.correct ? "correct" : "incorrect";
    recognitionDiv.textContent = recognition.correct ? "Yes" : "No";
    recognitionDiv.innerHTML += `<br />${recognition.alg.name}`;
    sessionDiv.appendChild(recognitionDiv);
  });
};

displayCube();

const answerInput = <HTMLInputElement>document.getElementById("answer");
const form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const answer = answerInput.value;
//   answerInput.value = "";
//   trainer.answer(answer);
//   trainer.getRandomAlg();
//   const session = trainer.getSession();
//   displaySession(session);
//   displayCube();
// });
