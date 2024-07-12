// utils
import { paramCase } from 'src/utils/change-case';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export const paths = {
  home: '/',
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',
  driver: {
    root: `/driver`,
    details: (name) => `/driver/${name}`,
  },
  race: {
    root: `/race`,
    details: (id) => `/race/${id}`,
  },
};
