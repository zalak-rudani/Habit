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
import ModalComp from '../components/ModalComp';
import ButtonComp from '../components/ButtonComp';
import HeaderComp from '../components/HeaderComp';

const StudentRegistration = ({navigation}) => {
  const [name, setName] = useState('');
  const [nameEr, setNameEr] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherNameEr, setFatherNameEr] = useState('');
  const [motherNameEr, setMotherNameEr] = useState('');
  const [motherName, setMotherName] = useState('');
  const [age, setAge] = useState('');
  const [ageEr, setAgeEr] = useState('');
  const [std, setStd] = useState('');
  const [stdEr, setStdEr] = useState('');
  const [stdModalVisible, setStdModalVisible] = useState(false);
  const [divModalVisible, setDivModalVisible] = useState(false);
  const [gender, setGender] = useState('');
  const [genderEr, setGenderEr] = useState('');
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [rollNo, setRollNo] = useState('');
  const [rollNoEr, setRollNoEr] = useState('');
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

  const division = [
    {
      title: 'A',
      onPress: () => {
        setDiv('A');
        setDivModalVisible(false);
      },
    },
    {
      title: 'B',
      onPress: () => {
        setDiv('B');
        setDivModalVisible(false);
      },
    },
    {
      title: 'C',
      onPress: () => {
        setDiv('C');
        setDivModalVisible(false);
      },
    },
  ];

  const fatherNameRef = useRef();
  const motherNameRef = useRef();
  const ageRef = useRef();
  const stdRef = useRef();
  const emailRef = useRef();
  const divRef = useRef();
  const phoneNoRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();
  const genderRef = useRef();
  const rollNoRef = useRef();

  const dispatch = useDispatch();

  const getData = () => {
    const newData = {
      id: uuid.v4(),
      name,
      gender,
      rollNo,
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
      <HeaderComp
        text={strings.studentRegistration.studentRegistration}
        onPress={() => navigation.goBack()}
      />

      <KeyboardAwareScrollView contentContainerStyle={{paddingBottom: 100}}>
        <ScrollView style={{marginHorizontal: wp(15)}}>
          <TextInputComp
            text={'Name'}
            value={name}
            onChangeText={text => setName(text)}
            error={nameEr}
            onSubmitEditing={() => {
              // stringValidation(name, setNameEr, 'Name');
              fatherNameRef.current?.focus();
            }}
            // onBlur={() => stringValidation(name, setNameEr, 'Name')}
            autoFocus={true}
            returnKeyType={'next'}
          />
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
            ref={fatherNameRef}
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
            maxLength={10}
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
              genderRef.current?.focus();
            }}
            // onBlur={() =>    stringValidation(email, setEmailEr, 'Email')}
            ref={emailRef}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Gender'}
            value={gender}
            onChangeText={text => setGender(text)}
            error={genderEr}
            onSubmitEditing={() => {
              // stringValidation(gender, setGenderEr, 'Gender');
              rollNoRef.current?.focus();
            }}
            // onBlur={() =>  stringValidation(gender, setGenderEr, 'Gender')}
            ref={genderRef}
            returnKeyType={'next'}
          />

          <TextInputComp
            text={'Roll no.'}
            value={rollNo}
            maxLength={5}
            onChangeText={text => setRollNo(text)}
            error={rollNoEr}
            onSubmitEditing={() => {
              // stringValidation(rollNo, setRollNoEr, 'Roll no.');
              stdRef.current?.focus();
            }}
            // onBlur={() =>   stringValidation(rollNo, setRollNoEr, 'Roll no.')}
            ref={rollNoRef}
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
            onPress={() => setDivModalVisible(true)}
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
            maxLength={2}
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
        <ButtonComp
          onPress={() => {
            getData(), navigation.navigate('StandardDetails');
          }}
          text={strings.button.register}
        />
      </View>

      <ModalComp
        data={division}
        visible={divModalVisible}
        onPress={() => setDivModalVisible(false)}
      />
    </View>
  );
};

export default StudentRegistration;

const styles = StyleSheet.create({});
