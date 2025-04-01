import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyle from '../helper/constants/commonStyle';
import {useSelector} from 'react-redux';
import HeaderComp from '../components/HeaderComp';
import strings from '../helper/constants/strings';
import {fonts} from '../helper/constants/fonts';
import colors from '../helper/constants/colors';
import TextComp from '../components/TextComp';
import icons from '../helper/constants/icons';

const StudentDetails = ({navigation, route}) => {
  const studentId = route?.params?.id;
  console.log('id-=-=-=', studentId);

  const studentData = useSelector(
    state => state?.studentDataSlice?.studentData,
  );
  console.log('studentData-=-=-=-=', studentData);

  const studentDetails = studentData?.filter(item => {
    if (item?.id === studentId) {
      return item;
    }
  })[0];
  console.log('studentDetails-=-=-=-=', studentDetails);

  return (
    <View style={commonStyle.flex1}>
      <HeaderComp
        onPress1={() => navigation.goBack()}
        text={strings.studentDetails.studentDetails}
        source1={icons.left}
      />

      {/* <View style={{alignItems: 'center', padding: 30}}> */}
      <Text
        style={{
          textAlign: 'center',
          padding: 30,
          fontFamily: fonts.medium,
          fontSize: 30,
        }}>
        {studentDetails?.name}
      </Text>
      {/* </View> */}

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
        val1={studentDetails?.height}
        head2={'Weight'}
        val2={studentDetails?.weight}
      />
      <TextComp head1={'Roll No'} val1={studentDetails?.rollNo} />
    </View>
  );
};

export default StudentDetails;

const styles = StyleSheet.create({});
