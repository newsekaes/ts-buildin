/* _____________ Your Code Here _____________ */

// export type Chainable<T extends Record<string, any> = {}> = {
//   option<K extends string, V>(key: K, value: V): Chainable<(K extends keyof T ? Omit<T, K> : T) & {[P in K]: V}>
//   get(): T
// } 

export type Chainable<T extends Record<string, any> = {}, > = {
  option<K extends string, V>(key: K, value: V): Chainable<{
    [P in keyof T | K]: (P extends Exclude<keyof T, K> ? T[P] : V)
  }>
  get(): T
} 

/* _____________ Test Cases _____________ */
import type { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  .option('name', 'last name')
  .get()

const result3 = a
  .option('name', 'another name')
  .option('name', 123)
  .get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>,
]

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

type Expected3 = {
  name: number
}