/*  ============== example ============= */
interface foo {
    a: string;
    b: string;
    c: boolean;
}

const example: Pick<foo, "a" | "c"> = {
    a: 'a',
    c: true,
}

/*  ============== write code ============= */
export type MyPick<T, K extends keyof T> = {
    [p in K]: T[p]
}

/*  ============== test ============= */

/* Pass */
const e1: Pick<foo, "a" | "c"> = {
    a: 'a',
    c: true,
}

/* Error */
const e2: Pick<foo, "a" | "d"> = {
    a: 'a',
    d: true,
}

const e3: Pick<foo, "a" | "b"> = {
    a: 'a',
}
