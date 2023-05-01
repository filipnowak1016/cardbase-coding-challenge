import React from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

interface ILoadingSpinner {
  open: boolean;
}

const LoadingSpinner: React.FC<ILoadingSpinner> = ({ open }) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default LoadingSpinner;
