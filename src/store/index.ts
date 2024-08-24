import { configureStore } from "@reduxjs/toolkit"
import { productSliceReducer } from "../redux/product"

const store = configureStore({
    reducer: {
        product: productSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
        ),
})
export default store
export type AppDispatch = typeof store.dispatch

