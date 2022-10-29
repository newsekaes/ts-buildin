type Multi10<T extends unknown[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]

type NumStrToTuple<L extends string, K extends unknown[] = []> = `${K["length"]}` extends L ? K : NumStrToTuple<L, [...K, unknown]>

type ConstructTuple<L extends string | number, Res extends unknown[] = []> =
  `${L}` extends `${infer First}${infer Rest}`
    ? ConstructTuple<Rest, [...Multi10<Res>, ...NumStrToTuple<First>]>
    : Res

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
  Expect<Equal<ConstructTuple<9999>['length'], 9999>>,
]
