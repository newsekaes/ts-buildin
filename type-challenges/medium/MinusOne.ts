/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math
  
  ### Question
  
  Given a number (always positive) as a type. Your type should return the number decreased by one.
  
  For example:
  
  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```
  
  > View on GitHub: https://tsch.js.org/2257
*/


/* _____________ Your Code Here _____________ */
type Digital = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0"

type DigitalToArray<N extends Digital, Arr extends any[] = []> = `${Arr["length"]}` extends N ? Arr : DigitalToArray<N, [...Arr, 0]>

type Multify10<T extends any[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]

type ToArray<S extends string, T extends any[] = []> = S extends `${infer First}${infer Rest}`
  ? First extends Digital
    ? ToArray<Rest, [...Multify10<T>, ...DigitalToArray<First>]>
    : never
  : T

type MinusOne<T extends number> = ToArray<`${T}`> extends [infer First, ...infer Rest] ? Rest["length"] : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/

