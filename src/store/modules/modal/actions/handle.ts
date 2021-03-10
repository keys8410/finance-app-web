import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HandleContent } from '../types';

type state = {
  opened: boolean;
  enabledToClose?: boolean;
  content?: React.ReactNode;
  title: string;
};

const slice = createSlice({
  name: 'modal/handle',
  initialState: {
    opened: false,
    enabledToClose: true,
    content: null,
    title: '',
  } as state,
  reducers: {
    setContent: (state, action: PayloadAction<HandleContent>) => {
      state.content = action.payload.content;
      state.enabledToClose = action.payload.enabledToClose;
      state.opened = action.payload.opened;
      state.title = action.payload.title;
    },
    close: (state) => {
      state.opened = false;
    },
  },
});

export const ModalActions = slice.actions;
export default slice.reducer;
