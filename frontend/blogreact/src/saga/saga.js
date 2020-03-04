import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import * as postTypes from '../constants/ActionTypes';
import * as actionPost from '../actions/posts';

function* getThumbSaga(action) {
  const { subject } = action.payload;
  const { data, status } = yield axios.get(
    `http://localhost:4400/api/v1/thumb-posts?subject=${subject}`
  );
  if (status === 200) {
    yield put(actionPost.getThumbSuccess(data));
  }
}

function* getPostSaga(action) {
  const { linkPost } = action.payload;
  const { data, status } = yield axios.get(
    `http://localhost:4400/api/v1/posts?linkPost=${linkPost}`
  );
  if (status === 200) {
    yield put(actionPost.getPostSuccess(data));
  } else {
    yield put(actionPost.getPostFailed('error'));
  }
}

function* rootSaga() {
  yield takeLatest(postTypes.GET_THUMB, getThumbSaga);
  yield takeLatest(postTypes.GET_POST, getPostSaga);
}

export default rootSaga;
