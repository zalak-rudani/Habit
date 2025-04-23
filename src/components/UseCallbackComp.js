import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const UseCallbackComp = ({text, onPress}) => {
  console.log('re-render func...');

  return (
    <View style={{backgroundColor: 'red'}}>
      <TouchableOpacity onPress={onPress}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(UseCallbackComp);

const styles = StyleSheet.create({});
