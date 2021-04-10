import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditarCorCategoriaPayload } from '../types';

type State = {
  isRequesting: boolean;
  successPayload?: any;
  errors: any[];
};

const slice = createSlice({
  name: 'corCategoria/editar',
  initialState: {
    isRequesting: false,
    successPayload: undefined,
    errors: [],
  } as State,
  reducers: {
    request: (state, action: PayloadAction<EditarCorCategoriaPayload>) => {
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

export const EditarCorCategoriaActions = slice.actions;
export default slice.reducer;
