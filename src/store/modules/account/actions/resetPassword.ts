import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResetPasswordPayload } from '../types';

const slice = createSlice({
  name: 'account/reset-pass',
  initialState: {
    isRequesting: false,
    successPayload: undefined,
    errors: [],
  },
  reducers: {
    request: (state, action: PayloadAction<ResetPasswordPayload>) => {
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

export const ResetPassActions = slice.actions;
export default slice.reducer;
