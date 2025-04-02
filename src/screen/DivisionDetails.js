import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {useSelector} from 'react-redux';

import { hp } from '../helper/globalFunc';
import icons from '../helper/constants/icons';
import HeaderComp from '../components/HeaderComp';
import commonStyle from '../helper/constants/commonStyle';

const DivisionDetails = ({navigation, route}) => {
  const standard = route?.params?.std;
  console.log('standard-=-=-=-=-=', standard);

  const studentsData = useSelector(
    state => state?.studentDataSlice?.studentData,
  );
  console.log('studentsData-=-=-=-=-=', studentsData);

  const sameStdStudent = studentsData?.filter(element => {
    if (element?.std === standard) {
      return element;
    }
  });
  console.log('sameStdStudent-=-=-=-=-', sameStdStudent);

  const divisions = [
    {
      title: 'A',
    },
    {
      title: 'B',
    },
    {
      title: 'C',
    },
  ];

  const division = divisions.map(item => {
    const sameStdDivStudentData = sameStdStudent.filter(
      items => items?.div === item?.title,
    );
    return {...item, count: sameStdDivStudentData?.length};
  });

  console.log('sameStdDivStudentData=-=-=-=-=-=', division);

  return (
    <View style={commonStyle.flex1}>
      <HeaderComp
        text={`${standard}`}
        onPress1={() => navigation.goBack()}
        source1={icons.left}
      />

      <FlatList
        numColumns={2}
        horizontal={false}
        data={division}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={commonStyle.stdDivCards}
              onPress={() =>
                navigation.navigate('StudentsCards', {
                  std: standard,
                  div: item?.title,
                })
              }>
              {console.log('item-*-*-*-*-*', item)}

              <Text style={{...commonStyle.subHeadText, paddingBottom: hp(15)}}>
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

export default DivisionDetails;


{
  /* <TouchableOpacity onPress={() => deleteData(item?.id)}>
<Text style={commonStyle.subHeadText}>{'DELETE'}</Text>
</TouchableOpacity> */
}
