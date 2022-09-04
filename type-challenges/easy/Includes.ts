import { TypeEqual, expectType } from "ts-expect"

export type Includes<T extends readonly unknown[], K> = T extends readonly (infer Item)[] ? [K] extends [Item] ? true : false : never

expectType<TypeEqual<Includes<[1, 2, 3], 1>, true>>(true)
expectType<TypeEqual<Includes<[1, 2, 3], 4>, false>>(true)
expectType<TypeEqual<Includes<[boolean, 1, string], false>, false>>(true)
expectType<TypeEqual<Includes<[], 1>, false>>(true)
expectType<TypeEqual<Includes<[null], undefined>, false>>(true)
expectType<TypeEqual<Includes<[false, 1, string], boolean>, false>>(true)
expectType<TypeEqual<Includes<[{}], { a: 'A' }>, false>>(true)

type isEuqal<T, K> = (<G>() => G extends T ? 1 : 2) extends (<G>() => G extends K ? 1 : 2) ? true : false

export type Includes2<T extends readonly unknown[], K> = 
  T extends [infer First, ...infer Rest]
    ? isEuqal<First, K> extends true
      ? true
      : Includes2<Rest, K>
    : false
    
expectType<TypeEqual<Includes2<[1, 2, 3], 1>, true>>(true)
expectType<TypeEqual<Includes2<[1, 2, 3], 4>, false>>(true)
expectType<TypeEqual<Includes2<[boolean, 1, string], false>, false>>(true)
expectType<TypeEqual<Includes2<[], 1>, false>>(true)
expectType<TypeEqual<Includes2<[null], undefined>, false>>(true)
expectType<TypeEqual<Includes2<[false, 1, string], boolean>, false>>(true)
expectType<TypeEqual<Includes2<[{}], { a: 'A' }>, false>>(true)