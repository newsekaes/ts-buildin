import { expectType, TypeEqual } from 'ts-expect';

type DeapReadonly<T> = T extends {} ? {
  readonly [P in keyof T]: DeapReadonly<T[P]>
} : T

expectType<TypeEqual<DeapReadonly<{ a: number; b: 1}>, { readonly a: number; readonly b: 1 }>>(true)
expectType<TypeEqual<DeapReadonly<{ a: { foo: string, bar: "a" }; b: 1}>, { readonly a: { readonly foo: string, readonly bar: "a" } ; readonly b: 1 }>>(true)
