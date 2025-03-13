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

const Stack = createStackNavigator();

const navigationRef = createRef();

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userData = JSON.parse(await AsyncStorage.getItem('userData'));
    console.log('userdata-=-=-=-*******=', userData);
    if (userData.email && userData.name) {
      return true;
      setIsLoading(false);
    } else {
      return false;
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={'blue'} size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {getData() ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
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
          <Stack.Screen
            options={{animation: 'fade'}}
            name={'LoginPage'}
            component={LoginPage}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
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
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
