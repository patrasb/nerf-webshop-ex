import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import reducer from "./reducer";

export default function() {

    const persistConfig = {
        key: 'root',
        storage
    }

    const persistedReducer = persistReducer(persistConfig, reducer);

    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST']
            }
        })
    });
}