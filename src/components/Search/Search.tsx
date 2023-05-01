import React, { ChangeEventHandler, useCallback } from 'react';

import { Box, Input, InputAdornment, styled } from '@mui/material';

import useFilter from '../../hooks/useFilter';
import { SearchIcon } from '../icons';
import './styles.scss';

const StyledInput = styled(Input)({
  '&::after': {
    border: 'unset'
  },
  '&::before': {
    border: 'unset !important'
  }
});

const Search = () => {
  const { setFilterStr, filterStr } = useFilter();

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
    (event) => {
      setFilterStr(event.target.value);
    },
    [setFilterStr]
  );

  return (
    <Box className="search">
      <StyledInput
        placeholder="What do you want to find?"
        onChange={handleChange}
        value={filterStr || ''}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </Box>
  );
};

export default Search;
