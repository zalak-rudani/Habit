import {createSlice} from '@reduxjs/toolkit';

const studentDataSlice = createSlice({
  name: 'studentDataSlice',
  initialState: {
    userInfo: {},
    userDetails: {},
    studentData: [],
  },
  reducers: {
    addInfo(state, action) {
      console.log('state-=-=-=', state);
      console.log('action-=-=-=', action?.payload);
      state.userInfo = action?.payload;
      console.log('state.userInfo-=-=-=', state.userInfo);
    },
    addDetails(state, action) {
      state.userDetails = action?.payload;
      console.log('state.userDetails-=-=-=', state.userDetails);
    },
    addData(state, action) {
      console.log('state-=-=-=', state);
      console.log('action-=-=-=', action.payload);
      state.studentData = [...state.studentData, action.payload];
    },
    logOut(state) {
      state.userInfo = {};
      state.studentData = [];
      state.userDetails = {};
    },
    removeData(state, action) {
      let updateData = state?.studentData?.filter(item => {
        return item?.id !== action?.payload;
      });

      state.studentData = updateData;
    },
  },
});
export default studentDataSlice.reducer;
export const {addInfo, addData, addDetails, removeData, logOut} =
  studentDataSlice.actions;
