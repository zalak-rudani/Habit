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
    const sameStdStudent = stdDetails.filter(
      items => items?.std == item?.title,
    );
    return {...item, count: sameStdStudent?.length};
  });

  console.log('STDANDARD-=-=-=-=-', standards);

  return (
    <View style={commonStyle.flex1}>
      <HeaderComp
        text={strings.standardDetails.standards}
        onPress={() => navigation.goBack()}
      />

      <FlatList
        numColumns={2}
        horizontal={false}
        data={standard}
        renderItem={({item, index}) => {
          return (
            // <View style={{flex: 1}}>
            <TouchableOpacity
              style={commonStyle.stdDivCards}
              onPress={() =>
                navigation.navigate('DivisionDetails', {std: item?.title})
              }>
              {console.log('item-*-*-*-*-*', item)}

              <Text style={{...commonStyle.subHeadText, paddingBottom: 15}}>
                {item?.title}
              </Text>
              <Text style={commonStyle.subHeadText}>{`(${item?.count})`}</Text>
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
