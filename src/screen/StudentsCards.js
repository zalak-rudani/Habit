// import React from 'react';
// import {
//   View,
//   Text,
//   Alert,
//   Image,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';

// import icons from '../helper/constants/icons';
// import colors from '../helper/constants/colors';
// import {removeData} from '../redux/slice/studentDataSlice';
// import commonStyle from '../helper/constants/commonStyle';

// import HeaderComp from '../components/HeaderComp';

// import {useDispatch, useSelector} from 'react-redux';

// const StudentsCards = ({navigation, route}) => {
//   const standard = route?.params?.std;
//   const division = route?.params?.div;

//   const studentsData = useSelector(
//     state => state?.studentDataSlice?.studentsData,
//   );

//   const sameStdDivStudents = studentsData?.filter(element => {
//     if (element?.std === standard && element?.div === division) {
//       return element;
//     }
//   });

//   const dispatch = useDispatch();
//   const deleteData = item => {
//     dispatch(removeData(item));
//   };

//   return (
//     <View style={commonStyle.flex1}>
//       <HeaderComp
//         text={`${standard}-${division}`}
//         onPress1={() => navigation.goBack()}
//         source1={icons.left}
//       />
//       <FlatList
//         data={sameStdDivStudents}
//         renderItem={({item}) => {
//           return (
//             <TouchableOpacity
//               onPress={() =>
//                 navigation.navigate('StudentDetails', {
//                   id: item?.id,
//                 })
//               }
//               style={{
//                 ...commonStyle.studentCard,
//                 borderLeftColor: colors.blue,
//               }}>
//               <View style={styles.detailView}>
//                 <Image
//                   source={item?.gender === 'Boy' ? icons.boy : icons.girl}
//                   style={styles.icon}
//                 />
//                 <Text style={{...commonStyle.mediumText, flex: 1}}>
//                   {item?.name}
//                 </Text>
//                 <View>
//                   <TouchableOpacity
//                     onPress={() =>
//                       Alert.alert('Delete', 'Are you sure?', [
//                         {
//                           text: 'Cancel',
//                         },
//                         {text: 'OK', onPress: () => deleteData(item?.id)},
//                       ])
//                     }>
//                     <Image source={icons.delete} style={commonStyle.icon} />
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     onPress={() =>
//                       navigation.navigate('StudentRegistration', {
//                         updatedData: item,
//                       })
//                     }>
//                     <Image source={icons.edit} style={commonStyle.icon} />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//               <View style={styles.detailView}>
//                 <Image source={icons.numbers} style={styles.icon} />

//                 <Text style={commonStyle.mediumText}>{item?.rollNo}</Text>
//               </View>
//               <View style={styles.detailView}>
//                 <Image source={icons.phone} style={styles.icon} />
//                 <Text style={commonStyle.mediumText}>{item?.phoneNo}</Text>
//               </View>
//             </TouchableOpacity>
//           );
//         }}
//       />
//     </View>
//   );
// };

// export default StudentsCards;
// const styles = StyleSheet.create({
//   detailView: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   icon: {
//     ...commonStyle.icon,
//     marginRight: 15,
//   },
// });

import React, {useContext} from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import icons from '../helper/constants/icons';
import colors from '../helper/constants/colors';

import commonStyle from '../helper/constants/commonStyle';

import HeaderComp from '../components/HeaderComp';
import StudentContext from '../context/studentDataContext';

const StudentsCards = ({navigation, route}) => {
  const standard = route?.params?.std;
  const division = route?.params?.div;

  const {studentData, deleteStudentData} = useContext(StudentContext);

  const studentsData = studentData;

  const sameStdDivStudents = studentsData?.filter(element => {
    if (element?.std === standard && element?.div === division) {
      return element;
    }
  });

  const deleteData = item => {
    deleteStudentData(item);
  };

  return (
    <View style={commonStyle.flex1}>
      <HeaderComp
        text={`${standard}-${division}`}
        onPress1={() => navigation.goBack()}
        source1={icons.left}
      />
      <FlatList
        data={sameStdDivStudents}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('StudentDetails', {
                  id: item?.id,
                })
              }
              style={{
                ...commonStyle.studentCard,
                borderLeftColor: colors.blue,
              }}>
              <View style={styles.detailView}>
                <Image
                  source={item?.gender === 'Boy' ? icons.boy : icons.girl}
                  style={styles.icon}
                />
                <Text style={{...commonStyle.mediumText, flex: 1}}>
                  {item?.name}
                </Text>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      Alert.alert('Delete', 'Are you sure?', [
                        {
                          text: 'Cancel',
                        },
                        {text: 'OK', onPress: () => deleteData(item?.id)},
                      ])
                    }>
                    <Image source={icons.delete} style={commonStyle.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('StudentRegistration', {
                        updatedData: item,
                      })
                    }>
                    <Image source={icons.edit} style={commonStyle.icon} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.detailView}>
                <Image source={icons.numbers} style={styles.icon} />

                <Text style={commonStyle.mediumText}>{item?.rollNo}</Text>
              </View>
              <View style={styles.detailView}>
                <Image source={icons.phone} style={styles.icon} />
                <Text style={commonStyle.mediumText}>{item?.phoneNo}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default StudentsCards;
const styles = StyleSheet.create({
  detailView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    ...commonStyle.icon,
    marginRight: 15,
  },
});
