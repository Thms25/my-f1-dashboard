export const paths = {
  home: '/',
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',
  driver: {
    root: `/driver`,
    details: (name) => `/driver/${name}`,
  },
  team: {
    root: `/team`,
    details: (name) => `/team/${name}`,
  },
  race: {
    root: `/race`,
    details: (id) => `/race/${id}`,
  },
};
