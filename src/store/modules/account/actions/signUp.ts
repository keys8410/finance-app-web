import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignUpPayload } from '../types';

const slice = createSlice({
  name: 'account/signUp',
  initialState: {
    isRequesting: false,
    successPayload: undefined,
    errors: [],
  },
  reducers: {
    request: (state, action: PayloadAction<SignUpPayload>) => {
      state.isRequesting = true;
    },
    success: (state, action) => {
      state.isRequesting = false;
      state.successPayload = action.payload;
      state.errors = [];
    },
    failed: (state, action) => {
      state.isRequesting = false;
      state.successPayload = undefined;
      state.errors = action.payload;
    },
  },
});

export const SignUpActions = slice.actions;
export default slice.reducer;
