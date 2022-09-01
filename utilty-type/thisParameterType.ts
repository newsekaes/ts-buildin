/*  ============== example ============= */
type Fn = (this: number) => void

const thisParam: ThisParameterType<Fn> = 6

/*  ============== write code ============= */
/* https://stackoverflow.com/questions/67713566/how-does-the-never-type-work-in-typescript */
/* 协变和逆变 https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science) */
export type MyThisParameterType<T> = T extends (this: infer K, ...args: never) => any ? K : unknown

/*  ============== test ============= */

/* Pass */
const p1: MyThisParameterType<Fn> = 6
const p2: MyThisParameterType<any> = void 0

/* Error */
const e1: ThisParameterType<Fn> = false
