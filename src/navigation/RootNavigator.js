import React, {createRef, useEffect, useState} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomePage from '../screen/HomePage';
import LoginPage from '../screen/LoginPage';
import StudentsCards from '../screen/StudentsCards';
import StudentDetails from '../screen/StudentDetails';
import StandardDetails from '../screen/StandardDetails';
import DivisionDetails from '../screen/DivisionDetails';
import StudentRegistration from '../screen/StudentRegistration';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, View} from 'react-native';
import LandingScreen from '../screen/LandingScreen';
import {useSelector} from 'react-redux';
import DropdownComponent from '../screen/DropdownComponent';
import SignUp from '../screen/SignUp';

const Stack = createStackNavigator();

const navigationRef = createRef();

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const userData = useSelector(state => state?.studentDataSlice?.studentInfo);
  console.log('userData*****************-=-=-=-', userData);

  const getData = () => {
    if (userData) {
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
        <Stack.Screen name={'SignUp'} component={SignUp} />

        <Stack.Screen
          options={{animation: 'fade'}}
          name={'LoginPage'}
          component={LoginPage}
        />
        <Stack.Screen
          options={{animation: 'fade'}}
          name={'HomePage'}
          component={HomePage}
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

{
  /* <Stack.Screen
  name={'DropdownComponent'}
  component={DropdownComponent}
/> */
}
