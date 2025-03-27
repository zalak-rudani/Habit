import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../helper/globalFunc';
import colors from '../helper/constants/colors';
import {fonts} from '../helper/constants/fonts';

const ModalComp = ({data, visible, onPress}) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      style={{
        flex: 1,
      }}>
      <Pressable onPress={onPress} style={{flex: 1}}></Pressable>

      {/* <View
        style={{
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          bottom: hp(100),
          left: wp(80),
        }}> */}
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <FlatList
            data={data}
            style={styles.flatListStyle}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.button} onPress={item.onPress}>
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalComp;

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    // // marginHorizontal: 16,
    // // marginBottom: 16,
    // height: 34,
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: 'white',
    // backgroundColor: 'black',
    padding: 5,
    // justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontFamily: fonts.metrophobic_regular,
    textAlign: 'center',
    color: colors.primary.fontColor,
  },
  flatListStyle: {
    // width: wp(100),
    flexGrow: 0,
    borderRadius: 10,
    // padding: 10,
    // borderWidth: 1,
    // backgroundColor: 'black',
    color: '#000',
  },
  centeredView: {
    // right: 30,
    // bottom: -70,
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'flex-end',
  },
  modalView: {
    // marginTop: hp(200),
    marginRight: wp(50),
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
