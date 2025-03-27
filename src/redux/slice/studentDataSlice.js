import {createSlice} from '@reduxjs/toolkit';

const studentDataSlice = createSlice({
  name: 'studentDataSlice',
  initialState: {
    studentInfo: {},
    studentData: [],
    value: 0,
  },
  reducers: {
    addInfo(state, action) {
      console.log('state-=-=-=', state);
      console.log('action-=-=-=', action?.payload);
      state.studentInfo = action?.payload;
      console.log('state.studentInfo-=-=-=', state.studentInfo);
    },
    addData(state, action) {
      console.log('state-=-=-=', state);
      console.log('action-=-=-=', action.payload);
      state.studentData = [...state.studentData, action.payload];
    },
    removeData(state, action) {
      let updateData = state?.studentData?.filter(item => {
        return item?.id !== action?.payload;
      });

      state.studentData = updateData;
    },
    increment(state) {
      state.value += 1;
    },
  },
});

export default studentDataSlice.reducer;
export const {addInfo, addData, increment, removeData} =
  studentDataSlice.actions;
