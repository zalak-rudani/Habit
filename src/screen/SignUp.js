// *** // using the concept of redux toolkit

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import uuid from 'react-native-uuid';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {hp, wp} from '../helper/globalFunc';
import icons from '../helper/constants/icons';
import colors from '../helper/constants/colors';
import HeaderComp from '../components/HeaderComp';
import ButtonComp from '../components/ButtonComp';
import strings from '../helper/constants/strings';
import DropDownComp from '../components/DropDownComp';
import TextInputComp from '../components/TextInputComp';
import commonStyle from '../helper/constants/commonStyle';
import {addData, addDetails, updateData} from '../redux/slice/studentDataSlice';

const SignUp = ({navigation}) => {
  const [openGender, setOpenGender] = useState(false);
  const [gender, setGender] = useState('');
  const [genderData, setGenderData] = useState([
    {label: 'Boy', value: 'Boy'},
    {label: 'Girl', value: 'Girl'},
  ]);
  const [openStd, setOpenStd] = useState(false);
  const [std, setStd] = useState('');
  const [stdData, setStdData] = useState([
    {label: 'LKG', value: 'LKG'},
    {label: 'SKG', value: 'SKG'},
    {label: '1st', value: '1st'},
    {label: '2nd', value: '2nd'},
    {label: '3rd', value: '3rd'},
    {label: '4th', value: '4th'},
    {label: '5th', value: '5th'},
    {label: '6th', value: '6th'},
    {label: '7th', value: '7th'},
    {label: '8th', value: '8th'},
    {label: '9th', value: '9th'},
    {label: '10th', value: '10th'},
    {label: '11th', value: '11th'},
    {label: '12th', value: '12th'},
  ]);
  const [openDiv, setOpenDiv] = useState(false);
  const [div, setDiv] = useState('');
  const [divData, setDivData] = useState([
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
    {label: 'C', value: 'C'},
  ]);

  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [ageEr, setAgeEr] = useState('');
  const [stdEr, setStdEr] = useState('');
  const [divEr, setDivEr] = useState('');
  const [email, setEmail] = useState('');
  const [height, setHeight] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [weight, setWeight] = useState('');
  const [nameEr, setNameEr] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [emailEr, setEmailEr] = useState('');
  const [genderEr, setGenderEr] = useState('');
  const [heightEr, setHeightEr] = useState('');
  const [rollNoEr, setRollNoEr] = useState('');
  const [weightEr, setWeightEr] = useState('');
  const [phoneNoEr, setPhoneNoEr] = useState('');
  const [motherName, setMotherName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherNameEr, setFatherNameEr] = useState('');
  const [motherNameEr, setMotherNameEr] = useState('');

  const fatherNameRef = useRef();
  const motherNameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const phoneNoRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();
  const genderRef = useRef();
  const rollNoRef = useRef();

  const dispatch = useDispatch();

  const getDetails = () => {
    const data = {
      id: uuid.v4(),
      age,
      std,
      div,
      name,
      email,
      rollNo,
      weight,
      height,
      gender,
      phoneNo,
      fatherName,
      motherName,
    };
    dispatch(addDetails(data));
    navigation.navigate('HomePage');
  };

  const phoneNoValidation = () => {
    let reg = /^\d{10}$/;

    if (phoneNo === '') {
      setPhoneNoEr('Mobile No must be entered');
    } else if (reg?.test(phoneNo) === false) {
      setPhoneNoEr('Invalid number! must be ten digits');
    } else if (reg?.test(phoneNo) === true) {
      setPhoneNoEr('');
    }
  };

  const stringValidation = (val, errFunc, title) => {
    if (val === '') {
      errFunc(`${title} must be entered`);
    } else if (val?.length > 0) {
      errFunc('');
    }
  };

  const numValidation = (val, setEr, title) => {
    let reg = /^\d+/;
    if (val === '') {
      setEr(`${title} must be entered`);
    } else if (reg?.test(val) === false) {
      setEr(
        `Please only enter numeric characters only for your ${title}! (Allowed input:0-9)`,
      );
    } else if (reg?.test(val) === true) {
      setEr('');
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

  const emptyValueValidation = () => {
    if (
      age === '' ||
      std === '' ||
      div === '' ||
      name === '' ||
      email === '' ||
      gender === '' ||
      height === '' ||
      weight === '' ||
      rollNo === '' ||
      phoneNo === '' ||
      fatherName === '' ||
      motherName === ''
    ) {
      if (std === '') {
        setStdEr('standard must be entered');
      }
      if (div === '') {
        setDivEr('Division must be entered');
      }
      if (name === '') {
        setNameEr('Name must be entered');
      }
      if (email === '') {
        setEmailEr('email must be entered');
      }
      if (age === '') {
        setAgeEr('Age must be entered');
      }
      if (gender === '') {
        setGenderEr('gender must be entered');
      }
      if (email === '') {
        setEmailEr('email address must be entered');
      }
      if (phoneNo === '') {
        setPhoneNoEr('phone No. must be entered');
      }
      if (height === '') {
        setHeightEr('Height must be entered');
      }
      if (weight === '') {
        setWeightEr('weight must be entered');
      }
      if (motherName === '') {
        setMotherNameEr('Mother name must be entered');
      }
      if (fatherName === '') {
        setFatherNameEr('Father name must be entered');
      }
      if (rollNo === '') {
        setRollNoEr('Roll No. must be entered');
      }
    }
  };

  const onGenderOpen = useCallback(() => {
    setOpenStd(false);
    setOpenDiv(false);
  }, []);
  const onStdOpen = useCallback(() => {
    setOpenGender(false);
    setOpenDiv(false);
  }, []);
  const onDivOpen = useCallback(() => {
    setOpenStd(false);
    setOpenGender(false);
  }, []);

  return (
    <View style={commonStyle.flex1}>
      <HeaderComp text={'Sign Up'} />

      <KeyboardAwareScrollView contentContainerStyle={{paddingBottom: 50}}>
        <ScrollView style={{marginHorizontal: wp(15)}}>
          <TextInputComp
            text={'Name'}
            value={name}
            onChangeText={text => {
              setName(text), stringValidation(name, setNameEr, 'Name');
            }}
            error={nameEr}
            onSubmitEditing={() => {
              stringValidation(name, setNameEr, 'Name');
              fatherNameRef.current?.focus();
            }}
            onBlur={() => stringValidation(name, setNameEr, 'Name')}
            autoFocus={true}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Father Name'}
            value={fatherName}
            onChangeText={text => {
              setFatherName(text);
              stringValidation(fatherName, setFatherNameEr, 'Father name');
            }}
            error={fatherNameEr}
            onSubmitEditing={() => {
              stringValidation(fatherName, setFatherNameEr, 'Father name');
              motherNameRef.current?.focus();
            }}
            onBlur={() =>
              stringValidation(fatherName, setFatherNameEr, 'Father name')
            }
            ref={fatherNameRef}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Mother Name'}
            value={motherName}
            onChangeText={text => {
              setMotherName(text);
              stringValidation(motherName, setMotherNameEr, 'Mother name');
            }}
            error={motherNameEr}
            onSubmitEditing={() => {
              stringValidation(motherName, setMotherNameEr, 'Mother name');
              phoneNoRef.current?.focus();
            }}
            onBlur={() =>
              stringValidation(motherName, setMotherNameEr, 'Mother name')
            }
            ref={motherNameRef}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Phone no.'}
            value={phoneNo}
            maxLength={10}
            onChangeText={text => {
              setPhoneNo(text);
              phoneNoValidation();
            }}
            error={phoneNoEr}
            onSubmitEditing={() => {
              phoneNoValidation();
              emailRef.current?.focus();
            }}
            onBlur={() => phoneNoValidation()}
            ref={phoneNoRef}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Email'}
            value={email}
            onChangeText={text => {
              setEmail(text);
              emailValidation();
            }}
            error={emailEr}
            onSubmitEditing={() => {
              emailValidation();
              // genderRef.current?.focus();
            }}
            onBlur={() => emailValidation()}
            ref={emailRef}
            returnKeyType={'next'}
          />

          <DropDownComp
            text={'Gender'}
            open={openGender}
            value={gender}
            items={genderData}
            setOpen={setOpenGender}
            setValue={setGender}
            setItems={setGenderData}
            error={genderEr}
            onOpen={onGenderOpen}
            zIndex={3000}
            zIndexInverse={1000}
          />
          <DropDownComp
            text={'Standard'}
            open={openStd}
            value={std}
            items={stdData}
            setOpen={setOpenStd}
            setValue={setStd}
            setItems={setStdData}
            error={stdEr}
            onOpen={onStdOpen}
            zIndex={2000}
            zIndexInverse={3000}
          />
          <DropDownComp
            text={'Division'}
            open={openDiv}
            value={div}
            items={divData}
            setOpen={setOpenDiv}
            setValue={setDiv}
            setItems={setDivData}
            error={divEr}
            onOpen={onDivOpen}
            zIndex={1000}
            zIndexInverse={3000}
          />
          <TextInputComp
            text={'Roll no.'}
            value={rollNo}
            maxLength={5}
            onChangeText={text => {
              setRollNo(text);
              numValidation(rollNo, setRollNoEr, 'Roll no.');
            }}
            error={rollNoEr}
            onSubmitEditing={() => {
              numValidation(rollNo, setRollNoEr, 'Roll no.');
              ageRef.current?.focus();
            }}
            onBlur={() => numValidation(rollNo, setRollNoEr, 'Roll no.')}
            ref={rollNoRef}
            returnKeyType={'next'}
          />

          <TextInputComp
            text={'Age'}
            value={age}
            maxLength={2}
            onChangeText={text => {
              setAge(text);
              numValidation(age, setAgeEr, 'Age');
            }}
            error={ageEr}
            onSubmitEditing={() => {
              numValidation(age, setAgeEr, 'Age');
              heightRef.current?.focus();
            }}
            onBlur={() => numValidation(age, setAgeEr, 'Age')}
            ref={ageRef}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Height'}
            value={height}
            onChangeText={text => {
              setHeight(text);
              numValidation(height, setHeightEr, 'Height');
            }}
            error={heightEr}
            onSubmitEditing={() => {
              numValidation(height, setHeightEr, 'Height');
              weightRef.current?.focus();
            }}
            onBlur={() => numValidation(height, setHeightEr, 'Height')}
            ref={heightRef}
            returnKeyType={'next'}
          />
          <TextInputComp
            text={'Weight'}
            value={weight}
            onChangeText={text => {
              setWeight(text);
              numValidation(weight, setWeightEr, 'Weight');
            }}
            error={weightEr}
            onSubmitEditing={() => {
              numValidation(weight, setWeightEr, 'Weight');
            }}
            onBlur={() => numValidation(weight, setWeightEr, 'Weight')}
            ref={weightRef}
            returnKeyType={'next'}
          />
        </ScrollView>
      </KeyboardAwareScrollView>

      <View style={styles.button}>
        <ButtonComp
          text={strings.button.register}
          onPress={() => {
            if (
              age === '' ||
              std === '' ||
              div === '' ||
              name === '' ||
              email === '' ||
              gender === '' ||
              height === '' ||
              weight === '' ||
              rollNo === '' ||
              phoneNo === '' ||
              fatherName === '' ||
              motherName === ''
            ) {
              emptyValueValidation();
            } else if (
              ageEr ||
              stdEr ||
              divEr ||
              nameEr ||
              emailEr ||
              genderEr ||
              heightEr ||
              weightEr ||
              rollNoEr ||
              phoneNoEr ||
              fatherNameEr ||
              motherNameEr
            ) {
              emailValidation();
              phoneNoValidation();
              emptyValueValidation();
            } else {
              getDetails();
            }
          }}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  button: {
    left: wp(120),
    position: 'absolute',
    bottom: hp(20),
  },
  dropdown: {
    marginTop: 100,
    height: 50,
    borderBottomColor: colors,
    borderBottomWidth: 0.5,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

// ****** // using the concept of useReducer & useContext hooks

// import React, {
//   useCallback,
//   useContext,
//   useEffect,
//   useRef,
//   useState,
// } from 'react';
// import {View, ScrollView, StyleSheet} from 'react-native';

// import uuid from 'react-native-uuid';
// import {useDispatch} from 'react-redux';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import {hp, wp} from '../helper/globalFunc';
// import icons from '../helper/constants/icons';
// import colors from '../helper/constants/colors';
// import HeaderComp from '../components/HeaderComp';
// import ButtonComp from '../components/ButtonComp';
// import strings from '../helper/constants/strings';
// import DropDownComp from '../components/DropDownComp';
// import TextInputComp from '../components/TextInputComp';
// import commonStyle from '../helper/constants/commonStyle';
// import StudentContext from '../context/studentDataContext';

// const SignUp = ({navigation}) => {
//   const {addUserDetail} = useContext(StudentContext);

//   const [openGender, setOpenGender] = useState(false);
//   const [gender, setGender] = useState('');
//   const [genderData, setGenderData] = useState([
//     {label: 'Boy', value: 'Boy'},
//     {label: 'Girl', value: 'Girl'},
//   ]);
//   const [openStd, setOpenStd] = useState(false);
//   const [std, setStd] = useState('');
//   const [stdData, setStdData] = useState([
//     {label: 'LKG', value: 'LKG'},
//     {label: 'SKG', value: 'SKG'},
//     {label: '1st', value: '1st'},
//     {label: '2nd', value: '2nd'},
//     {label: '3rd', value: '3rd'},
//     {label: '4th', value: '4th'},
//     {label: '5th', value: '5th'},
//     {label: '6th', value: '6th'},
//     {label: '7th', value: '7th'},
//     {label: '8th', value: '8th'},
//     {label: '9th', value: '9th'},
//     {label: '10th', value: '10th'},
//     {label: '11th', value: '11th'},
//     {label: '12th', value: '12th'},
//   ]);
//   const [openDiv, setOpenDiv] = useState(false);
//   const [div, setDiv] = useState('');
//   const [divData, setDivData] = useState([
//     {label: 'A', value: 'A'},
//     {label: 'B', value: 'B'},
//     {label: 'C', value: 'C'},
//   ]);

//   const [age, setAge] = useState('');
//   const [name, setName] = useState('');
//   const [ageEr, setAgeEr] = useState('');
//   const [stdEr, setStdEr] = useState('');
//   const [divEr, setDivEr] = useState('');
//   const [email, setEmail] = useState('');
//   const [height, setHeight] = useState('');
//   const [rollNo, setRollNo] = useState('');
//   const [weight, setWeight] = useState('');
//   const [nameEr, setNameEr] = useState('');
//   const [phoneNo, setPhoneNo] = useState('');
//   const [emailEr, setEmailEr] = useState('');
//   const [genderEr, setGenderEr] = useState('');
//   const [heightEr, setHeightEr] = useState('');
//   const [rollNoEr, setRollNoEr] = useState('');
//   const [weightEr, setWeightEr] = useState('');
//   const [phoneNoEr, setPhoneNoEr] = useState('');
//   const [motherName, setMotherName] = useState('');
//   const [fatherName, setFatherName] = useState('');
//   const [fatherNameEr, setFatherNameEr] = useState('');
//   const [motherNameEr, setMotherNameEr] = useState('');

//   const fatherNameRef = useRef();
//   const motherNameRef = useRef();
//   const ageRef = useRef();
//   const emailRef = useRef();
//   const phoneNoRef = useRef();
//   const heightRef = useRef();
//   const weightRef = useRef();
//   const genderRef = useRef();
//   const rollNoRef = useRef();

//   const getDetails = () => {
//     const data = {
//       id: uuid.v4(),
//       age,
//       std,
//       div,
//       name,
//       email,
//       rollNo,
//       weight,
//       height,
//       gender,
//       phoneNo,
//       fatherName,
//       motherName,
//     };
//     addUserDetail(data);
//     navigation.navigate('HomePage');
//   };

//   const phoneNoValidation = () => {
//     let reg = /^\d{10}$/;

//     if (phoneNo === '') {
//       setPhoneNoEr('Mobile No must be entered');
//     } else if (reg?.test(phoneNo) === false) {
//       setPhoneNoEr('Invalid number! must be ten digits');
//     } else if (reg?.test(phoneNo) === true) {
//       setPhoneNoEr('');
//     }
//   };

//   const stringValidation = (val, errFunc, title) => {
//     if (val === '') {
//       errFunc(`${title} must be entered`);
//     } else if (val?.length > 0) {
//       errFunc('');
//     }
//   };

//   const numValidation = (val, setEr, title) => {
//     let reg = /^\d+/;
//     if (val === '') {
//       setEr(`${title} must be entered`);
//     } else if (reg?.test(val) === false) {
//       setEr(
//         `Please only enter numeric characters only for your ${title}! (Allowed input:0-9)`,
//       );
//     } else if (reg?.test(val) === true) {
//       setEr('');
//     }
//   };

//   const emailValidation = () => {
//     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
//     if (email === '') {
//       setEmailEr('Email address must be entered');
//     } else if (reg?.test(email) === false) {
//       setEmailEr('Enter valid email address');
//     } else if (reg?.test(email) === true) {
//       setEmailEr('');
//     }
//   };

//   const emptyValueValidation = () => {
//     if (
//       age === '' ||
//       std === '' ||
//       div === '' ||
//       name === '' ||
//       email === '' ||
//       gender === '' ||
//       height === '' ||
//       weight === '' ||
//       rollNo === '' ||
//       phoneNo === '' ||
//       fatherName === '' ||
//       motherName === ''
//     ) {
//       if (std === '') {
//         setStdEr('standard must be entered');
//       }
//       if (div === '') {
//         setDivEr('Division must be entered');
//       }
//       if (name === '') {
//         setNameEr('Name must be entered');
//       }
//       if (email === '') {
//         setEmailEr('email must be entered');
//       }
//       if (age === '') {
//         setAgeEr('Age must be entered');
//       }
//       if (gender === '') {
//         setGenderEr('gender must be entered');
//       }
//       if (email === '') {
//         setEmailEr('email address must be entered');
//       }
//       if (phoneNo === '') {
//         setPhoneNoEr('phone No. must be entered');
//       }
//       if (height === '') {
//         setHeightEr('Height must be entered');
//       }
//       if (weight === '') {
//         setWeightEr('weight must be entered');
//       }
//       if (motherName === '') {
//         setMotherNameEr('Mother name must be entered');
//       }
//       if (fatherName === '') {
//         setFatherNameEr('Father name must be entered');
//       }
//       if (rollNo === '') {
//         setRollNoEr('Roll No. must be entered');
//       }
//     }
//   };

//   const onGenderOpen = useCallback(() => {
//     setOpenStd(false);
//     setOpenDiv(false);
//   }, []);
//   const onStdOpen = useCallback(() => {
//     setOpenGender(false);
//     setOpenDiv(false);
//   }, []);
//   const onDivOpen = useCallback(() => {
//     setOpenStd(false);
//     setOpenGender(false);
//   }, []);

//   return (
//     <View style={commonStyle.flex1}>
//       <HeaderComp text={'Sign Up'} />

//       <KeyboardAwareScrollView contentContainerStyle={{paddingBottom: 50}}>
//         <ScrollView style={{marginHorizontal: wp(15)}}>
//           <TextInputComp
//             text={'Name'}
//             value={name}
//             onChangeText={text => {
//               setName(text), stringValidation(name, setNameEr, 'Name');
//             }}
//             error={nameEr}
//             onSubmitEditing={() => {
//               stringValidation(name, setNameEr, 'Name');
//               fatherNameRef.current?.focus();
//             }}
//             onBlur={() => stringValidation(name, setNameEr, 'Name')}
//             autoFocus={true}
//             returnKeyType={'next'}
//           />
//           <TextInputComp
//             text={'Father Name'}
//             value={fatherName}
//             onChangeText={text => {
//               setFatherName(text);
//               stringValidation(fatherName, setFatherNameEr, 'Father name');
//             }}
//             error={fatherNameEr}
//             onSubmitEditing={() => {
//               stringValidation(fatherName, setFatherNameEr, 'Father name');
//               motherNameRef.current?.focus();
//             }}
//             onBlur={() =>
//               stringValidation(fatherName, setFatherNameEr, 'Father name')
//             }
//             ref={fatherNameRef}
//             returnKeyType={'next'}
//           />
//           <TextInputComp
//             text={'Mother Name'}
//             value={motherName}
//             onChangeText={text => {
//               setMotherName(text);
//               stringValidation(motherName, setMotherNameEr, 'Mother name');
//             }}
//             error={motherNameEr}
//             onSubmitEditing={() => {
//               stringValidation(motherName, setMotherNameEr, 'Mother name');
//               phoneNoRef.current?.focus();
//             }}
//             onBlur={() =>
//               stringValidation(motherName, setMotherNameEr, 'Mother name')
//             }
//             ref={motherNameRef}
//             returnKeyType={'next'}
//           />
//           <TextInputComp
//             text={'Phone no.'}
//             value={phoneNo}
//             maxLength={10}
//             onChangeText={text => {
//               setPhoneNo(text);
//               phoneNoValidation();
//             }}
//             error={phoneNoEr}
//             onSubmitEditing={() => {
//               phoneNoValidation();
//               emailRef.current?.focus();
//             }}
//             onBlur={() => phoneNoValidation()}
//             ref={phoneNoRef}
//             returnKeyType={'next'}
//           />
//           <TextInputComp
//             text={'Email'}
//             value={email}
//             onChangeText={text => {
//               setEmail(text);
//               emailValidation();
//             }}
//             error={emailEr}
//             onSubmitEditing={() => {
//               emailValidation();
//               // genderRef.current?.focus();
//             }}
//             onBlur={() => emailValidation()}
//             ref={emailRef}
//             returnKeyType={'next'}
//           />

//           <DropDownComp
//             text={'Gender'}
//             open={openGender}
//             value={gender}
//             items={genderData}
//             setOpen={setOpenGender}
//             setValue={setGender}
//             setItems={setGenderData}
//             error={genderEr}
//             onOpen={onGenderOpen}
//             zIndex={3000}
//             zIndexInverse={1000}
//           />
//           <DropDownComp
//             text={'Standard'}
//             open={openStd}
//             value={std}
//             items={stdData}
//             setOpen={setOpenStd}
//             setValue={setStd}
//             setItems={setStdData}
//             error={stdEr}
//             onOpen={onStdOpen}
//             zIndex={2000}
//             zIndexInverse={3000}
//           />
//           <DropDownComp
//             text={'Division'}
//             open={openDiv}
//             value={div}
//             items={divData}
//             setOpen={setOpenDiv}
//             setValue={setDiv}
//             setItems={setDivData}
//             error={divEr}
//             onOpen={onDivOpen}
//             zIndex={1000}
//             zIndexInverse={3000}
//           />
//           <TextInputComp
//             text={'Roll no.'}
//             value={rollNo}
//             maxLength={5}
//             onChangeText={text => {
//               setRollNo(text);
//               numValidation(rollNo, setRollNoEr, 'Roll no.');
//             }}
//             error={rollNoEr}
//             onSubmitEditing={() => {
//               numValidation(rollNo, setRollNoEr, 'Roll no.');
//               ageRef.current?.focus();
//             }}
//             onBlur={() => numValidation(rollNo, setRollNoEr, 'Roll no.')}
//             ref={rollNoRef}
//             returnKeyType={'next'}
//           />

//           <TextInputComp
//             text={'Age'}
//             value={age}
//             maxLength={2}
//             onChangeText={text => {
//               setAge(text);
//               numValidation(age, setAgeEr, 'Age');
//             }}
//             error={ageEr}
//             onSubmitEditing={() => {
//               numValidation(age, setAgeEr, 'Age');
//               heightRef.current?.focus();
//             }}
//             onBlur={() => numValidation(age, setAgeEr, 'Age')}
//             ref={ageRef}
//             returnKeyType={'next'}
//           />
//           <TextInputComp
//             text={'Height'}
//             value={height}
//             onChangeText={text => {
//               setHeight(text);
//               numValidation(height, setHeightEr, 'Height');
//             }}
//             error={heightEr}
//             onSubmitEditing={() => {
//               numValidation(height, setHeightEr, 'Height');
//               weightRef.current?.focus();
//             }}
//             onBlur={() => numValidation(height, setHeightEr, 'Height')}
//             ref={heightRef}
//             returnKeyType={'next'}
//           />
//           <TextInputComp
//             text={'Weight'}
//             value={weight}
//             onChangeText={text => {
//               setWeight(text);
//               numValidation(weight, setWeightEr, 'Weight');
//             }}
//             error={weightEr}
//             onSubmitEditing={() => {
//               numValidation(weight, setWeightEr, 'Weight');
//             }}
//             onBlur={() => numValidation(weight, setWeightEr, 'Weight')}
//             ref={weightRef}
//             returnKeyType={'next'}
//           />
//         </ScrollView>
//       </KeyboardAwareScrollView>

//       <View style={styles.button}>
//         <ButtonComp
//           text={strings.button.register}
//           onPress={() => {
//             if (
//               age === '' ||
//               std === '' ||
//               div === '' ||
//               name === '' ||
//               email === '' ||
//               gender === '' ||
//               height === '' ||
//               weight === '' ||
//               rollNo === '' ||
//               phoneNo === '' ||
//               fatherName === '' ||
//               motherName === ''
//             ) {
//               emptyValueValidation();
//             } else if (
//               ageEr ||
//               stdEr ||
//               divEr ||
//               nameEr ||
//               emailEr ||
//               genderEr ||
//               heightEr ||
//               weightEr ||
//               rollNoEr ||
//               phoneNoEr ||
//               fatherNameEr ||
//               motherNameEr
//             ) {
//               emailValidation();
//               phoneNoValidation();
//               emptyValueValidation();
//             } else {
//               getDetails();
//             }
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// export default SignUp;

// const styles = StyleSheet.create({
//   button: {
//     left: wp(120),
//     position: 'absolute',
//     bottom: hp(20),
//   },
//   dropdown: {
//     marginTop: 100,
//     height: 50,
//     borderBottomColor: colors,
//     borderBottomWidth: 0.5,
//   },

//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
// });
