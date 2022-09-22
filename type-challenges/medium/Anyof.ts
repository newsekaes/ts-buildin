/*
  949 - AnyOf
  -------
  by null (@kynefuk) #medium #array

  ### Question

  Implement Python liked `any` function in the type system. A type takes the Array and returns `true` if any element of the Array is true. If the Array is empty, return `false`.

  For example:

  ```ts
  type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
  type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.
  ```

  > View on GitHub: https://tsch.js.org/949
*/


/* _____________ Your Code Here _____________ */
type TrueString<T extends string> = T extends `${infer First}${infer Rest}` ? true : false;
type TrueNumber<T extends number> = T extends 0 ? false : true;
type TrueArray<T extends Array<any>> = T extends [infer First, ...infer Rest] ? true : false;
type TrueObject<T extends Record<any, any>> = (keyof T) extends never ? false : true;

type AnyOf<T extends readonly any[], K = false> =
  K extends true
    ? true
    : T extends readonly [infer First, ...infer Rest]
      ? AnyOf<readonly [...Rest], First extends string
        ? TrueString<First>
        : First extends number
          ? TrueNumber<First>
          : First extends any[]
            ? TrueArray<First>
            : First extends Record<any, any>
              ? TrueObject<First>
              : First>
      : K

type A = false extends {} ? true : false

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/949/answer
  > View solutions: https://tsch.js.org/949/solutions
  > More Challenges: https://tsch.js.org
*/

