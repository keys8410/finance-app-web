import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditarLancamentoPayload } from '../types';

type State = {
  isRequesting: boolean;
  successPayload?: any;
  errors: any[];
};

const slice = createSlice({
  name: 'lancamento/editar',
  initialState: {
    isRequesting: false,
    successPayload: undefined,
    errors: [],
  } as State,
  reducers: {
    request: (state, action: PayloadAction<EditarLancamentoPayload>) => {
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

export const EditarLancamentoActions = slice.actions;
export default slice.reducer;
