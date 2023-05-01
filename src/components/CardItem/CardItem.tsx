import React, { useCallback } from 'react';
import Highlighter from 'react-highlight-words';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Button } from '@mui/material';

import './styles.scss';
import useFilter from '../../hooks/useFilter';
import { RootState } from '../../store';
import { ISeoSuite, selectItem, removeSelection } from '../../store/modules/seoSuites/slice';
import FavButton from '../FavButton/FavButton';

interface ICardItemProps {
  data: ISeoSuite;
}

const CardItem: React.FC<ICardItemProps> = ({ data }) => {
  const { filterStr } = useFilter();
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.seoSuites.selectedItems);

  const handleSelectItem = useCallback(() => {
    dispatch(selectItem(data.id));
  }, [data.id, dispatch]);

  const handleRemoveSelection = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      dispatch(removeSelection(data.id));
    },
    [data.id, dispatch]
  );

  const handleClickDetails = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  }, []);

  return (
    <Box className="cardItem">
      <Box sx={{ display: 'flex' }} onClick={handleSelectItem}>
        <LazyLoadImage src={data.image || ''} width={118} height={118} alt="suiteImage" />
        <Box className="cardItem__content">
          <Highlighter
            className="cardItem__title"
            searchWords={[filterStr || '']}
            autoEscape={true}
            textToHighlight={data.name}
          />
          <Box>
            {selectedItems.includes(data.id) ? (
              <Button
                onClick={handleRemoveSelection}
                className="skipSelectionBtn"
                variant="contained"
                color="primary">
                Skip Selection
              </Button>
            ) : null}
            <Button
              onClick={handleClickDetails}
              className="detailsBtn"
              variant="contained"
              color="secondary">
              Details
            </Button>
          </Box>
        </Box>
      </Box>
      <FavButton />
    </Box>
  );
};

export default CardItem;
