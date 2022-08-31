/*  ============== example ============= */
type Fn = (this: number) => void

const thisParam: ThisParameterType<Fn> = 6

/*  ============== write code ============= */
export type MyThisParameterType<T> = T extends (this: infer K, ...args: any[]) => any ? K : unknown

/*  ============== test ============= */

/* Pass */
const p1: MyThisParameterType<Fn> = 6
const p2: MyThisParameterType<any> = void 0

/* Error */
const e1: ThisParameterType<Fn> = false
