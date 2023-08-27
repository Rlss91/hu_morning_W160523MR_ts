const add = (a: number, b: number): number => a + b;
const sub = (a: number, b: number): number => a - b;
const mul = (a: number, b: number): number => a * b;
const div = (a: number, b: number): number => a / b;

const callAdd = (cb: Function, a: number, b: number): number => cb(a, b);
//callAdd(add, 1, 1) => add(1,1)
//add(1,1) => 1+1 //2

callAdd(add, 1, 1);
