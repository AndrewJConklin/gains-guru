export type Excercise = {
  name: string,
  id: number,
  description: string,
  category: {
    id: number,
    name: string
  },
  language: {
    short_name: string
  }
}
