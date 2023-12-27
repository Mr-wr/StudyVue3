export interface PersonInterface {
  id: string
  name: string
  age: number
  x?: number
}

export type Persons = PersonInterface[]
