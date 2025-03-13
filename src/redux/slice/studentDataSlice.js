import {createSlice} from '@reduxjs/toolkit';

const studentDataSlice = createSlice({
  name: 'studentDataSlice',
  initialState: {
    studentData: [],
  },
  reducers: {
    addData(state, action) {
      console.log('state-=-=-=', state);
      console.log('action-=-=-=', action.payload);

      state.studentData = [...state.studentData ,action.payload];
    },
  },
});

export default studentDataSlice.reducer;
export const {addData} = studentDataSlice.actions;
