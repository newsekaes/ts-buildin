/*  ============== example ============= */
interface foo {
  a: string
}

const example: Readonly<foo> = {
  a: 'a'
}

example.a = 'b'; // error

/*  ============== write code ============= */
export type MyReadonly<T> = {
  readonly [p in keyof T]: T[p]
}

/*  ============== test ============= */
const e1: MyReadonly<foo> = {
  a: 'a'
}

const e2: foo = {
  a: 'a'
}

/* Pass */
e2.a = 'b'

/* Error */
e1.a = 'b'
