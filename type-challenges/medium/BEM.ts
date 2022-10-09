type EMStr<E extends string[], I extends string> = E["length"] extends 0 ? '' : E extends (infer E)[] ? `${I}${E & string}` : never

type BEM<B extends string, E extends string[], M extends string[]> = `${B}${EMStr<E, '__'>}${EMStr<M, '--'>}`

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]
