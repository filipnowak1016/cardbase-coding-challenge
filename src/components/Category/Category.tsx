import React from 'react';
import { useSelector } from 'react-redux';

import { Box, Divider, Typography } from '@mui/material';

import './styles.scss';
import { RootState } from '../../store';
import Badge from '../Badge';

const Category = () => {
  const selectedItems = useSelector((state: RootState) => state.seoSuites.selectedItems);

  return (
    <Box className="category">
      <Typography sx={{ fontWeight: 'bold' }}>All</Typography>
      <Divider className="divider" orientation="vertical" />
      <Box className="selected">
        <Typography>Selected</Typography>
        <Badge badgeContent={selectedItems.length} color="#F2F2F2" />
      </Box>
    </Box>
  );
};

export default Category;
