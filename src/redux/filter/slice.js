const { createSlice } = require('@reduxjs/toolkit');

const initialState = '';
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    change(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
