type FillStatus = "Init" | "Insert"

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Status extends FillStatus = "Init",
  Result extends unknown[] = []
> = 
T extends never[]
  ? [...Result, ...T]
  : Start extends End
    ? T
    : Status extends "Init"
      ? Result["length"] extends Start
        ? T extends [infer First, ...infer Rest] ? Fill<T, N, Start, End, "Insert", [...Result]> : never
        : Result["length"] extends End
          ? [...Result, ...T]
          : T extends [infer First, ...infer Rest] ? Fill<Rest, N, Start, End, Status, [...Result, First]> : never
      : Status extends "Insert"
        ? Result["length"] extends End
          ? [...Result, ...T]
          : T extends [infer First, ...infer Rest] ? Fill<Rest, N, Start, End, Status, [...Result, N]> : never
        : never

type Test = Fill<[1, 2, 3], 0>


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
]
