import { expectType, TypeEqual } from 'ts-expect';

type TupleToUnion<T extends readonly any[]> = T extends readonly (infer Item)[] ? Item : never

expectType<TypeEqual<TupleToUnion<[1, 2, 3]>, 1 | 2 | 3>>(true)
expectType<TypeEqual<TupleToUnion<Readonly<[1, 2, 3]>>, 1 | 2 | 3>>(true)
expectType<TypeEqual<TupleToUnion<[true, false]>, boolean>>(true)
expectType<TypeEqual<TupleToUnion<[number, 1, 3]>, number | 1 | 3>>(true)
expectType<TypeEqual<TupleToUnion<[false, 1, number]>, boolean | number | 1>>(false)
expectType<TypeEqual<TupleToUnion<[false, 1, number]>, boolean | 1 | number>>(false)
