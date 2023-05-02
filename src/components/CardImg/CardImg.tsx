import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Box } from '@mui/material';

import './styles.scss';
import NoImage from '../../assets/img/no-image.png';

interface ICardImgProps {
  src: string | null;
  alt: string;
}

const CardImg: React.FC<ICardImgProps> = ({ src, alt }) => {
  const [image, setImage] = useState(src || '');

  const handleError = () => {
    setImage(NoImage);
  };

  return (
    <Box className="cardImageContainer">
      <LazyLoadImage className="cardImage" onError={handleError} src={image} alt={alt} />
    </Box>
  );
};

export default CardImg;
