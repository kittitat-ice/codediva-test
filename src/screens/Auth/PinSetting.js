import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import Dot from '../../components/common/Dot';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthReducer, setPin} from '../../redux/slices/AuthSlice';
import {PinCode, PinCodeT} from '@anhnch/react-native-pincode';

const PinSetting = props => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const pin = useSelector(selectAuthReducer);
  const [pinMode, setPinMode] = useState(PinCodeT.Modes.Set);

  const onSetPin = pin => {
    dispatch(setPin(pin));
    props.navigation.navigate('TouchIDSetting');
  };

  const enterAndSetStyle = {
    title: {
      color: 'black',
    },
    subTitle: {
      color: 'black',
    },
    pin: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'red',
      width: 14,
      height: 14,
      borderRadius: 14,
    },
    enteredPin: {
      backgroundColor: 'red',
      width: 14,
      height: 14,
      borderRadius: 14,
    },
    button: {borderWidth: 1, borderColor: 'red'},
    footer: {opacity: 0},
  };

  return (
    <SafeAreaView style={styles.container}>
      <PinCode
        pin={pin}
        options={{
          pinLength: 6,
        }}
        mode={pinMode}
        visible={true}
        textOptions={{
          set: {
            title: t('pinsetting_text1'),
            subTitle: '',
            repeat: t('pinsetting_text2'),
          },
        }}
        styles={{
          main: {
            ...StyleSheet.absoluteFillObject,
            zIndex: 99,
            backgroundColor: 'white',
          },
          enter: enterAndSetStyle,
          set: enterAndSetStyle,
        }}
        onSet={onSetPin}
      />
    </SafeAreaView>
  );
};

export default PinSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  body: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    rowGap: 12,
  },
  text1: {
    fontSize: 16,
  },
  dotContainer: {
    flexDirection: 'row',
    columnGap: 8,
  },
});
