/*
  62 - Type Lookup
  -------
  by Anthony Fu (@antfu) #medium #union #map
  
  ### Question
  
  Sometimes, you may want to lookup for a type in a union to by their attributes. 
  
  In this challenge, we would like to get the corresponding type by searching for the common `type` field in the union `Cat | Dog`. In other words, we will expect to get `Dog` for `LookUp<Dog | Cat, 'dog'>` and `Cat` for `LookUp<Dog | Cat, 'cat'>` in the following example.
  
  ```ts
  interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
  }
  
  interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
  }
  
  type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
  ```
  
  > View on GitHub: https://tsch.js.org/62
*/


/* _____________ Your Code Here _____________ */

type Has<UItem, T> = UItem extends Record<any, any>
? { [P in keyof UItem]:  Has<UItem[P], T> } extends { [P in keyof UItem]: never } ? never : true
: T extends UItem ? true : never

type LookUp<U, T, Keys = keyof U> =  U extends infer UItem
  ? Has<UItem, T> extends never
    ? never
    : UItem
  : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
  size: {
    mouth: 'small'
  }
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog
type test = LookUp<Animal, 'dog'>
type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
  Expect<Equal<LookUp<Animal, 'small'>, Cat>>,
  Expect<Equal<LookUp<Animal, 'white'>, Dog>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/62/answer
  > View solutions: https://tsch.js.org/62/solutions
  > More Challenges: https://tsch.js.org
*/

