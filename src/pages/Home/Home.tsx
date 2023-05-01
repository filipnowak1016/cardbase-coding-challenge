import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@mui/material';

import CardGroup from '../../components/CardGroup/CardGroup';
import Category from '../../components/Category/Category';
import Header from '../../components/Header/Header';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import useFilter from '../../hooks/useFilter';
import { RootState } from '../../store';
import { fetchSeoSuites } from '../../store/modules/seoSuites';
import { ISeoSuite, ISuite } from '../../store/modules/seoSuites/slice';
import './styles.scss';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.seoSuites.data);
  const isLoading = useSelector((state: RootState) => state.seoSuites.isLoading);
  const { filterStr } = useFilter();

  const filteredData = useMemo(() => {
    let result: ISuite[] = [];
    if (data) {
      data.forEach((item: ISuite) => {
        const filteredData = item.seo_suites.filter(
          (seoSuite: ISeoSuite) => seoSuite.name.toLowerCase().indexOf(filterStr || '') !== -1
        );
        if (filteredData.length > 0) {
          result.push({ ...item, seo_suites: filteredData });
        }
      });
    }
    return result;
  }, [data, filterStr]);

  useEffect(() => {
    dispatch(fetchSeoSuites());
  }, [dispatch]);

  return (
    <React.Fragment>
      <LoadingSpinner open={isLoading} />
      <Header />
      <Category />
      <Box className="container">
        <CardGroup data={filteredData} totalCount={data?.length || 0} />
      </Box>
    </React.Fragment>
  );
};

export default Home;
