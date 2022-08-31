/*  ============== example ============= */
abstract class NameConstructor {
    name: string;
    describe?: string;

    constructor(name: string, describe?: string) {
        this.name = name;
        this.describe = describe;
    }
}

const paramA: ConstructorParameters<typeof NameConstructor> = ["Sam"]
const paramB: ConstructorParameters<typeof NameConstructor> = ["Sam", "This is my name"]

/*  ============== write code ============= */
export type MyNameConstructor<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer K) => any ? K : never

/*  ============== test ============= */

/* Pass */
const p1: MyNameConstructor<typeof NameConstructor> = ["Sam"]
const p2: MyNameConstructor<typeof NameConstructor> = ["Sam", "This is my name"]

/* Error */
const e1: MyNameConstructor<typeof NameConstructor> = ["Sam", 0]
const e2: MyNameConstructor<typeof NameConstructor> = []
