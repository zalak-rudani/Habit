import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import {useDispatch} from 'react-redux';

import strings from '../helper/constants/strings';
import {addInfo} from '../redux/slice/studentDataSlice';
import commonStyle from '../helper/constants/commonStyle';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const saveData = () => {
    const data = {
      email,
      name,
    };
    dispatch(addInfo(data));
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
        onPress={() => {
          if (name && email) {
            saveData();
            navigation.navigate('SignUp');
          }
        }}
      />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
