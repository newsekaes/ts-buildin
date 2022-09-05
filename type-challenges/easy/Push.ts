import { expectType, TypeEqual } from "ts-expect"

type Push<T extends any[], Item> = [...T, Item]

expectType<TypeEqual<Push<[1, 2], 3>, [1, 2, 3]>>(true)
expectType<TypeEqual<Push<["a", "b"], true>, ["a", "b", true]>>(true)
expectType<TypeEqual<Push<[], false>, [false]>>(true)

type Unshift<T extends any[], Item> = [Item, ...T]

expectType<TypeEqual<Unshift<[1, 2], 3>, [3, 1, 2]>>(true)
expectType<TypeEqual<Unshift<["a", "b"], true>, [true, "a", "b"]>>(true)
expectType<TypeEqual<Unshift<[], false>, [false]>>(true)
