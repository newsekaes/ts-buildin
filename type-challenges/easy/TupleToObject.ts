export type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P extends string | number ? P : never
}

export type TupleToObject2<T extends readonly (string | number)[]> = {
  [P in T[number]]: P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type Result = TupleToObject<typeof tuple>

const tuple2 = ['a', 123, '0x1123', () => { }, /\d/] as const

type Result2 = TupleToObject<typeof tuple2>

const _tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type _Result = TupleToObject2<typeof tuple>

const _tuple2 = ['a', 123, '0x1123', () => { }, /\d/] as const

type _Result2 = TupleToObject2<typeof tuple2> // Error