type Join<T extends any[], U extends string | number, S extends string = ''> =  T extends [infer First, ...infer Rest]
  ? Rest["length"] extends 0
    ? Join<Rest, U, `${S}${First & string}`>
    : Join<Rest, U, `${S}${First & string}${U}`>
  : S

type Demo = Join<['2', '2', '2'], 1>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
]
