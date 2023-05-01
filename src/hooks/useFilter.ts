import { useCallback } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

const useFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [queryParams] = useSearchParams();

  const setFilterStr = useCallback(
    (str: string) => {
      navigate(`${location.pathname}?search=${str}`);
    },
    [location.pathname, navigate]
  );

  return {
    setFilterStr,
    filterStr: queryParams.get('search')
  };
};

export default useFilter;
