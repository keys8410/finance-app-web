import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TituloReducer } from '../types';

const slice = createSlice({
  name: 'titulo/handle',
  initialState: {
    titulo: 'Home',
  },
  reducers: {
    changeTitle: (state, action: PayloadAction<TituloReducer>) => {
      state.titulo = action.payload.titulo;
    },
  },
});

export const TituloActions = slice.actions;
export default slice.reducer;
