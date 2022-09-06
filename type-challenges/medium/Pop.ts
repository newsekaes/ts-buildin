/*
  16 - 出堆
  -------
  by Anthony Fu (@antfu) #中等 #array

  ### 题目

  >在此挑战中建议使用TypeScript 4.0

  实现一个通用`Pop<T>`，它接受一个数组`T`，并返回一个由数组`T`的前length-1项以相同的顺序组成的数组。

  例如

  ```ts
  type arr1 = ['a', 'b', 'c', 'd']
  type arr2 = [3, 2, 1]

  type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
  type re2 = Pop<arr2> // expected to be [3, 2]
  ```

  **额外**：同样，您也可以实现`Shift`，`Push`和`Unshift`吗？

  > 在 Github 上查看：https://tsch.js.org/16/zh-CN
*/


/* _____________ 你的代码 _____________ */

type Pop<T extends any[]> = T extends [...infer Rest, infer Last] ? Rest : T

type Shift<T extends any[]> = T extends [infer First, ...infer Rest] ? Rest : T

type Unshift<T extends any[], V> = T extends [...infer Rest] ? [V, ...Rest] : never

type Push<T extends any[], V> = T extends [...infer Rest] ? [...Rest, V] : never

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases1 = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
]
type cases2 = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
]
type cases3 = [
  Expect<Equal<Unshift<[3, 2, 1], 4>, [4, 3, 2, 1]>>,
  Expect<Equal<Unshift<['a', 'b', 'c', 'd'], 'e'>, ['e', 'a', 'b', 'c', 'd']>>,
]
type cases4 = [
  Expect<Equal<Push<[3, 2, 1], 0>, [3, 2, 1, 0]>>,
  Expect<Equal<Push<['a', 'b', 'c', 'd'], 'e'>, ['a', 'b', 'c', 'd', "e"]>>,
]


/* _____________ 下一步 _____________ */



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/16/answer/zh-CN
  > 查看解答：https://tsch.js.org/16/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

