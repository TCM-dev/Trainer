import { U_ZBLL } from "../algs/zbll/u.js";
export const getZBLLScramble = () => {
    const randomZBLL = U_ZBLL[Math.floor(Math.random() * U_ZBLL.length)];
    const randomAlg = randomZBLL.algs[Math.floor(Math.random() * randomZBLL.algs.length)];
    return randomAlg.alg;
};
