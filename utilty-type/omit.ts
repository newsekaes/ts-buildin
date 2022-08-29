/*  ============== example ============= */
interface Foo {
    a: string;
    b?: string;
    c: boolean
}

const example: Omit<Foo, 'a' | 'd'> = {
    c: false
}

/*  ============== write code ============= */
export type MyOmit_A<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type MyOmit_B<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

/*  ============== test ============= */

/* Pass */
const p1: MyOmit_A<Foo, 'a'> = {
    c: false
}

const p2: MyOmit_A<Foo, 'c'> = {
    a: 'a'
}

const p3: MyOmit_B<Foo, 'a'> = {
    c: false
}

const p4: MyOmit_B<Foo, 'c' | 'd'> = {
    a: 'a'
}

/* Error */
const e1: MyOmit_A<Foo, 'a'> = {
}

const e2: MyOmit_A<Foo, 'a'> = {
    a: 'a',
    c: false,
}

const e3: MyOmit_A<Foo, 'a' | 'd'> = {
    c: false
}
