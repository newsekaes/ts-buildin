type Turple2Union<T> = T extends (infer U)[] ? U : T

type Without<T, U> = T extends [infer First, ...infer Rest]
  ? First extends Turple2Union<U> ? Without<Rest, U> : [First, ...Without<Rest, U>]
  : T

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]
