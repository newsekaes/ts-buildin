type NumberToArray<T extends number, K extends readonly any[] = []> = K["length"] extends T ? readonly [...K] : NumberToArray<T, [...K, any]>

type Chunk<T extends any[], N extends number, Reuslt extends any[] = []> =
  T extends [...NumberToArray<N>, ...infer Rest]
    ? T extends [...infer A, ...Rest]
      ? Chunk<Rest, N, [...Reuslt, A]>
      : never
    : T extends never[]
      ? [...Reuslt]
      : [...Reuslt, T]


// type Chunk<T extends any[], N extends number, Reuslt extends any[] = []> =
//     T extends [...NumberToArray<N>, ...infer Rest]
//       ? Rest
//       : [...Reuslt, T]

type A = Chunk<[1, 2, 3, 4], 2>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]