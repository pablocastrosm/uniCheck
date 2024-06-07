import React from 'react';
import { StyleSheet, View, Platform, TouchableWithoutFeedback } from 'react-native';

import { Portal } from 'react-native-portalize';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import colors from '../../config/colors';
import { useOrientation } from '../../hooks/orientation';


/*
  ------------  WARNING!!! -------------

  This component does not handle orientation changes very well, avoid using it
  on apps that support landscape orientation for a better user experience.

*/

function MainBottomSheet(props) {

  const orientation = useOrientation();
  const bottomSheetRef = React.useRef(null);
  const HIGHEST_SNAP_POINT = Platform.OS === 'ios' ? '98%' : '100%';

  React.useEffect(() => {
    if(bottomSheetRef.current && props.isOpen) bottomSheetRef.current.snapToIndex(0);
    else bottomSheetRef?.current?.close();
  }, [props.isOpen])

  React.useEffect(() => {
    if(!props.isOpen) bottomSheetRef?.current?.close();
  }, [orientation])

  return (
    <Portal>
      <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      enablePanDownToClose
      overDragResistanceFactor={0.5}
      backdropComponent={({ style }) => {
        if(props.isOpen) {
          return(
            <TouchableWithoutFeedback onPress={() => props.onClose()}>
              <View style={[style, styles.backdropBackground]} />
            </TouchableWithoutFeedback>
          );
        }
        return null;
      }}
      handleIndicatorStyle={styles.handle}
      snapPoints={props.snapPoints ? props.snapPoints.concat([HIGHEST_SNAP_POINT]) : [HIGHEST_SNAP_POINT]}
      onClose={props.onClose}>
        <BottomSheetScrollView 
        style={[styles.content, !props.hideHeader && styles.contentPadding]} 
        contentContainerStyle={styles.scrollContent}
        bounces={false}>
          {props.children}
        </BottomSheetScrollView>
      </BottomSheet>
    </Portal>
  );
}

const styles = StyleSheet.create({
  handle: {
    backgroundColor: colors.dark_gray
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  headerTitle: {
    color: colors.primary,
    fontSize: 16
  },
  content: {
    paddingVertical: 5,
  },
  scrollContent: {
    paddingBottom: 20
  },
  contentPadding: {
    paddingHorizontal: 17,
  },
  backdropBackground: { 
    backgroundColor: colors.black_opacity 
  }
})


export default MainBottomSheet;