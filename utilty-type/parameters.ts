/*  ============== example ============= */
type Fn1 = (a: string, b: number) => void

const params: Parameters<Fn1> = ["a", 1];

/*  ============== write code ============= */
export type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer K) => any ? K : never

/*  ============== test ============= */

/* Pass */
const p1: MyParameters<Fn1> = ["a", 1]

/* Error */
const e1: MyParameters<Fn1> = ["a"]

const e2: MyParameters<Fn1> = ["a", "a"]

const e3: MyParameters<Fn1> = ["a", true]
