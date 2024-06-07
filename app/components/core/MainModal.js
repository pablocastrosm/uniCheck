import React from 'react'
import { StyleSheet, View, Modal, TouchableOpacity } from 'react-native'
import colors from '../../config/colors'
import MainText from './MainText'
import Cross from '../../assets/icons/cross-icon.svg';
import MainButton from './MainButton';

export default function MainModal(props) {

  return (
    <Modal
      visible={props.visible}
      supportedOrientations={['landscape', 'portrait']}
      animationType='fade'
      transparent>
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={props.onClose}>
            <Cross></Cross>
          </TouchableOpacity>
          <MainText style={[styles.titleText, styles.text]} type='bold'>{props.title}</MainText>
          {props.message && <MainText style={styles.text}>{props.message}</MainText>}
          <View style={styles.buttonContainer}>
            { props?.cancelText &&
              <MainButton
                style={styles.doubleButton}
                onPress={props.onClose}
                type='tertiary'>
                {props.cancelText}
              </MainButton>
            }
            <MainButton
              style={props?.cancelText ? styles.doubleButton : styles.soloButton}
              onPress={props.onAccept}>
              {props.acceptText}
            </MainButton>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(217, 217, 217, 0.5)'
  },
  modalContainer: {
    width: '87%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 20,
    zIndex: 100,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 7
  },
  text: {
    textAlign: 'center',
    margin: 5
  },
  titleText: {
    marginTop: 15,
    fontSize: 20,
  },
  soloButton: {
    width: '90%'
  },
  doubleButton: {
    margin: 10,
    width: '40%'
  }
})