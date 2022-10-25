type Has<T, K> = T extends [infer First, ...infer Rest] ? Equal<First, K> extends true ? true : Has<Rest, K> : false

type Unique<T extends any[], Res extends any[] = []> = T extends [infer First, ...infer Rest]
  ? Has<Res, First> extends true
    ? Unique<Rest, Res>
    : Unique<Rest, [...Res, First]>
  : Res

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>, [string, number, 1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
]