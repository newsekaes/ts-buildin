/*  ============== example ============= */
interface Foo {
  a?: string;
  b?: string;
}

const example: Required<Foo> = {
  a: 'a',
  b: 'b'
}

/*  ============== write code ============= */
// https://www.typescriptlang.org/docs/handbook/release-notes/overview.html#improved-control-over-mapped-type-modifiers
export type MyRequired<T> = {
  [p in keyof T]-?: T[p]
}

/*  ============== test ============= */

/* Pass */
const e1: MyRequired<Foo> = {
  a: 'a',
  b: 'b'
}

/* Error */
const e2: MyRequired<Foo> = {
  a: 'a',
}
