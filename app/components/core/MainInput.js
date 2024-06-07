import React from 'react';

import { StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import colors from '../../config/colors';
import MainText from './MainText';
import { primaryFont } from '../../config/fonts';
import IonIcon from 'react-native-vector-icons/Ionicons';


function MainInput(props) {

  const [visible, setVisibility] = React.useState(false);
  const [focus, setFocus] = React.useState(false);

  const renderPasswordToggle = () => {
    if (props?.secure === true && visible) {
      return (
        <TouchableOpacity style={styles.visibilityIcon} onPress={() => { setVisibility(false) }}>
          <IonIcon name="eye-off" size={26} color={colors.black}/>
        </TouchableOpacity>
      )
    }
    else if (props?.secure === true && !visible) {
      return (
        <TouchableOpacity style={styles.visibilityIcon} onPress={() => { setVisibility(true) }}>
          <IonIcon name="eye" size={26} color={colors.black}/>
        </TouchableOpacity>
      )
    }
    else return null
  }

  return (
    <View style={[styles.content, props?.style]}>
      {props.name && <MainText style={styles.fieldName}>{props.name}</MainText>}
      <View style={styles.inputWrapper}>
        <TextInput
          value={props.value}
          editable={props?.editable}
          style={[
            styles.input, 
            focus && styles.focusedInput,
            {paddingRight: props?.secure === true ? 55 : 15}
          ]}
          onChangeText={props.onChange}
          keyboardType={props?.type ? props.type : 'default'}
          placeholder={props?.placeholder}
          maxLength={props?.maxLength}
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry={!visible && props?.secure === true}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}/>
        { renderPasswordToggle() }
      </View>
      {props?.errorMessage && props.error && <MainText style={styles.errorMessage}>{props.errorMessage}</MainText>}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%'
  },
  inputWrapper: {
    position: 'relative'
  },
  visibilityIcon: {
    position: 'absolute',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    top: 5,
    right: 10
  },
  input: {
    width: '100%',
    height: 48,
    paddingLeft: 15,
    borderRadius: 8,
    fontFamily: primaryFont,
    borderWidth: 1,
    borderColor: colors.dark_gray
  },
  focusedInput: {
    borderColor: colors.black
  },
  fieldName: {
    fontSize: 16,
    marginBottom: 8
  },
  errorMessage: {
    color: colors.error,
    marginTop: 10,
    marginLeft: 5
  }
})

export default MainInput;