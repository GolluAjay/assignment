import { configureStore } from '@reduxjs/toolkit';
import crytoReducer from './Crypto/cryto-slice';
import modalReducer from './Model/model-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer : {
        cryto: crytoReducer,
        modal: modalReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;