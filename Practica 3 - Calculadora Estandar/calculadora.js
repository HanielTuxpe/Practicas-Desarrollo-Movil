const sum = (n1, n2) => n1+n2;
const rest = (n1, n2) => n1-n2;
const mul = (n1, n2) => n1*n2;
const div = (n1, n2) => {
    return n2 = 0 ? n1/n2 : "Syntax Error";
}
const mod = (n1, n2) => {
    return n2 !== 0 ? n1 % n2 : "Syntax Error";
};
const inv = (n1) => {
    return n1 !== 0 ? 1 / n1 : "Syntax Error";
}
const sqr = (n1) => {
    return n1 * n1;
}
const sqrt = (n1) => {
    return n1 >= 0 ? Math.sqrt(n1) : "Syntax Error";
}

export {sum, rest, mul, div, mod, inv, sqr, sqrt}