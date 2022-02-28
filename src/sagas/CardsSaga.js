import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchCardsApi } from './Api';
import { ADD_CARD,FETCH_CARD, LOADING } from '../actions/actionTypes';
import { setLoading ,addCards } from '../actions';
import { Alert } from 'react-native';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchCards(action) {
    console.log("cards fetch saga");
    yield put(setLoading(true));
   try {
      const resp = yield call(fetchCardsApi);
      console.log("data:",resp.data);
      yield put(addCards(resp.data));
   } catch (e) {
       console.log(e);
     Alert.alert("Failed to fetch cards");
   }finally{
    yield put(setLoading(false));

   }
}


function* cardSaga() {
  yield takeLatest(FETCH_CARD, fetchCards);
}

export default cardSaga;