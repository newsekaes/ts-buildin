type NumberToArray<T extends number, K extends 0[] = []> = K['length'] extends T ? K : NumberToArray<T, [...K, 0]>

type ArrayLengthGreaterThan<T extends 0[] = [], U extends 0[] = []> =
  T["length"] extends 0
    ? false
    : U["length"] extends 0
      ? true
      : ArrayLengthGreaterThan<T extends [0, ...infer Rest] ? Rest : [], U extends [0, ...infer Rest] ? Rest : []>

type GreaterThan<T extends number, U extends number> = ArrayLengthGreaterThan<NumberToArray<T>, NumberToArray<U>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
]
