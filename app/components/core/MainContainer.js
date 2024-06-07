import React from 'react';

import { StyleSheet } from 'react-native';
import globalStyles from "../../config/globalStyles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';


function MainContainer(props) {

  const getEdges = () => {
    if(props.noEdges) return [];
    if(props.edges) return props.edges;
    return ['top', 'bottom', 'left', 'right'];
  }

  return (
    <SafeAreaView 
    style={globalStyles.container} 
    edges={getEdges()}>
      <KeyboardAwareScrollView 
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={globalStyles.scrollContent}
      style={[globalStyles.container, props?.style]}>
        {props.children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
})

export default MainContainer;