/*  ============== example ============= */
enum Name {
  Sam,
  Tom
}

const example: Record<Name, number> = {
  [Name.Sam]: 1000,
  [Name.Tom]: 2000,
}

/*  ============== write code ============= */
export type MyRecord<K extends keyof any, T> = {
  [p in K]: p
}

/*  ============== test ============= */

/* Pass */
const e1: MyRecord<Name, number> = {
  [Name.Sam]: 1000,
  [Name.Tom]: 2000,
}

/* Error */
const e2: MyRecord<Name, number> = {
  [Name.Sam]: 1000,
} 
