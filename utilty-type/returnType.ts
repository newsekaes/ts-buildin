/*  ============== example ============= */
type Fn = () => {
    a: string,
    b: number,
    c: boolean,
}

const result: ReturnType<Fn> = { a: "a", b: 0, c: false }
const r2: ReturnType<any> = "something"

/*  ============== write code ============= */
export type MyReturnType<T extends (...args: any) =>  any> = T extends (...args: any) => infer K ? K : any

/*  ============== test ============= */

/* Pass */
const p1: MyReturnType<Fn> = { a: "a", b: 0, c: false }

/* Error */
const e1: MyReturnType<Fn> = { a: "a", b: 0, c: 1 }
const e2: MyReturnType<Fn> = { a: "a" }
const e3: MyReturnType<Fn> = { a: "a", c: 1 }
const e4: MyReturnType<Fn> = { a: "a", b: 1, c: false, d: 1 }
