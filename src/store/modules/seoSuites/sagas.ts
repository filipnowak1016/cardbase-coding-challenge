import axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { API_ENDPOINT } from '../../../utils/constants';
import { ISuite, setData, setLoading } from './slice';
import { FETCH_SEO_SUITES } from './types';

interface IServerResponse {
  meta: {
    total_cards_count: number;
  };
  suites: ISuite[];
}

function* fetchSeoSuites() {
  try {
    yield put(setLoading(true));
    const response: AxiosResponse<IServerResponse> = yield call(axios.request, {
      url: API_ENDPOINT,
      method: 'GET'
    });
    yield put(setLoading(false));
    yield put(setData(response.data.suites));
  } catch (e) {
    yield put(setLoading(false));
  }
}

export default function* saga() {
  yield takeLatest(FETCH_SEO_SUITES, fetchSeoSuites);
}
