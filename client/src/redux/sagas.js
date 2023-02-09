/* eslint-disable */
/* @ts-nocheck */
import axios from 'axios';
import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { setSearchPosts } from './postsSlice/postsSlice';
// import Api from '...'

const axiosCall = (input) => axios.post('/posts/search', { input });

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPosts(action) {
  try {
    // console.log('Saga worker started');
    yield delay(1000);
    const res = yield call(axiosCall, action.payload);
    // console.log('Saga worker started');
    yield put(setSearchPosts(res.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySagaWatcher() {
  yield takeLatest('LOAD_SEARCH_POSTS', fetchPosts);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
// }

export default mySagaWatcher;
