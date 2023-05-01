import { all } from 'redux-saga/effects';

import { saga as seoSuites } from './modules/seoSuites';

export default function* rootSaga() {
  yield all([seoSuites()]);
}
