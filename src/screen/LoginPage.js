// *** // using the concept of redux toolkit

import React, {createContext, useReducer, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import {useDispatch} from 'react-redux';

import strings from '../helper/constants/strings';
import {addInfo} from '../redux/slice/studentDataSlice';
import commonStyle from '../helper/constants/commonStyle';

// *** // using the concept of 'useReducer' Hook
// export const UserNameContext = createContext();
// const initialState = {};

// const userInfoReducer = (state, action) => {
//   switch (action.type) {
//     case 'setUserInfo':
//       return action?.payload;

//     default:
//       return state;
//   }
// };

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // **** // const [state, dispatch] = useReducer(reducer, createInitialState(username));
  // const [userInfo, dispatchMethod] = useReducer(userInfoReducer, initialState);

  // *** // using the concept of redux toolkit
  const dispatch = useDispatch();
  const saveData = () => {
    const data = {
      email,
      name,
    };
    dispatch(addInfo(data));
  };

  // *** // using the concept of 'useReducer' Hook
  // const saveData = () => {
  //   const data = {
  //     email,
  //     name,
  //   };
  //   {
  //     console.log('datataaaa-=-=-=', data);
  //   }
  //   dispatchMethod({type: 'setUserInfo', payload: data});
  // };

  // console.log('userInfoaaaa-=-=-=', userInfo);

  return (
    // <UserNameContext.Provider
    //   value={{userInfoState: userInfo, userInfoDispatch: dispatchMethod}}>
    <View style={[commonStyle.flex1, commonStyle.centerView]}>
      <Text style={commonStyle.headText}>{strings.loginPage.login}</Text>
      <Text style={commonStyle.subHeadText}>{strings.loginPage.name}</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={commonStyle.subHeadText}>{strings.loginPage.email}</Text>
      <TextInput
        placeholder="Enter your email address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Button
        title={strings.loginPage.login}
        onPress={() => {
          if (name && email) {
            saveData();
            navigation.navigate('SignUp');
          }
        }}
      />
    </View>
    // </UserNameContext.Provider>
  );
};

export default LoginPage;
// export {UserNameContext};

const styles = StyleSheet.create({});

// ****** // using the concept of useReducer & useContext hooks

// import React, {createContext, useContext, useReducer, useState} from 'react';
// import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

// import strings from '../helper/constants/strings';

// import commonStyle from '../helper/constants/commonStyle';
// import StudentContext from '../context/studentDataContext';

// const LoginPage = ({navigation}) => {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');

//   const {addUserInfo} = useContext(StudentContext);

//   const saveData = () => {
//     const data = {
//       email,
//       name,
//     };
//     addUserInfo(data);
//   };

//   return (
//     // <UserNameContext.Provider
//     //   value={{userInfoState: userInfo, userInfoDispatch: dispatchMethod}}>
//     <View style={[commonStyle.flex1, commonStyle.centerView]}>
//       <Text style={commonStyle.headText}>{strings.loginPage.login}</Text>
//       <Text style={commonStyle.subHeadText}>{strings.loginPage.name}</Text>
//       <TextInput
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={text => setName(text)}
//       />
//       <Text style={commonStyle.subHeadText}>{strings.loginPage.email}</Text>
//       <TextInput
//         placeholder="Enter your email address"
//         value={email}
//         onChangeText={text => setEmail(text)}
//       />
//       <Button
//         title={strings.loginPage.login}
//         onPress={() => {
//           if (name && email) {
//             saveData();
//             navigation.navigate('SignUp');
//           }
//         }}
//       />
//     </View>
//     // </UserNameContext.Provider>
//   );
// };

// export default LoginPage;
// // export {UserNameContext};

// const styles = StyleSheet.create({});
