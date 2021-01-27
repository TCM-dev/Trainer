import { Recognition, Time } from "../interfaces";
import { OllPredictionTrainer } from "../trainers/ollp";
import {
  generateCube,
  getFace,
  useAlgOnCube,
  vizualizeCube,
  vizualizeFace,
} from "../visualizer/face";

const trainer = new OllPredictionTrainer();

const displayCube = () => {
  const alg = { alg: trainer.getCurrentModifiedAlg() };
  // console.log(alg);
  const cube = useAlgOnCube(alg, generateCube());
  const cubeDiv = vizualizeCube(cube);
  const currentCubeDiv = document.getElementById("cube");
  cubeDiv.id = "cube";
  document.body.replaceChild(cubeDiv, currentCubeDiv);
};

const displayChoices = () => {
  const algs = trainer.getCurrentAlgChoices();
  const facesDiv = document.getElementById("faces");
  console.log(algs);
  facesDiv.innerHTML = "";

  algs.forEach((alg, index) => {
    const cube = useAlgOnCube(alg, generateCube());
    const face = getFace(cube, "U");
    const newFaceDiv = vizualizeFace(face);
    newFaceDiv.classList.add("face");
    facesDiv.appendChild(newFaceDiv);
  });
  // const cube = useAlgOnCube(alg, generateCube());
  // const cubeDiv = vizualizeCube(cube);
  // const currentCubeDiv = document.getElementById("cube");
  // cubeDiv.id = "cube";
  // document.body.replaceChild(cubeDiv, currentCubeDiv);
};

// const displaySession = (session: Array<Recognition | Time>) => {
//   const sessionDiv = document.getElementById("session");
//   sessionDiv.innerHTML = "";

//   session.forEach((recognition) => {
//     const recognitionDiv = document.createElement("div");
//     recognitionDiv.className = recognition.correct ? "correct" : "incorrect";
//     recognitionDiv.textContent = recognition.correct ? "Yes" : "No";
//     recognitionDiv.innerHTML += `<br />${recognition.alg.name}`;
//     sessionDiv.appendChild(recognitionDiv);
//   });
// };

displayCube();
displayChoices();

const answerInput = <HTMLInputElement>document.getElementById("answer");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const answer = answerInput.value;
  answerInput.value = "";
  trainer.answer(answer);
  trainer.getRandomAlg();
  const session = trainer.getSession();
  // displaySession(session);
  displayCube();
  displayChoices();
});
