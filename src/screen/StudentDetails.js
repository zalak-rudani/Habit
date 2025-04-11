// *** // using the concept of redux toolkit

import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import icons from '../helper/constants/icons';
import TextComp from '../components/TextComp';
import {fonts} from '../helper/constants/fonts';
import HeaderComp from '../components/HeaderComp';
import strings from '../helper/constants/strings';
import commonStyle from '../helper/constants/commonStyle';
import {removeData} from '../redux/slice/studentDataSlice';

const StudentDetails = ({navigation, route}) => {
  const studentId = route?.params?.id;
  console.log('id-=-=-=', studentId);

  const studentsData = useSelector(
    state => state?.studentDataSlice?.studentData,
  );
  console.log('studentsData-=-=-=-=', studentsData);

  const studentDetails = studentsData?.filter(item => {
    if (item?.id === studentId) {
      return item;
    }
  })[0];
  console.log('studentDetails-=-=-=-=', studentDetails);

  const dispatch = useDispatch();

  const deleteData = item => {
    dispatch(removeData(item));
    navigation.goBack();
  };

  return (
    <View style={commonStyle.flex1}>
      <HeaderComp
        source1={icons.left}
        onPress1={() => navigation.goBack()}
        source2={icons.edit}
        onPress2={() =>
          navigation.navigate('StudentRegistration', {
            updatedData: studentDetails,
          })
        }
        source3={icons.delete}
        onPress3={() =>
          Alert.alert('Delete', 'Are you sure?', [
            {
              text: 'Cancel',
            },
            {text: 'OK', onPress: () => deleteData(studentDetails?.id)},
          ])
        }
        text={strings.studentDetails.studentDetails}
      />

      <Text style={styles.headName}>{studentDetails?.name}</Text>

      <TextComp
        head1={'Father Name'}
        val1={studentDetails?.fatherName}
        head2={'Mother Name'}
        val2={studentDetails?.motherName}
      />
      <TextComp
        head1={'Standard'}
        val1={studentDetails?.std}
        head2={'Division'}
        val2={studentDetails?.div}
      />
      <TextComp
        head1={'Phone No.'}
        val1={studentDetails?.phoneNo}
        head2={'Email'}
        val2={studentDetails?.email}
      />
      <TextComp
        head1={'Age'}
        val1={`${studentDetails?.age} years old`}
        head2={'Gender'}
        val2={studentDetails?.gender}
      />
      <TextComp
        head1={'Height'}
        val1={`${studentDetails?.height} CM`}
        head2={'Weight'}
        val2={`${studentDetails?.weight} KG`}
      />
      <TextComp head1={'Roll No'} val1={studentDetails?.rollNo} />
    </View>
  );
};

export default StudentDetails;
const styles = StyleSheet.create({
  headName: {
    textAlign: 'center',
    padding: 30,
    fontFamily: fonts.medium,
    fontSize: 30,
  },
});

// ****** // using the concept of useReducer & useContext hooks

// import React, {useContext} from 'react';
// import {Alert, StyleSheet, Text, View} from 'react-native';

// import {useDispatch, useSelector} from 'react-redux';

// import icons from '../helper/constants/icons';
// import TextComp from '../components/TextComp';
// import {fonts} from '../helper/constants/fonts';
// import HeaderComp from '../components/HeaderComp';
// import strings from '../helper/constants/strings';
// import commonStyle from '../helper/constants/commonStyle';
// import {removeData} from '../redux/slice/studentDataSlice';
// import StudentContext from '../context/studentDataContext';

// const StudentDetails = ({navigation, route}) => {
//   const studentId = route?.params?.id;
//   console.log('id-=-=-=', studentId);
//   const {studentData, deleteStudentData} = useContext(StudentContext);

//   const studentsData = studentData;
//   console.log('studentsData-=-=-=-=', studentsData);

//   const studentDetails = studentsData?.filter(item => {
//     if (item?.id === studentId) {
//       return item;
//     }
//   })[0];
//   console.log('studentDetails-=-=-=-=', studentDetails);

//   const deleteData = item => {
//     deleteStudentData(item);
//     navigation.goBack();
//   };

//   return (
//     <View style={commonStyle.flex1}>
//       <HeaderComp
//         source1={icons.left}
//         onPress1={() => navigation.goBack()}
//         source2={icons.edit}
//         onPress2={() =>
//           navigation.navigate('StudentRegistration', {
//             updatedData: studentDetails,
//           })
//         }
//         source3={icons.delete}
//         onPress3={() =>
//           Alert.alert('Delete', 'Are you sure?', [
//             {
//               text: 'Cancel',
//             },
//             {text: 'OK', onPress: () => deleteData(studentDetails?.id)},
//           ])
//         }
//         text={strings.studentDetails.studentDetails}
//       />

//       <Text style={styles.headName}>{studentDetails?.name}</Text>

//       <TextComp
//         head1={'Father Name'}
//         val1={studentDetails?.fatherName}
//         head2={'Mother Name'}
//         val2={studentDetails?.motherName}
//       />
//       <TextComp
//         head1={'Standard'}
//         val1={studentDetails?.std}
//         head2={'Division'}
//         val2={studentDetails?.div}
//       />
//       <TextComp
//         head1={'Phone No.'}
//         val1={studentDetails?.phoneNo}
//         head2={'Email'}
//         val2={studentDetails?.email}
//       />
//       <TextComp
//         head1={'Age'}
//         val1={`${studentDetails?.age} years old`}
//         head2={'Gender'}
//         val2={studentDetails?.gender}
//       />
//       <TextComp
//         head1={'Height'}
//         val1={`${studentDetails?.height} Feet`}
//         head2={'Weight'}
//         val2={`${studentDetails?.weight} KG`}
//       />
//       <TextComp head1={'Roll No'} val1={studentDetails?.rollNo} />
//     </View>
//   );
// };

// export default StudentDetails;
// const styles = StyleSheet.create({
//   headName: {
//     textAlign: 'center',
//     padding: 30,
//     fontFamily: fonts.medium,
//     fontSize: 30,
//   },
// });
