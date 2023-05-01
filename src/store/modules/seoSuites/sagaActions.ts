import { FETCH_SEO_SUITES } from './types';

export const fetchSeoSuites = (payload?: any) => ({
  type: FETCH_SEO_SUITES,
  payload
});
