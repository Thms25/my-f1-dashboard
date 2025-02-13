export type Driver = {
  _id: string
  id: string
  name: string
  number: string
  team: string
  rank: number
  pciture: string
  helmet: string
  info: driver_info
  images: string[]
}

type driver_info = {
  bio: string
  team: string
  country: string
  podiums: number | string
  grands_prix_entered: number | string
  world_championships: number | string
  highest_race_finish: number | string
  highest_grid_position: number | string
  date_of_birth: string
  place_of_birth: string
  flag: string
}
