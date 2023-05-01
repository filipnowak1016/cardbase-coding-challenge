import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISeoSuite {
  id: number;
  image: string | null;
  is_follow: boolean;
  name: string;
  slug: string;
  sport_name: string;
  year: number;
}

export interface ISuite {
  id: number | null;
  year: number;
  seo_suites: ISeoSuite[];
}

interface ISeoSuitesState {
  isLoading: boolean;
  data: ISuite[];
  selectedItems: number[];
}

const initialState: ISeoSuitesState = {
  isLoading: false,
  data: [],
  selectedItems: []
};

const slice = createSlice({
  name: 'seoSuites',
  initialState,
  reducers: {
    setLoading: (state: ISeoSuitesState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setData: (state: ISeoSuitesState, action: PayloadAction<ISuite[]>) => {
      state.data = action.payload;
    },
    selectItem: (state: ISeoSuitesState, action: PayloadAction<number>) => {
      if (!state.selectedItems.includes(action.payload)) {
        state.selectedItems.push(action.payload);
      }
    },
    removeSelection: (state: ISeoSuitesState, action: PayloadAction<number>) => {
      state.selectedItems = state.selectedItems.filter((item: number) => item !== action.payload);
    }
  }
});

export const { setLoading, setData, selectItem, removeSelection } = slice.actions;

export default slice.reducer;
