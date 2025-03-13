import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import strings from '../helper/constants/strings';
import commonStyle from '../helper/constants/commonStyle';
import {wp} from '../helper/globalFunc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {addData} from '../redux/slice/studentDataSlice';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const saveData = () => {
    const data = {
      email,
      name,
    };
    dispatch(addData(data));
  };
  return (
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
        onPress={async () => {
          // console.log('dispatch-=-=-=-=', dispatch(addData(email, name)));

          const data = {
            email: email,
            name: name,
          };
          if (name && email) {
            saveData();
            await AsyncStorage.setItem('userData', JSON.stringify(data));
            navigation.navigate('HomePage');
          }
        }}
      />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
