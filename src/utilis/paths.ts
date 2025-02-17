const year = new Date().getFullYear()

export const paths = {
  home: '/' + year,
  drivers: {
    root: (y: any = year) => `/${y}/drive`,
    details: (id: any, y: any = year) => `/${y}/drivers/${id}`,
  },
  teams: {
    root: (y: any = year) => `/${y}/teams`,
    details: (id: any, y: any = year) => `/${y}/teams/${id}`,
  },
  races: {
    root: (y: any = year) => `/${y}/races`,
    details: (id: any, y: any = year) => `/${y}/races/${id}`,
  },
}
