export type Awaited<T> = T extends Promise<infer R> ? Awaited<R> : T

type ExampleType1 = Promise<string | number>

type Result1 = Awaited<ExampleType1>

type ExampleType2 = Promise<Promise<string | number>>

type Result2 = Awaited<ExampleType2>

type ExampleType3 = Promise<string>

type Result3 = Awaited<ExampleType3>
