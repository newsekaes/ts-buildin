export type Length<T> = T extends readonly any[] ? T['length'] : never

type Alp = ['a', 'b', 'c', 'd'];

type Names = ["Sam", "Tom", "Ame"]

const test = ["a", "b"] as const

type AlpLength = Length<Alp>

type NamesLength = Length<Names>

type TestLength = Length<typeof test>
