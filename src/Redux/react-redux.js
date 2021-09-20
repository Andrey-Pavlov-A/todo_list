import {combineReducers, createStore, applyMiddleware} from 'redux';
import appTodoReducer from './to-do-redux';
import thunkMiddleware from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let reducers = combineReducers({
	todoPage: appTodoReducer
})

const persistConfig = {
	key: 'root',
	storage,
}

let store = createStore(persistReducer(persistConfig, reducers), applyMiddleware(thunkMiddleware));

export const persistor = persistStore(store)

window.store = store;
export default store;