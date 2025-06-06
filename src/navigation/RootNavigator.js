// ****** // using useReducer & useContext hooks

// import React, {createRef, useContext, useEffect, useState} from 'react';
// import {ActivityIndicator, View} from 'react-native';

// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';

// import {useSelector} from 'react-redux';
// import HomePage from '../screen/HomePage';
// import LoginPage from '../screen/LoginPage';
// import StudentsCards from '../screen/StudentsCards';
// import StudentDetails from '../screen/StudentDetails';
// import StandardDetails from '../screen/StandardDetails';
// import DivisionDetails from '../screen/DivisionDetails';
// import StudentRegistration from '../screen/StudentRegistration';

// import SignUp from '../screen/SignUp';
// import UserDetails from '../screen/UserDetails';
// import StudentContext from '../context/studentDataContext';

// const Stack = createStackNavigator();

// const navigationRef = createRef();

// const RootNavigator = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const {userInfo} = useContext(StudentContext);

//   const getData = () => {
//     if (userInfo?.name && userInfo?.email) {
//       setIsLoading(false);
//       setIsLoggedIn(true);
//       return true;
//     } else {
//       setIsLoading(false);
//       return false;
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   if (isLoading) {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <ActivityIndicator color={'blue'} size={'large'} />
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer ref={navigationRef}>
//       <Stack.Navigator
//         screenOptions={{headerShown: false}}
//         // initialRouteName={isLoggedIn ? 'HomePage' : 'LoginPage'}
//       >
//         <Stack.Screen
//           options={{animation: 'fade'}}
//           name={'HomePage'}
//           component={HomePage}
//         />
//         <Stack.Screen
//           options={{animation: 'fade'}}
//           name={'LoginPage'}
//           component={LoginPage}
//         />
//         <Stack.Screen name={'SignUp'} component={SignUp} />

//         <Stack.Screen name={'UserDetails'} component={UserDetails} />
//         <Stack.Screen name={'DivisionDetails'} component={DivisionDetails} />
//         <Stack.Screen name={'StandardDetails'} component={StandardDetails} />
//         <Stack.Screen name={'StudentDetails'} component={StudentDetails} />
//         <Stack.Screen name={'StudentsCards'} component={StudentsCards} />
//         <Stack.Screen
//           name={'StudentRegistration'}
//           component={StudentRegistration}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default RootNavigator;

import React, {createRef, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {useSelector} from 'react-redux';
import HomePage from '../screen/HomePage';
import LoginPage from '../screen/LoginPage';
import StudentsCards from '../screen/StudentsCards';
import StudentDetails from '../screen/StudentDetails';
import StandardDetails from '../screen/StandardDetails';
import DivisionDetails from '../screen/DivisionDetails';
import StudentRegistration from '../screen/StudentRegistration';

import SignUp from '../screen/SignUp';
import UserDetails from '../screen/UserDetails';
import ApiCall from '../screen/ApiCall';
import ProductsDetailsFromApiCall from '../screen/ProductsDetailsFromApiCall';

const Stack = createStackNavigator();

const navigationRef = createRef();

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const userData = useSelector(state => state?.studentDataSlice?.userInfo);
  console.log(
    'userData*****************-=-=-=-',
    userData?.name,
    userData?.email,
  );

  const getData = () => {
    if (userData?.name && userData?.email) {
      setIsLoading(false);
      setIsLoggedIn(true);
      return true;
    } else {
      setIsLoading(false);
      return false;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={'blue'} size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        // initialRouteName={isLoggedIn ? 'HomePage' : 'LoginPage'}
      >
        <Stack.Screen
          options={{animation: 'fade'}}
          name={'HomePage'}
          component={HomePage}
        />
        <Stack.Screen name={'ApiCall'} component={ApiCall} />
        <Stack.Screen
          options={{animation: 'fade'}}
          name={'LoginPage'}
          component={LoginPage}
        />
        <Stack.Screen name={'SignUp'} component={SignUp} />

        <Stack.Screen name={'UserDetails'} component={UserDetails} />
        <Stack.Screen
          name={'ProductsDetailsFromApiCall'}
          component={ProductsDetailsFromApiCall}
        />
        <Stack.Screen name={'DivisionDetails'} component={DivisionDetails} />
        <Stack.Screen name={'StandardDetails'} component={StandardDetails} />
        <Stack.Screen name={'StudentDetails'} component={StudentDetails} />

        <Stack.Screen name={'StudentsCards'} component={StudentsCards} />
        <Stack.Screen
          name={'StudentRegistration'}
          component={StudentRegistration}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

//--------------------------------------------------------------//

// <NavigationContainer ref={navigationRef}>
// {getData() ? (
//   <Stack.Navigator screenOptions={{headerShown: false}}>
//     <Stack.Screen
//       options={{animation: 'fade'}}
//       name={'HomePage'}
//       component={HomePage}
//     />
//     <Stack.Screen name={'DivisionDetails'} component={DivisionDetails} />
//     <Stack.Screen name={'StandardDetails'} component={StandardDetails} />
//     <Stack.Screen name={'StudentDetails'} component={StudentDetails} />
//     <Stack.Screen name={'StudentsCards'} component={StudentsCards} />
//     <Stack.Screen
//       name={'StudentRegistration'}
//       component={StudentRegistration}
//     />
//   </Stack.Navigator>
// ) : (
//   <Stack.Navigator screenOptions={{headerShown: false}}>
//     <Stack.Screen
//       options={{animation: 'fade'}}
//       name={'LoginPage'}
//       component={LoginPage}
//     />
//   </Stack.Navigator>
// )}
// </NavigationContainer>
