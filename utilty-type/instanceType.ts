/*  ============== example ============= */
type InstanceFoo = abstract new () => {
    name: string;
    age: number;
}

const example: InstanceType<InstanceFoo> = {
    name: "Sam",
    age: 14,
}

/*  ============== write code ============= */
export type MyInstanceType<T extends abstract new (...args: any) => any> = T extends new (...args: any) => infer K ? K : any

/*  ============== test ============= */

/* Pass */
const p1: MyInstanceType<InstanceFoo> = {
    name: "Sam",
    age: 14,
}

/* Error */
const e1: InstanceType<InstanceFoo> = {
    name: "Sam",
}

const e2: InstanceType<InstanceFoo> = {
    name: "Sam",
    age: false,
}
