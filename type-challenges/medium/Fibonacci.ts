type NumberToArray<T extends number, K extends 0[] = []> = K['length'] extends T ? K : NumberToArray<T, [...K, 0]>

type Add<A extends number, B extends number> = [...NumberToArray<A>, ...NumberToArray<B>]['length']

type MinusOne<T extends number> = NumberToArray<T> extends [infer First, ...infer Rest] ? Rest['length'] : 0

type Fibonacci<T extends number> = T extends 0
  ? 0 
  : T extends 1
    ? 1 
    : Add<Fibonacci<MinusOne<T>>, Fibonacci<MinusOne<MinusOne<T>>>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]
