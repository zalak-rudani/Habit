import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LandingScreen = ({navigation}) => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const userData = JSON.parse(await AsyncStorage.getItem('userData'));
    console.log('userdata-=-=-=-=', userData);
    if (userData) {
      navigation.replace('HomePage');
    } else {
      navigation.replace('LoginPage');
    }
  };
  // return <Vie></Vie>;
};

export default LandingScreen;
