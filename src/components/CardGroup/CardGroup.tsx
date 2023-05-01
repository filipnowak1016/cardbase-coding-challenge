import React, { useEffect, useRef, useState } from 'react';

import { Box } from '@mui/material';

import CardList from '../../components/CardList/CardList';
import useFilter from '../../hooks/useFilter';
import { ISuite } from '../../store/modules/seoSuites/slice';
import { PAGE_SIZE } from '../../utils/constants';

interface ICardGroupProps {
  data: ISuite[];
  totalCount: number;
}

const CardGroup: React.FC<ICardGroupProps> = ({ data, totalCount }) => {
  const [page, setPage] = useState(1);
  const { filterStr } = useFilter();
  const listRef = useRef<HTMLDivElement>();

  const handleScroll = () => {
    if (listRef.current && listRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
      setPage((prevPage: number) => prevPage + 1);
    }
  };

  useEffect(() => {
    setPage(1);
  }, [filterStr]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box ref={listRef}>
      {data?.slice(0, Math.min(page * PAGE_SIZE, totalCount)).map((item: ISuite) => (
        <CardList key={item.year} data={item} />
      ))}
    </Box>
  );
};

export default CardGroup;
