import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CriarLancamentoPayload } from '../types';

type State = {
  isRequesting: boolean;
  successPayload?: any;
  errors: any[];
};

const slice = createSlice({
  name: 'lancamento/criar',
  initialState: {
    isRequesting: false,
    successPayload: undefined,
    errors: [],
  } as State,
  reducers: {
    request: (state, action: PayloadAction<CriarLancamentoPayload>) => {
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

export const CriarLancamentoActions = slice.actions;
export default slice.reducer;
