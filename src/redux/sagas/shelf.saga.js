import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchShelf(action) {
  console.log('fetchShelf got an action!', action);

  let response = yield axios({
    method: 'GET',
    url: '/api/shelf/'
  });

  console.log('GET /info response', response);

  // Send our pet data to the reducer
  yield put({
    type: 'SET_SHELF',
    payload: response.data
  })
}

function* shelfSaga() {
  yield takeLatest('FETCH_SHELF', fetchShelf);
}

export default shelfSaga;