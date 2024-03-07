import { setupListeners } from '@reduxjs/toolkit/query'
import { configureStore } from '@reduxjs/toolkit'
import { artApi } from './services/art'

export const store = configureStore({
  reducer: {
    [artApi.reducerPath]: artApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artApi.middleware),
})
setupListeners(store.dispatch)
