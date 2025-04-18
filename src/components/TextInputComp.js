import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {hp} from '../helper/globalFunc';
import colors from '../helper/constants/colors';
import commonStyle from '../helper/constants/commonStyle';
import {fonts} from '../helper/constants/fonts';

const TextInputComp = ({
  ref,
  text,
  value,
  error,
  onBlur,
  source,
  onPress,
  onFocus,
  autoFocus,
  multiline,
  maxLength,
  placeholder,
  onChangeText,
  keyboardType,
  autoCapitalize,
  returnKeyType,
  onSubmitEditing,
  staticPlaceholder,
  // styleOfTextInput,
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
      <View style={styles.textInputView}>
        <TextInput
          ref={ref}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          multiline={multiline}
          autoFocus={autoFocus}
          maxLength={maxLength}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          style={commonStyle.textInput}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          autoCapitalize={autoCapitalize}
        />
        <Text
          style={{
            fontFamily: fonts.extraLight,
            color: colors.lightGray,
          }}>
          {staticPlaceholder}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Image source={source} style={commonStyle.icon} />
        </TouchableOpacity>
      </View>
      {{error} ? <Text style={commonStyle.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
  },
});

export default TextInputComp;
