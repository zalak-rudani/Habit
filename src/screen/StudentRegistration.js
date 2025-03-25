import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import commonStyle from '../helper/constants/commonStyle';
import TextInputComp from '../components/TextInputComp';
import {hp, wp} from '../helper/globalFunc';
import icons from '../helper/constants/icons';
import strings from '../helper/constants/strings';
import colors from '../helper/constants/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import uuid from 'react-native-uuid';
import {useDispatch} from 'react-redux';
import {addData} from '../redux/slice/studentDataSlice';

const StudentRegistration = ({navigation}) => {
  const [fatherName, setFatherName] = useState('');
  const [fatherNameEr, setFatherNameEr] = useState('');
  const [motherNameEr, setMotherNameEr] = useState('');
  const [motherName, setMotherName] = useState('');
  const [age, setAge] = useState('');
  const [ageEr, setAgeEr] = useState('');
  const [std, setStd] = useState('');
  const [stdEr, setStdEr] = useState('');
  const [div, setDiv] = useState('');
  const [divEr, setDivEr] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [phoneNoEr, setPhoneNoEr] = useState('');
  const [height, setHeight] = useState('');
  const [heightEr, setHeightEr] = useState('');
  const [weight, setWeight] = useState('');
  const [weightEr, setWeightEr] = useState('');
  const [email, setEmail] = useState('');
  const [emailEr, setEmailEr] = useState('');

  const motherNameRef = useRef();
  const ageRef = useRef();
  const stdRef = useRef();
  const emailRef = useRef();
  const divRef = useRef();
  const phoneNoRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();

  const dispatch = useDispatch();

  const getData = () => {
    const newData = {
      id: uuid.v4(),
      fatherName,
      motherName,
      age,
      std,
      div,
      phoneNo,
      height,
      weight,
      email,
    };
    dispatch(addData(newData));
  };

  const mobileNoValidation = () => {
    let reg = /^\d{10}$/;

    if (mobileNo === '') {
      setMobileNoEr('Mobile No must be entered');
    } else if (reg?.test(mobileNo) === false) {
      setMobileNoEr('Invalid number! must be ten digits');
    } else if (reg?.test(mobileNo) === true) {
      setMobileNoEr('');
    }
  };

  const stringValidation = (val, errFunc, title) => {
    if (val === '') {
      errFunc(`${title} must be entered`);
    } else if (val?.length > 0) {
      errFunc('');
    }
  };

  const ageValidation = () => {
    let reg = /^\d+/;
    if (age === '') {
      setAgeEr('Age must be entered');
    } else if (reg?.test(age) === false) {
      setAgeEr(
        'Please only enter numeric characters only for your Age! (Allowed input:0-9)',
      );
    } else if (reg?.test(age) === true) {
      setAgeEr('');
    }
  };

  const enNoValidation = () => {
    let reg = /^\d+/;
    if (enrollNum === '') {
      setEnrollNumEr('enrollNum must be entered');
    } else if (reg?.test(enrollNum) === false) {
      setEnrollNumEr(
        'Please only enter numeric characters only for your enrollNum! (Allowed input:0-9)',
      );
    } else if (reg?.test(enrollNum) === true) {
      setEnrollNumEr('');
    }
  };

  const emailValidation = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email === '') {
      setEmailEr('Email address must be entered');
    } else if (reg?.test(email) === false) {
      setEmailEr('Enter valid email address');
    } else if (reg?.test(email) === true) {
      setEmailEr('');
    }
  };
  return (
    <View style={commonStyle.flex1}>
      <View
        style={{
          ...commonStyle.directionRow,
          marginVertical: hp(35),
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{...commonStyle.icon, marginHorizontal: wp(10)}}
            source={icons.left}
          />
        </TouchableOpacity>
        <Text style={{...commonStyle.headText, flex: 1, textAlign: 'center'}}>
          {strings.studentRegistration.studentRegistration}
        </Text>
      </View>
      <KeyboardAwareScrollView contentContainerStyle={{paddingBottom: 100}}>
        <ScrollView style={{marginHorizontal: wp(15)}}>
          <TextInputComp
            text={'Father Name'}
            value={fatherName}
            onChangeText={text => setFatherName(text)}
            error={fatherNameEr}
            onSubmitEditing={() => {
              // stringValidation(fatherName, setFatherNameEr, 'Father name');
              motherNameRef.current?.focus();
            }}
            // onBlur={() => stringValidation(fatherName, setFatherNameEr, 'Father name')}
            autoFocus={true}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Mother Name'}
            value={motherName}
            onChangeText={text => setMotherName(text)}
            error={motherNameEr}
            onSubmitEditing={() => {
              // stringValidation(motherName, setMotherNameEr, 'Mother name');
              phoneNoRef.current?.focus();
            }}
            // onBlur={() =>  stringValidation(motherName, setMotherNameEr, 'Mother name')}
            ref={motherNameRef}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Phone no.'}
            value={phoneNo}
            onChangeText={text => setPhoneNo(text)}
            error={phoneNoEr}
            onSubmitEditing={() => {
              // stringValidation(phoneNo, setPhoneNoEr, 'phone No.');
              emailRef.current?.focus();
            }}
            // onBlur={() =>   stringValidation(phoneNo, setPhoneNoEr, 'phone No.')}
            ref={phoneNoRef}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Email'}
            value={email}
            onChangeText={text => setEmail(text)}
            error={emailEr}
            onSubmitEditing={() => {
              // stringValidation(email, setEmailEr, 'Email');
              stdRef.current?.focus();
            }}
            // onBlur={() =>    stringValidation(email, setEmailEr, 'Email')}
            ref={emailRef}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Std'}
            value={std}
            onChangeText={text => setStd(text)}
            error={stdEr}
            onSubmitEditing={() => {
              // stringValidation(std, setStdEr, 'Std');
              divRef.current?.focus();
            }}
            // onBlur={() =>      stringValidation(std, setStdEr, 'Std')}
            ref={stdRef}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Division'}
            value={div}
            onChangeText={text => setDiv(text)}
            error={divEr}
            onSubmitEditing={() => {
              // stringValidation(div, setDivEr, 'Division');
              ageRef.current?.focus();
            }}
            // onBlur={() =>    stringValidation(div, setDivEr, 'Division')}
            ref={divRef}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Age'}
            value={age}
            onChangeText={text => setAge(text)}
            error={ageEr}
            onSubmitEditing={() => {
              // stringValidation(age, setAgeEr, 'Age');
              heightRef.current?.focus();
            }}
            // onBlur={() =>   stringValidation(age, setAgeEr, 'Age')}
            ref={ageRef}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Height'}
            value={height}
            onChangeText={text => setHeight(text)}
            error={heightEr}
            onSubmitEditing={() => {
              // stringValidation(height, setHeightEr, 'Height');
              weightRef.current?.focus();
            }}
            // onBlur={() =>  stringValidation(height, setHeightEr, 'Height')}
            ref={heightRef}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Weight'}
            value={weight}
            onChangeText={text => setWeight(text)}
            error={weightEr}
            onSubmitEditing={() => {
              // stringValidation(weight, setWeightEr, 'Weight');
            }}
            // onBlur={() =>    stringValidation(weight, setWeightEr, 'Weight')}
            ref={weightRef}
            returnKeyType={'next'}
          />
        </ScrollView>
      </KeyboardAwareScrollView>

      <View
        style={{
          left: wp(120),
          position: 'absolute',
          bottom: hp(20),
        }}>
        <TouchableOpacity
          onPress={() => {
            getData(), navigation.navigate('StandardDetails');
          }}
          style={{
            backgroundColor: colors.primary.buttonColor,
            height: hp(44),
            width: wp(150),
            borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{...commonStyle.text, color: colors.white}}>
            {strings.button.register}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StudentRegistration;

const styles = StyleSheet.create({});
