export type Driver = {
  name: string;
  code: string;
  image: string;
  color: string;
  team: string;
  car: string;
  team_logo: string;
  team_id: string;
  driver_number: number;
  country_code: string;
  driver_picture: string;
  helmet: string;
  details: {
    bio: string;
    team: string;
    country: string;
    podiums: string;
    points: string;
    grands_prix_entered: string;
    world_championships: string;
    highest_race_finish: string;
    highest_grid_position: string;
    date_of_birth: string;
    place_of_birth: string;
  };
};

export type Team = {
  id: string;
  name: string;
  position: number;
  logo: string;
  car: string;
  wins: number;
  points: number;
  color: string;
  drivers: Driver[];
  details: {
    full_team_name: string;
    base: string;
    team_chief: string;
    technical_chief: string;
    chassis: string;
    power_unit: string;
    first_team_entry: string;
    world_championships: string;
    highest_race_finish: string;
    pole_positions: string;
    fastest_laps: string;
  };
};

export type Race = {
  circuit_short_name: string;
  location: string;
  country_code: string;
  country_name: string;
  meeting_name: string;
  meeting_official_name: string;
  gmt_offset: string;
  date_start: string;
  year: number;
  flag: string;
  completed: boolean;
};
