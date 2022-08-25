/*  ============== example ============= */
interface Par {
  name: string;
  age: number;
  birth: Date;
}

const example: Partial<Par> = {
  name: 'Sam'
}

/*  ============== write code ============= */

export type MyPatrial<T> = {
  [p in keyof T]?: T[p]
}

/*  ============== test ============= */

/* Pass */

const p1: MyPatrial<Par> = {
  name: 'Sam'
}

/* Error */

const p2: MyPatrial<Par> = {
  contry: 'China'
}
