import React, { useState } from 'react';

import { IconButton } from '@mui/material';
import cn from 'classnames';

import './styles.scss';
import { FavIconContained, FavIconOutlined } from '../icons';

const FavButton = () => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <IconButton
      className={cn({
        favButton: !selected,
        'favButton--selected': selected
      })}
      onClick={() => setSelected((prevState: boolean) => !prevState)}>
      {selected ? <FavIconContained /> : <FavIconOutlined />}
    </IconButton>
  );
};

export default FavButton;
