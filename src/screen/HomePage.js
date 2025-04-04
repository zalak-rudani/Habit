import React, {useId, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {useSelector} from 'react-redux';

import {hp, wp} from '../helper/globalFunc';
import icons from '../helper/constants/icons';
import colors from '../helper/constants/colors';
import strings from '../helper/constants/strings';
import commonStyle from '../helper/constants/commonStyle';

const HomePage = ({navigation}) => {
  const [input, setInput] = useState('');
  const userData = useSelector(state => state?.studentDataSlice?.userDetails);
  console.log('userData-=-=-=-=-=', userData);

  const id = useId();
  console.log('id-=-=-=', id);

  const studentData = useSelector(
    state => state?.studentDataSlice?.studentData,
  );
  console.log('studentDataName-=-=-=-=-=', studentData);

  return (
    <View style={[commonStyle.flex1]}>
      <View style={styles.marginTop}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text style={{...commonStyle.text, color: colors.gray}}>
              {strings.homePage.hello}
            </Text>
            <Text
              style={[
                {...commonStyle.headText, color: colors.primary.fontColor},
                commonStyle.margin10,
              ]}>
              {userData?.name}
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('UserDetails')}>
            <Image source={icons.user} style={commonStyle.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchView}>
          <Image style={styles.icon} source={icons.search} />
          <TextInput
            style={{flex: 1}}
            placeholder="Search"
            clearButtonMode="always"
            value={input}
            onChangeText={text => setInput(text)}
            // onSubmitEditing={() =>
            //   navigation.navigate('StudentDetails', {id: studentId})
            // }
          />
        </View>
        <FlatList
          style={styles.flatList}
          data={studentData}
          renderItem={({item}) => {
            if (input === '') {
              return null;
            }
            if (item?.name?.toLowerCase()?.includes(input?.toLowerCase())) {
              return (
                <View style={{marginVertical: 2}}>
                  <TouchableOpacity
                    style={styles.flatListView}
                    onPress={() => {
                      // setStudentId(item?.id);
                      setInput(item?.name);
                      navigation.navigate('StudentDetails', {id: item?.id});
                      setInput('');
                    }}>
                    <Text style={commonStyle.text}>{item?.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            }
          }}
        />

        <Text
          style={{
            ...commonStyle.subHeadText,
            color: colors.primary.fontColor,
            marginTop: hp(40),
          }}>
          {strings.homePage.academics}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.studentCard}
        onPress={() => navigation.navigate('StandardDetails')}>
        <Image
          resizeMode="contain"
          style={styles.studentIcon}
          source={icons.students}
        />
        <Text style={commonStyle.subHeadText}>{strings.homePage.students}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  marginTop: {
    marginTop: hp(50),
    marginHorizontal: wp(20),
  },

  searchView: {
    height: hp(40),
    width: wp(350),
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: hp(20),
  },

  icon: {
    height: hp(18),
    width: hp(18),
    marginHorizontal: wp(15),
  },

  studentCard: {
    height: hp(300),
    width: hp(300),
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: hp(70),
    marginHorizontal: wp(45),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'static',
  },

  studentIcon: {
    height: hp(150),
    width: hp(150),
  },
  flatList: {
    position: 'absolute',
    marginVertical: hp(120),
    marginLeft: hp(40),
  },

  flatListView: {
    backgroundColor: '#EFEFF1',
    padding: hp(10),
    borderRadius: 10,
    width: wp(250),
  },
});

// backgroundColor: '#ff004F05',
