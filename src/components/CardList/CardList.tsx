import React from 'react';

import { Box, Divider, Typography } from '@mui/material';

import './styles.scss';
import { ISeoSuite, ISuite } from '../../store/modules/seoSuites/slice';
import CardItem from '../CardItem/CardItem';

interface ICardListProps {
  data: ISuite;
}

const CardList: React.FC<ICardListProps> = ({ data }) => {
  return (
    <Box>
      <Typography className="year">{data.year}</Typography>
      <Box className="cardList">
        {data.seo_suites.map((item: ISeoSuite, index: number) => (
          <Box key={item.id}>
            <CardItem data={item} />
            {index !== data.seo_suites.length - 1 ? (
              <Divider sx={{ margin: '20px -15px' }} />
            ) : null}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CardList;
