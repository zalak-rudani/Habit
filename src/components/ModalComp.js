import {FlatList, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

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

      <View style={{borderRadius: 30}}>
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
    </Modal>
  );
};

export default ModalComp;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 16,
    height: 64,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'black',
    justifyContent: 'center',
  },

  text: {
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  flatListStyle: {
    flexGrow: 0,
    borderRadius: 19,
    paddingTop: 16,
    backgroundColor: 'black',
  },
});
