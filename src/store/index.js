import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers';
import cardSaga from "../sagas/CardsSaga";
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(cardSaga)
export default store;