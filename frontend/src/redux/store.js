import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/userSlice.js'
import messageReducer from './slice/messageSlice.js'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer=combineReducers({
  user:userReducer,
  message:messageReducer
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['message']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false
  }),
})

export const persistor=persistStore(store)