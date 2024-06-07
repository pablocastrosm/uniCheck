import React from 'react';

import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { primaryFont } from '../../config/fonts';
import DropDownPicker from 'react-native-dropdown-picker';


function MainSelect(props) {

  const [open, setOpen] = React.useState(false);

  return (
    <DropDownPicker
      listMode={props.listMode ?? 'MODAL'}
      searchable={props.searchable}
      zIndex={props.zIndex}
      zIndexInverse={props.zIndexInverse}
      open={open}
      disabled={props.disabled}
      loading={!props.items || props.items.length === 0}
      value={props.value}
      multiple={props.multiple}
      items={props.items}
      setOpen={setOpen}
      showArrowIcon={props.showArrowIcon}
      searchTextInputStyle={styles.searchInput}
      placeholder={props.placeholder}
      placeholderStyle={styles.placeholder}
      style={[styles.dropdown, {borderColor: open ? colors.black : colors.light_gray}, props.style]}
      onSelectItem={(item) => { props.onSelect(item) }}
      modalContentContainerStyle={styles.modalContainer}
      textStyle={styles.text}
    />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    width: '100%',
    height: 48,
    paddingLeft: 15,
    borderRadius: 5,
    fontFamily: primaryFont,
    borderWidth: 1
  },
  placeholder: {
    color: colors.light_gray,
    fontFamily: primaryFont,
    fontSize: 16
  },
  text: {
   fontSize: 16
  },
  modalContainer: {
    margin: 10
  },
  searchInput: {
    height: 45, 
    fontSize: 16, 
    borderColor: colors.light_gray, 
    borderRadius: 5
  }
})

export default MainSelect;