export type Driver = {
  _id: string
  id: string
  name: string
  number: string
  team: string
  rank: number
  picture: string
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

export type Team = any

export type Race = {
  round: number
  name: string
  official_name: string
  date: string
  location: string
  format: string
  flag: string
  results: RaceResult[]
  status: string
}

export type RaceResult = {
  driver_number: number
  position: number
  grid_position: number
  driver: string
  code: string
  team: string
  picture: string
  points: number
  status: string
  driver_id: string
  team_id: string
}
