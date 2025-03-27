import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import commonStyle from '../helper/constants/commonStyle';
import icons from '../helper/constants/icons';
import strings from '../helper/constants/strings';
import {hp, wp} from '../helper/globalFunc';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {removeData} from '../redux/slice/studentDataSlice';
import HeaderComp from '../components/HeaderComp';

const StandardDetails = ({navigation}) => {
  const stdDetails = useSelector(state => state?.studentDataSlice?.studentData);
  console.log('stdDETAILS*-*-*-*-*-*-*-*-*-', stdDetails);

  const dispatch = useDispatch();

  const deleteData = item => {
    dispatch(removeData(item));
  };

  // const count = stdDetails?.filter((ele) => {
  //   if (ele.std === standard.title) {
  //
  //   }
  // });

  const standard = [
    {
      title: 'LKG',
      // count: count(title),
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

  const standards = standard.map(item => {
    const data = stdDetails.filter(items => items?.std == item?.title);
    return {...item, count: data.length};
  });

  return (
    <View style={commonStyle.flex1}>
      <HeaderComp
        text={strings.standardDetails.standards}
        onPress={() => navigation.goBack()}
      />

      <FlatList
        numColumns={2}
        horizontal={false}
        data={standards}
        renderItem={({item, index}) => {
          return (
            // <View style={{flex: 1}}>
            <TouchableOpacity
              style={commonStyle.stdDivCards}
              onPress={() =>
                navigation.navigate('DivisionDetails', {std: item?.title})
              }>
              {console.log('item-*-*-*-*-*', item)}
              {console.log('item====*-*-*', item?.email)}
              <Text style={commonStyle.subHeadText}>{item?.title}</Text>
              <Text style={commonStyle.subHeadText}>{item?.count}</Text>
            </TouchableOpacity>
            // </View>
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

const styles = StyleSheet.create({});

// <FlatList
// style={{flex: 1}}
// data={studentData}
// renderItem={({item, index}) => {
//   return (
//     <TouchableOpacity
//       style={commonStyle.card}
//       onPress={() =>
//         navigation.navigate('StudentDetails', {id: item?.id})
//       }>
//       <View
//         style={{
//           // flexDirection: 'row',

//           padding: 5,
//         }}>
//         <View style={{flex: 1}}>
//           <Text style={commonStyle.textHead}>
//             Name :
//             <Text style={commonStyle.textValue}>
//               {' '}
//               {`${item?.fName} ${item?.mName} ${item?.lName}`}{' '}
//             </Text>
//           </Text>
//           <Text style={commonStyle.textHead}>
//             Enrollment No :
//             <Text style={commonStyle.textValue}>
//               {item?.enrollNum}
//             </Text>
//           </Text>
//           <Text style={commonStyle.textHead}>
//             Gender :
//             <Text style={commonStyle.textValue}> {item?.gender}</Text>
//           </Text>
//           <Text style={commonStyle.textHead}>
//             Mobile NO :
//             <Text style={commonStyle.textValue}>
//               {item?.mobileNo}{' '}
//             </Text>
//           </Text>
//         </View>

//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'flex-end',
//             // alignItems: 'flex-end',
//           }}>
//           <TouchableOpacity
//             onPress={() => {
//               // updateData(item);
//               navigation.navigate('StudentRegister', {
//                 updateData: item,
//               });
//             }}>
//             <Image style={commonStyle.miniIcon} source={icons.edit} />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() =>
//               Alert.alert('Delete', 'Are you sure?', [
//                 {
//                   text: 'Cancel',
//                 },
//                 {text: 'OK', onPress: () => removeData(item?.id)},
//               ])
//             }>
//             <Image
//               style={commonStyle.miniIcon}
//               source={icons.delete}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// }}
// />

{
  /* <Text style={commonStyle.subHeadText}>{'DELETE'}</Text> */
}
