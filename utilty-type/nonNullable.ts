/*  ============== example ============= */
type Foo = "a" | null | undefined

const example: NonNullable<Foo> = "a"

/*  ============== write code ============= */
type MyNonNullable<T> = T extends null | undefined ? never : T

/*  ============== test ============= */

/* Pass */
const p1: MyNonNullable<Foo> = "a"

/* Error */
const e1: MyNonNullable<Foo> = null
