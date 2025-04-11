// *** // using the concept of redux toolkit

import React from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';

import icons from '../helper/constants/icons';
import TextComp from '../components/TextComp';
import {fonts} from '../helper/constants/fonts';
import colors from '../helper/constants/colors';
import HeaderComp from '../components/HeaderComp';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../redux/slice/studentDataSlice';
import commonStyle from '../helper/constants/commonStyle';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const UserDetails = ({navigation}) => {
  const userData = useSelector(state => state?.studentDataSlice?.userDetails);
  console.log('studentData-=-=-=-=', userData);

  const dispatch = useDispatch();

  return (
    <View style={commonStyle.flex1}>
      <HeaderComp
        onPress1={() => navigation.goBack()}
        source1={icons.left}
        text={'Your Profile'}
        onPress2={() =>
          Alert.alert('Logout', 'Are you sure? You want to logout?', [
            {
              text: 'Cancel',
            },
            {
              text: 'Confirm',
              onPress: () => {
                dispatch(logOut());
                navigation.navigate('LoginPage');
              },
            },
          ])
        }
        source2={icons.power}
      />

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          //   marginVertical: 20,
          paddingVertical: 20,
        }}>
        <Image
          style={{...commonStyle.icon70}}
          source={userData?.gender === 'Boy' ? icons.boy : icons.girl}
        />
        <View>
          <Text
            style={{
              textAlign: 'center',
              padding: 10,
              fontFamily: fonts.medium,
              fontSize: 30,
            }}>
            {userData?.name}
          </Text>

          <Text
            style={{
              textAlign: 'center',
              fontFamily: fonts.regular,
              fontSize: 15,
              color: colors.lightGray,
            }}>{`Class : ${userData?.std} ${userData?.div} | Roll No. : ${userData?.rollNo}`}</Text>
        </View>
      </View>

      {/* <KeyboardAwareScrollView> */}
      <View style={styles.admissionView}>
        <View style={styles.firstRow}>
          <View>
            <Text style={styles.headText}>{'Academic Year'}</Text>
            <Text style={styles.text}>{'2020-2023'}</Text>
          </View>
          <View>
            <Text style={styles.headText}>{'Date of admission'}</Text>
            <Text style={styles.text}>{'1 July,2020'}</Text>
          </View>
        </View>

        <Text style={styles.headText}>{'Admission number'}</Text>
        <Text style={styles.text}>{'000247'}</Text>
      </View>

      <TextComp
        head1={'Father Name'}
        val1={userData?.fatherName}
        head2={'Mother Name'}
        val2={userData?.motherName}
      />

      <TextComp
        head1={'Phone No.'}
        val1={userData?.phoneNo}
        head2={'Email'}
        val2={userData?.email}
      />
      <TextComp
        head1={'Age'}
        val1={`${userData?.age} years old`}
        head2={'Gender'}
        val2={userData?.gender}
      />
      <TextComp
        head1={'Height'}
        val1={`${userData?.height} CM`}
        head2={'Weight'}
        val2={`${userData?.weight} KG`}
      />
      <TextComp head1={'Roll No'} val1={userData?.rollNo} />
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  admissionView: {
    borderWidth: 1,
    flex: 1,
    paddingHorizontal: 20,
    margin: 15,
    borderRadius: 10,
    borderColor: colors.lightGray,
  },

  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  headText: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: colors.lightGray,
    paddingVertical: 10,
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: colors.primary.fontColor,
  },
});

// ****** // using the concept of useReducer & useContext hooks

// import React, {useContext} from 'react';
// import {Alert, Image, StyleSheet, Text, View} from 'react-native';

// import icons from '../helper/constants/icons';
// import TextComp from '../components/TextComp';
// import {fonts} from '../helper/constants/fonts';
// import colors from '../helper/constants/colors';
// import HeaderComp from '../components/HeaderComp';
// import {useDispatch, useSelector} from 'react-redux';
// import {logOut} from '../redux/slice/studentDataSlice';
// import commonStyle from '../helper/constants/commonStyle';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import StudentContext from '../context/studentDataContext';

// const UserDetails = ({navigation}) => {
//   const {userDetails} = useContext(StudentContext);

//   const userData = userDetails;
//   console.log('studentData-=-=-=-=', userData);

//   return (
//     <View style={commonStyle.flex1}>
//       <HeaderComp
//         onPress1={() => navigation.goBack()}
//         source1={icons.left}
//         text={'Your Profile'}
//         // onPress2={() =>
//         //   Alert.alert('Logout', 'Are you sure? You want to logout?', [
//         //     {
//         //       text: 'Cancel',
//         //     },
//         //     {
//         //       text: 'Confirm',
//         //       onPress: () => {
//         //         dispatch(logOut());
//         //         navigation.navigate('LoginPage');
//         //       },
//         //     },
//         //   ])
//         // }
//         source2={icons.power}
//       />

//       <View
//         style={{
//           alignItems: 'center',
//           flexDirection: 'row',
//           //   marginVertical: 20,
//           paddingVertical: 20,
//         }}>
//         <Image
//           style={{...commonStyle.icon70}}
//           source={userData?.gender === 'Boy' ? icons.boy : icons.girl}
//         />
//         <View>
//           <Text
//             style={{
//               textAlign: 'center',
//               padding: 10,
//               fontFamily: fonts.medium,
//               fontSize: 30,
//             }}>
//             {userData?.name}
//           </Text>

//           <Text
//             style={{
//               textAlign: 'center',
//               fontFamily: fonts.regular,
//               fontSize: 15,
//               color: colors.lightGray,
//             }}>
//             {`Class : ${userData?.std} ${userData?.div} | Roll No. : ${userData?.rollNo}`}
//           </Text>
//         </View>
//       </View>

//       {/* <KeyboardAwareScrollView> */}
//       <View style={styles.admissionView}>
//         <View style={styles.firstRow}>
//           <View>
//             <Text style={styles.headText}>{'Academic Year'}</Text>
//             <Text style={styles.text}>{'2020-2023'}</Text>
//           </View>
//           <View>
//             <Text style={styles.headText}>{'Date of admission'}</Text>
//             <Text style={styles.text}>{'1 July,2020'}</Text>
//           </View>
//         </View>

//         <Text style={styles.headText}>{'Admission number'}</Text>
//         <Text style={styles.text}>{'000247'}</Text>
//       </View>

//       <TextComp
//         head1={'Father Name'}
//         val1={userData?.fatherName}
//         head2={'Mother Name'}
//         val2={userData?.motherName}
//       />

//       <TextComp
//         head1={'Phone No.'}
//         val1={userData?.phoneNo}
//         head2={'Email'}
//         val2={userData?.email}
//       />
//       <TextComp
//         head1={'Age'}
//         val1={`${userData?.age} years old`}
//         head2={'Gender'}
//         val2={userData?.gender}
//       />
//       <TextComp
//         head1={'Height'}
//         val1={`${userData?.height} Feet`}
//         head2={'Weight'}
//         val2={`${userData?.weight} KG`}
//       />
//       <TextComp head1={'Roll No'} val1={userData?.rollNo} />
//       {/* </KeyboardAwareScrollView> */}
//     </View>
//   );
// };

// export default UserDetails;

// const styles = StyleSheet.create({
//   admissionView: {
//     borderWidth: 1,
//     flex: 1,
//     paddingHorizontal: 20,
//     margin: 15,
//     borderRadius: 10,
//     borderColor: colors.lightGray,
//   },

//   firstRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 10,
//   },

//   headText: {
//     fontFamily: fonts.regular,
//     fontSize: 15,
//     color: colors.lightGray,
//     paddingVertical: 10,
//   },
//   text: {
//     fontFamily: fonts.regular,
//     fontSize: 15,
//     color: colors.primary.fontColor,
//   },
// });
