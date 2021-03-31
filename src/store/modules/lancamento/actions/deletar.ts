import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeletarLancamentoPayload } from '../types';

type State = {
  isRequesting: boolean;
  successPayload?: any;
  errors: any[];
};

const slice = createSlice({
  name: 'lancamento/deletar',
  initialState: {
    isRequesting: false,
    successPayload: undefined,
    errors: [],
  } as State,
  reducers: {
    request: (state, action: PayloadAction<DeletarLancamentoPayload>) => {
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

export const DeletarLancamentoActions = slice.actions;
export default slice.reducer;
