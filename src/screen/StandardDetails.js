// *** // using the concept of redux toolkit

import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import icons from '../helper/constants/icons';
import strings from '../helper/constants/strings';
import HeaderComp from '../components/HeaderComp';
import commonStyle from '../helper/constants/commonStyle';
import {useSelector} from 'react-redux';

const StandardDetails = ({navigation}) => {
  const stdDetails = useSelector(state => state?.studentDataSlice?.studentData);
  console.log('stdDETAILS*-*-*-*-*-*-*-*-*-', stdDetails);

  const standards = [
    {
      title: 'LKG',
    },
    {
      title: 'SKG',
    },
    {
      title: '1st',
    },
    {
      title: '2nd',
    },
    {
      title: '3rd',
    },
    {
      title: '4th',
    },
    {
      title: '5th',
    },
    {
      title: '6th',
    },
    {
      title: '7th',
    },
    {
      title: '8th',
    },
    {
      title: '9th',
    },
    {
      title: '10th',
    },
    {
      title: '11th',
    },
    {
      title: '12th',
    },
  ];

  const standard = standards.map(item => {
    const sameStdStudent = stdDetails?.filter(
      items => items?.std == item?.title,
    );
    return {...item, count: sameStdStudent?.length};
  });

  console.log('STANDARD-=-=-=-=-', standards);

  return (
    <View style={commonStyle.flex1}>
      <HeaderComp
        text={strings.standardDetails.standards}
        onPress1={() => navigation.goBack()}
        source1={icons.left}
      />

      <FlatList
        numColumns={2}
        horizontal={false}
        data={standard}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={commonStyle.stdDivCards}
              onPress={() =>
                navigation.navigate('DivisionDetails', {std: item?.title})
              }>
              <Text style={{...commonStyle.subHeadText, paddingBottom: 15}}>
                {item?.title}
              </Text>
              <Text style={commonStyle.subHeadText}>{`(${item?.count})`}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        style={commonStyle.plus}
        onPress={() => navigation.navigate('StudentRegistration')}>
        <Image style={commonStyle.icon50} source={icons.plus} />
      </TouchableOpacity>
    </View>
  );
};

export default StandardDetails;

// ****** // using the concept of useReducer & useContext hooks

// import React, {useContext} from 'react';
// import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

// import icons from '../helper/constants/icons';
// import strings from '../helper/constants/strings';
// import HeaderComp from '../components/HeaderComp';
// import commonStyle from '../helper/constants/commonStyle';
// import StudentContext from '../context/studentDataContext';

// const StandardDetails = ({navigation}) => {
//   const {studentData} = useContext(StudentContext);

//   const stdDetails = studentData;
//   console.log('stdDETAILS*-*-*-*-*-*-*-*-*-', stdDetails);

//   const standards = [
//     {
//       title: 'LKG',
//     },
//     {
//       title: 'SKG',
//     },
//     {
//       title: '1st',
//     },
//     {
//       title: '2nd',
//     },
//     {
//       title: '3rd',
//     },
//     {
//       title: '4th',
//     },
//     {
//       title: '5th',
//     },
//     {
//       title: '6th',
//     },
//     {
//       title: '7th',
//     },
//     {
//       title: '8th',
//     },
//     {
//       title: '9th',
//     },
//     {
//       title: '10th',
//     },
//     {
//       title: '11th',
//     },
//     {
//       title: '12th',
//     },
//   ];

//   const standard = standards.map(item => {
//     const sameStdStudent = stdDetails.filter(
//       items => items?.std == item?.title,
//     );
//     return {...item, count: sameStdStudent?.length};
//   });

//   console.log('STANDARD-=-=-=-=-', standards);

//   return (
//     <View style={commonStyle.flex1}>
//       <HeaderComp
//         text={strings.standardDetails.standards}
//         onPress1={() => navigation.goBack()}
//         source1={icons.left}
//       />

//       <FlatList
//         numColumns={2}
//         horizontal={false}
//         data={standard}
//         renderItem={({item, index}) => {
//           return (
//             <TouchableOpacity
//               style={commonStyle.stdDivCards}
//               onPress={() =>
//                 navigation.navigate('DivisionDetails', {std: item?.title})
//               }>
//               <Text style={{...commonStyle.subHeadText, paddingBottom: 15}}>
//                 {item?.title}
//               </Text>
//               <Text style={commonStyle.subHeadText}>{`(${item?.count})`}</Text>
//             </TouchableOpacity>
//           );
//         }}
//       />
//       <TouchableOpacity
//         style={commonStyle.plus}
//         onPress={() =>
//           navigation.navigate('StudentRegistration')
//         }>
//         <Image style={commonStyle.icon50} source={icons.plus} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default StandardDetails;
