import { getZBLLScramble } from "./scrambler/zbll.js";
const getScramble = (options) => {
    switch (options === null || options === void 0 ? void 0 : options.type) {
        case "PLL":
            return "PLL";
        case "OLL":
            return "OLL";
        case "ZBLL":
            return getZBLLScramble();
        default:
            return "NORMAL SCRAMBLE";
    }
};
const element_scramble = document.getElementById("scramble");
const button = document.getElementById("button");
button.addEventListener("click", () => {
    element_scramble.innerHTML = getScramble({ type: "ZBLL" });
});
