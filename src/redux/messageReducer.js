import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGreetings = createAsyncThunk(
  'greeting/getGreetings',
  async () => {
    const response = await fetch('http://127.0.0.1:4000/api/v1/messages');
    const data = await response.json();
    return data;
  },
);

const greetingReducer = createSlice({
  name: 'greeting',
  initialState: [],
  reducers: {
    Greeting(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [getGreetings.fulfilled]: (state, action) => action.payload,
  },
});

export const { Greeting } = greetingReducer.actions;
export default greetingReducer.reducer;
