type SuffixDel<T extends string> = T extends T ? T extends `${infer Rest}${' '}` ? Rest : T : never

type ExcludeNoNever<T, U> = T extends U ? "" : T

type CombineUnion<T extends string, TT extends string = T> = T extends "" ? "" : ({
  [P in T]: `${P} ${CombineUnion<ExcludeNoNever<TT, P>>}`
}[T])

type Combination<T extends string[], K extends string = T[number]> = SuffixDel<CombineUnion<K>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>,
  'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
]
