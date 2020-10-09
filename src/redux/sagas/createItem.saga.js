import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* createItem(action) {
    yield axios({
        method: 'POST',
        url: '/api/shelf',
        data: action.payload
    });

    yield put({
        type: 'FETCH_SHELF'
    });
}

function* fetchItem(action) {
    let response = yield axios({
        method: 'GET',
        url: `/api/shelf/${action.payload}`,
        data: action.payload
    });

    yield put({
        type: 'SET_INDIVIDUAL_ITEM',
        payload: response.data
    });
}

function* changeItem(action) {
    yield axios({
        method: 'PUT',
        url: `/api/shelf/${action.payload}`,
        data: action.payload
    });

    yield put({
        type: 'FETCH_SHELF'
    });
}

function* createItemSaga() {
    yield takeLatest('CREATE_ITEM', createItem)
    yield takeLatest('FETCH_INDIVIDUAL_ITEM', fetchItem);
    yield takeLatest('CHANGE_ITEM', changeItem);
}

export default createItemSaga;