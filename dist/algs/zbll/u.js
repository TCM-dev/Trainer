const U_2GLL = [
    {
        algs: [
            {
                alg: "R' U' R' F D' R U R' D R2 U' R' F' R",
                orientation: "U'"
            },
            {
                alg: "R' U2 R U2 R U R' U R U2 R' U2 R' U' R",
                orientation: "U"
            }
        ]
    },
    {
        algs: [
            {
                alg: "R U R' U R U' R' U R U' R' U R U2 R'",
                orientation: "U2"
            },
            {
                alg: "R U2 R' U' R U R' U' R U R' U' R U' R'",
                orientation: "U2"
            }
        ]
    }
];
export const U_ZBLL = [...U_2GLL];
