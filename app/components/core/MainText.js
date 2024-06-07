import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { primaryFont, primaryFontBold, primaryFontLight, primaryFontMedium } from '../../config/fonts';
import colors from '../../config/colors';

const MainText = (props) => {
  return (
    <Text style={[
      styles.text, 
      props.type && styles[`${props.type}Text`],
      props.style
    ]}
    allowFontScaling={false}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: primaryFont,
    color: colors.text_primary
  },
  lightText: {
    fontFamily: primaryFontLight,
  },
  mediumText: {
    fontFamily: primaryFontMedium,
  },
  boldText: {
    fontFamily: primaryFontBold,
  }
})

export default MainText;