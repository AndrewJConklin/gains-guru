export type ExerciseDetails = {
  name: string,
  id: string,
  description: string,
  images?: Image[]
}

type Image = {
  id: string,
  image: string,
  is_main: boolean
}
