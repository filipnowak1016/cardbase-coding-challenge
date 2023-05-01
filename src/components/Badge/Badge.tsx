import React from 'react';

import { Box } from '@mui/material';

import './styles.scss';

interface IBadgeProps {
  badgeContent: number;
  color: string;
}

const Badge: React.FC<IBadgeProps> = ({ badgeContent, color }) => {
  return (
    <Box className="badge" sx={{ backgroundColor: color }}>
      {badgeContent}
    </Box>
  );
};

export default Badge;
