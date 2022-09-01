/*  ============== example ============= */
function toHex(this: number): string {
    return this.toString(16);
}

toHex.call({ toString: () => 'HaHa' }) // Error

/* another */

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5)

fiveToHex.call({ toString: () => 'HaHa' }) // Pass

/* another */
const fn: OmitThisParameter<string> = '123';

const notKnow: OmitThisParameter<unknown> = '123'

function f3(this: unknown) {
    return '123';
}

type Test = OmitThisParameter<typeof f3>

/*  ============== write code ============= */
// export type MyOmitThisParameter<T> = T extends (this: infer P, ...arg: infer Args) => infer Result ?  (...arg: Args) => Result : T
export type MyOmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...arg: infer Args) => infer Result ?  (...arg: Args) => Result : T

/*  ============== test ============= */

/* Pass */
const fiveToHex2: MyOmitThisParameter<typeof toHex> = toHex
fiveToHex2.call({ toString: () => 'HaHa' })

const fn2: MyOmitThisParameter<string> = '123';

const notKnow2: MyOmitThisParameter<unknown> = '123'

type Test2 = MyOmitThisParameter<typeof f3>
const test2: Test2 = () => '123';

/* Error */
toHex.call({ toString: () => 'HaHa' })
