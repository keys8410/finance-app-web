import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditarUsuarioPayload } from '../types';

const slice = createSlice({
  name: 'usuario/editar',
  initialState: {
    isRequesting: false,
    successPayload: undefined,
    errors: [],
  },
  reducers: {
    request: (state, action: PayloadAction<EditarUsuarioPayload>) => {
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

export const EditarUsuarioActions = slice.actions;
export default slice.reducer;
