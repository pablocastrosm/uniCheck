import React from 'react';

import { StyleSheet, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import MainText from './MainText';
import colors from '../../config/colors';
import { getDateString } from '../../utils/formatters';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import IonIcon from 'react-native-vector-icons/Ionicons';


function MainDatepicker(props) {

  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  return (
    <View style={props.style}>
      {props.name && <MainText style={styles.fieldName}>{props.name}</MainText>}
      <TouchableOpacity 
      style={[
        styles.container, 
        {borderColor: open ? colors.black : colors.medium_light_gray}, 
        props.disabled && styles.disabled]} 
      onPress={() => setOpen(true)}
      disabled={props.disabled}>
        <View style={styles.textWrapper}>
          { props.value ? 
            <MainText>{getDateString(props.value, false)}</MainText> :
            <MainText style={styles.placeholder}>DD/MM/AAAA</MainText>
          }
        </View>
        <IonIcon name='calendar' size={22} color={colors.medium_light_gray}/>
      </TouchableOpacity>
      <DatePicker
        modal
        mode={props.mode ?? 'date'}
        open={open}
        locale={i18next.language}
        maximumDate={props.max}
        minimumDate={props.min}
        date={props.value ? new Date(props.value) : new Date()}
        confirmText={t('BUTTONS.ACCEPT')}
        cancelText={t('BUTTONS.CANCEL')}
        onConfirm={(date) => {
          setOpen(false);
          props.onSelectDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        title={t('DATETIME.CHOOSE_DATE')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 11,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  textWrapper: {
    flex: 1,
  },
  disabled: {
    opacity: 0.4
  },
  fieldName: {
    fontSize: 16,
    marginBottom: 8
  },
})

export default MainDatepicker;