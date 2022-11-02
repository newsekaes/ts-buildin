type TupleToPrimitive<T extends any[], Res extends any[] = []> = T extends [infer First, ...infer Rest] ? TupleToPrimitive<Rest, [...Res, ToPrimitive<First>]> : Res

type ToPrimitive<T> = T extends Record<any, any>
  ? {
    [P in keyof T]: ToPrimitive<T[P]>
  }
  : T extends any[] ? TupleToPrimitive<T>
  : T extends string ? string
  : T extends number ? number
  : T extends boolean ? boolean
  : T


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type PersonInfo = {
  name: 'Tom'
  age: 30
  married: false
  addr: {
    home: '123456'
    phone: '13111111111'
  }
  hobbies: ['sing', 'dance']
}

type ExpectedResult = {
  name: string
  age: number
  married: boolean
  addr: {
    home: string
    phone: string
  }
  hobbies: [string, string]
}

type cases = [
  Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>,
]
