import React from 'react';

import { Box } from '@mui/material';

import './styles.scss';
import Search from '../Search/Search';

const Header = () => {
  return (
    <Box className="header">
      <img src={require('../../assets/img/Logo.svg').default} className="logo" alt="logo" />
      <Search />
    </Box>
  );
};

export default Header;
