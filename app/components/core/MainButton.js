import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MainText from './MainText';
import colors from '../../config/colors';

function MainButton(props) {
  return (
    <TouchableOpacity
      disabled={props?.disabled}
      style={[
        styles.button, 
        props.buttonType ? styles[`${props.buttonType}Button`] : styles[`primaryButton`], 
        props?.disabled&&styles.disabled, 
        props.style]}
      onPress={props.onPress}>
      <MainText style={[styles.buttonText,  props.buttonType ? styles[`${props.buttonType}Text`] : styles[`primaryText`]]}>{props.children}</MainText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 45
  },
  buttonText: {
    fontSize: 16
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  primaryText: {
    color: colors.text_secondary,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary
  },
  secondaryText: {
    color: colors.primary,
  },
  disabled: {
    opacity: 0.6,
    borderColor: colors.dark_gray
  }
})

export default MainButton;