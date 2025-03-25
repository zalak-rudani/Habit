import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyle from '../helper/constants/commonStyle';
import {useSelector} from 'react-redux';

const StudentDetails = () => {
  const studentData = useSelector(
    state => state?.studentDataSlice?.studentData,
  );

  console.log('/*/-*-*/*-/-*/-/-/-', studentData);

  return (
    <View style={commonStyle.flex1}>
      <Text style={commonStyle.subHeadText}>{'StudentDetails'}</Text>

      <Text style={commonStyle.subHeadText}>{StudentDetails[5]?.id}</Text>
    </View>
  );
};

export default StudentDetails;

const styles = StyleSheet.create({});
