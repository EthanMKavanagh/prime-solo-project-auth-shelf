import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItemSaga(action) {
   console.log('deleteSaga hit');
   yield axios({
      method: "DELETE",
      url: `/api/shelf/${action.payload}`,
   });
}

function* deleteSaga() {
   yield takeLatest('DELETE_ITEM', deleteItemSaga);
}

export default deleteSaga;