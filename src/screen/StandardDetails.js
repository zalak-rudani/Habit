import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import commonStyle from '../helper/constants/commonStyle';
import icons from '../helper/constants/icons';
import strings from '../helper/constants/strings';
import {hp, wp} from '../helper/globalFunc';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const StandardDetails = ({navigation}) => {
  const stdDetails = useSelector(state => state?.studentDataSlice?.studentData);
  // console.log('stdDETAILS*-*-*-*-*-*-*-*-*-', stdDetails);

  return (
    <View style={commonStyle.flex1}>
      <View
        style={{
          ...commonStyle.directionRow,
          marginTop: 50,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{...commonStyle.icon, marginHorizontal: wp(10)}}
            source={icons.left}
          />
        </TouchableOpacity>
        <Text
          style={{
            ...commonStyle.headText,
            flex: 1,
            textAlign: 'center',
            marginBottom: hp(20),
          }}>
          {strings.standardDetails.standards}
        </Text>
      </View>

      <FlatList
        numColumns={2}
        horizontal={false}
        data={stdDetails}
        renderItem={item => {
          return (
            <View style={{flex: 1}}>
              <TouchableOpacity style={commonStyle.stdDivCards}>
                {console.log('IIITEM-*-*-*-*-*', item)}
                <Text style={commonStyle.subHeadText}>{'Standard'}</Text>
                <Text style={commonStyle.subHeadText}>{item?.index}</Text>
              </TouchableOpacity>
            </View>
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
