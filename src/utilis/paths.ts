export const paths = {
  home: '/',
  drivers: {
    root: '/drivers',
    details: (id: any) => `/drivers/${id}`,
  },
  teams: {
    root: '/teams',
    details: (id: any) => `/teams/${id}`,
  },
  races: {
    root: '/races',
    details: (id: any) => `/races/${id}`,
  },
}
