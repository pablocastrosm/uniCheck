import React from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MainText from "./MainText";
import colors from "../../config/colors";
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';


function Header(props) {

  const navigation = useNavigation();
  const {t} = useTranslation();
  
  return (
    <View style={[styles.headerContainer, props.round && styles.roundBottomCorners]}>
      <SafeAreaView edges={['top', 'left', 'right']} style={styles.headerContent}>
        <View style={styles.iconsContainer}>
          { props.showBackButton &&
            <TouchableOpacity onPress={props.onBackButtonPress}>
              <AntIcon name='close' size={24} color={colors.white}/>
            </TouchableOpacity>
          }
        </View>
        <View>
          <MainText style={styles.titleText}>
            {props.title ? t(props.title) : ''}
          </MainText>
        </View>
        <View style={[styles.iconsContainer, styles.rightIconsContainer]}>
          {props?.rightButtons}
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.primary,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: colors.white,
    height: 50,
  },
  roundBottomCorners: {
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10
  },
  rightIconsContainer: {
    justifyContent: 'flex-end'
  },
  titleText: {
    fontSize: 17,
    color: colors.white
  },
});

export default Header;