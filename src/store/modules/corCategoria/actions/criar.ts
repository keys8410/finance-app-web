import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CriarCorCategoriaPayload } from '../types';

type State = {
  isRequesting: boolean;
  successPayload?: any;
  errors: any[];
};

const slice = createSlice({
  name: 'corCategoria/criar',
  initialState: {
    isRequesting: false,
    successPayload: undefined,
    errors: [],
  } as State,
  reducers: {
    request: (state, action: PayloadAction<CriarCorCategoriaPayload>) => {
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

export const CriarCorCategoriaActions = slice.actions;
export default slice.reducer;
