import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [
      'Captain America',
      'Harry Potter'
    ],
  },
  reducers: {
    addMovies: ( state, { payload } ) =>
    {
      state.list  = [payload, ...state.list];
    },
  },
});

// actions 
export const { addMovies } = moviesSlice.actions;

// getter
export const selectMovies = state => state.movies.list;

//export reducer
export default moviesSlice.reducer;