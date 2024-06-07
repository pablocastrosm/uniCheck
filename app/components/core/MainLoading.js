import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import colors from '../../config/colors';

function MainLoading(props) {
  return (
    <View style={[
    props.centered && styles.centered,
    props.fullscreen && styles.fullscreen, 
    props.style]}>
      <ActivityIndicator 
      size={props.small ? 'small' : 'large'}
      color={props.color ?? colors.primary}>
      </ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  fullscreen: {
    backgroundColor: colors.white_opacity,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999
  }
})

export default MainLoading;