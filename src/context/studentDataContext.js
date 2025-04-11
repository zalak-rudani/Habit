import {createContext, useReducer} from 'react';
import {
  ADD_STUDENT_DATA,
  ADD_USER_DETAILS,
  ADD_USER_INFO,
  DELETE_STUDENT_DATA,
  LOGOUT,
  UPDATE_STUDENT_DATA,
} from './types';

const StudentContext = createContext();

const initialState = {
  userInfo: {},
  userDetails: {},
  studentData: [],
};

const studentReducer = (state = initialState, action) => {
  console.log('IDDD outside:::::', action);
  switch (action.type) {
    case ADD_USER_INFO:
      return {
        ...state,
        userInfo: action?.payload,
      };

    case ADD_USER_DETAILS:
      return {
        ...state,
        userDetails: action?.payload,
      };

    case ADD_STUDENT_DATA:
      return {
        ...state,
        studentData: [...state.studentData, action.payload],
      };

    case DELETE_STUDENT_DATA:
      return {
        ...state,
        studentData: state.studentData?.filter(
          item => item?.id !== action?.payload,
        ),
      };

    case UPDATE_STUDENT_DATA:
      return {
        ...state,
        studentData: state.studentData.map(item =>
          item.id === action.payload.id ? action.payload : item,
        ),
      };
    case LOGOUT:
      return {
        userInfo: {},
        userDetails: {},
        studentData: [],
      };

    default:
      return state;
  }
};

export const StudentDataProvider = ({children}) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  const addUserInfo = item => {
    dispatch({type: ADD_USER_INFO, payload: item});
  };

  const addUserDetail = item => {
    dispatch({type: ADD_USER_DETAILS, payload: item});
  };

  const addStudentData = item => {
    dispatch({type: ADD_STUDENT_DATA, payload: item});
  };

  const deleteStudentData = item => {
    console.log('item id---------', item);

    dispatch({type: DELETE_STUDENT_DATA, payload: item});
  };

  const editStudentData = item => {
    dispatch({type: UPDATE_STUDENT_DATA, payload: item});
  };
  const logOut = () => {
    dispatch({type: LOGOUT});
  };

  return (
    <StudentContext.Provider
      value={{
        userInfo: state.userInfo,
        userDetails: state.userDetails,
        studentData: state.studentData,
        logOut,
        addUserInfo,
        addUserDetail,
        addStudentData,
        deleteStudentData,
        editStudentData,
      }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;
