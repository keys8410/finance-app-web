import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChangePasswordPayload } from '../types';

const slice = createSlice({
  name: 'account/change-pass',
  initialState: {
    isRequesting: false,
    successPayload: undefined,
    errors: [],
  },
  reducers: {
    request: (state, action: PayloadAction<ChangePasswordPayload>) => {
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

export const ChangePassActions = slice.actions;
export default slice.reducer;
