import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Entry } from "@/types";

interface Data {
  [code: string]: Entry[];
}

interface CryptoEntries {
  data: Data;
}

const initialState: CryptoEntries = {
  data: {},
};

export const cryptoSlice = createSlice({
  name: "cryto",
  initialState,
  reducers: {
    addEntries: (state, action: PayloadAction<Data>) => {
      const payload: Data = action.payload;
      return {
        data: {
          ...state.data,
          ...payload,
        },
      };
    },
  },
});

export const { addEntries } = cryptoSlice.actions;
export default cryptoSlice.reducer;
