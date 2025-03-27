import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import commonStyle from '../helper/constants/commonStyle';
import HeaderComp from '../components/HeaderComp';
import strings from '../helper/constants/strings';
import icons from '../helper/constants/icons';

const DivisionDetails = ({navigation, route}) => {
  const standard = route?.params?.std;
  // console.log('ID-=-=-=-=-=', studentId);

  const studentsData = useSelector(
    state => state?.studentDataSlice?.studentData,
  );

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
    const data = stdDetails.filter(items => items?.std == item?.title);
    return {...item, count: data.length};
  });

  return (
    <View style={commonStyle.flex1}>
      <HeaderComp text={`${standard}`} onPress={() => navigation.goBack()} />

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
                  div: item?.div,
                })
              }>
              {console.log('item-*-*-*-*-*', item)}
              {console.log('item====*-*-*', item?.email)}
              <Text style={commonStyle.subHeadText}>{item?.title}</Text>
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

const styles = StyleSheet.create({});
{
  /* <TouchableOpacity onPress={() => deleteData(item?.id)}>
<Text style={commonStyle.subHeadText}>{'DELETE'}</Text>
</TouchableOpacity> */
}
