/*  ============== example ============= */
type Foo = "a" | "b" | "c"

const example: Extract<Foo, "a"> = "a"

/*  ============== write code ============= */
export type MyExtract<T, K> = T extends K ? T : never

/*  ============== test ============= */

/* Pass */
const p1: MyExtract<Foo, "a"> = "a"

/* Error */
const p2: MyExtract<Foo, "a"> = "b"
