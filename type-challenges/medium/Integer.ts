type isIntegerStr<T extends string, B extends boolean = false> = T extends `${infer First}${infer Rest}`
? First extends '1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'0'
  ? isIntegerStr<Rest, true>
  : false
: B

type Integer<T> = T extends number
? isIntegerStr<`${T}`> extends true ? T : never
: never


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

let x = 1
let y = 1 as const

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>,
]
