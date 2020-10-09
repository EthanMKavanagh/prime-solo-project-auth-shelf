import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* createItem(action) {
    yield axios({
        method: 'POST',
        url: '/api/shelf',
        data: action.payload
    });

    // yield put({
    //     type: 'FETCH_ITEM'
    // });
}

function* createItemSaga() {
    yield takeLatest('CREATE_ITEM', createItem)
}

export default createItemSaga;