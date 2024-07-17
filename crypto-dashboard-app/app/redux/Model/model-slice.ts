import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false
};

export const modalSlice = createSlice({
  name: "cryto",
  initialState,
  reducers: {
    updateModalState: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
      return state;
    },
  },
});

export const { updateModalState } = modalSlice.actions;
export default modalSlice.reducer;
