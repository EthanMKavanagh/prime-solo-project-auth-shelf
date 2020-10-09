import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItemSaga(action) {
   console.log('deleteSaga hit with action.payload:', action.payload);
   yield axios({
      method: "DELETE",
      url: `/api/shelf/${action.payload}`,
   });
   yield put({
      type: 'FETCH_SHELF',
   })
}

function* deleteSaga() {
   yield takeLatest('DELETE_ITEM', deleteItemSaga);
}

export default deleteSaga;