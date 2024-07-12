export type Driver = {
  session_key: number;
  meeting_key: number;
  broadcast_name: string;
  country_code: string;
  first_name: string;
  full_name: string;
  headshot_url?: string;
  last_name: string;
  driver_number: number;
  team_colour: string;
  team_name: string;
  name_acronym: string;
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
