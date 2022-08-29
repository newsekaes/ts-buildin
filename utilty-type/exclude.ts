/*  ============== example ============= */
type Foo = "a" | "b" | "c"

const bar: Exclude<Foo, "a"> = "b"

/*  ============== write code ============= */
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
export type MyExclude<T, K> = T extends K ? never : T

/*  ============== test ============= */

/* Pass */
const p1: MyExclude<Foo, "a"> = "b"

/* Error */
const e1: MyExclude<Foo, "a"> = "a"
