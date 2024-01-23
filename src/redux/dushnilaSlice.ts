import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  co2: null,
  temp: null,
  status: false,
};

const duchnilaSlice = createSlice({
  name: 'duchnila',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.co2 = action.payload.co2;
      state.temp = action.payload.temp;
    },
    setExceedStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setData, setExceedStatus } = duchnilaSlice.actions;

export default duchnilaSlice.reducer;
