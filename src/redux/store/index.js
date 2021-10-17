import thunk from 'redux-thunk';
import rootReducer from '../Reducers/rootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const persistConfig = {
    key: "rn-task-storage-root",
    storage: AsyncStorage,
    debug: __DEV__
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store)