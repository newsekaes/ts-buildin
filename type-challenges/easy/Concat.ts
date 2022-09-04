type ArrayUnknown = unknown[]
export type Concat<T extends unknown[], K extends unknown[]> = [...T, ...K]

type Result1 = Concat<[1], [2]>

type Result2 = Concat<[1, 2, 3], [2]>

type Result3 = Concat<[1], []>

type Result4 = Concat<[], []>

type Result5 = Concat<string, [2]>
