import React from 'react';
import {Text, TextInput, View} from 'react-native';

import commonStyle from '../helper/constants/commonStyle';
import {hp} from '../helper/globalFunc';
import colors from '../helper/constants/colors';

const TextInputComp = ({
  ref,
  text,
  value,
  error,
  onBlur,
  onPress,
  onFocus,
  autoFocus,
  multiline,
  maxLength,
  placeholder,
  onChangeText,
  keyboardType,
  returnKeyType,
  onSubmitEditing,
}) => {
  return (
    <View style={{marginVertical: hp(5)}}>
      <Text
        style={{
          ...commonStyle.text,
          marginBottom: hp(3),

          color: colors.lightGray,
        }}>
        {text}
      </Text>

      <TextInput
        ref={ref}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onPress={onPress}
        multiline={multiline}
        autoFocus={autoFocus}
        maxLength={maxLength}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={commonStyle.textInput}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
      />

      {{error} ? <Text style={commonStyle.error}>{error}</Text> : null}
    </View>
  );
};

export default TextInputComp;
