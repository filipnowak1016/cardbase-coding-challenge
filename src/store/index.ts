import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import seoSuitesSlice from './modules/seoSuites';
import saga from './sagas';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    seoSuites: seoSuitesSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
});

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
