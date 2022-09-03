type FirstOfArray<T extends any[]> = T[0] extends T[number] ? T[0] : never
type FirstOfArray2<T extends any[]> = T extends readonly [infer A, ...infer C] ? A : never
type FirstOfArray3<T extends any[]> = T extends [] ? never : T[0]

type arr1 = ['a', 'b', 'c']

type arr2 = []

type Result1 = FirstOfArray3<arr1>

type Result2 = FirstOfArray3<arr2>
