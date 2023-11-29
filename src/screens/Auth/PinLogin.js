import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {useSelector} from 'react-redux';
import {selectAuthReducer} from '../../redux/slices/AuthSlice';
import {PinCode, PinCodeT} from '@anhnch/react-native-pincode';

const PinLogin = props => {
  const {t} = useTranslation();
  const rnBiometrics = new ReactNativeBiometrics();
  const {pin} = useSelector(selectAuthReducer);
  const [pinMode, setPinMode] = useState(PinCodeT.Modes.Enter);

  const setupBio = async () => {
    const {available, biometryType} = await rnBiometrics.isSensorAvailable({
      allowDeviceCredentials: true,
    });

    if (available && biometryType === BiometryTypes.TouchID) {
      console.log('TouchID is supported');
    } else if (available && biometryType === BiometryTypes.FaceID) {
      console.log('FaceID is supported');
    } else if (available && biometryType === BiometryTypes.Biometrics) {
      console.log('Biometrics is supported');
    } else {
      console.log('Biometrics not supported');
    }

    try {
      const result = await rnBiometrics.simplePrompt({
        promptMessage: 'biometric prompt',
      });
      console.log(result);
      if (result.success) {
        console.log('successful biometrics provided');
        // props.navigation.navigate('Home');
      } else {
        console.log('user cancelled biometric prompt');
      }
    } catch (error) {
      console.error('biometrics failed ->', error);
    }
  };

  useEffect(() => {
    setupBio();

    return () => {};
  }, []);

  const onEnterPin = pin => {
    // props.navigation.navigate('Home');
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
          enter: {
            title: t('pinlogin_text1'),
            subTitle: '',
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
        onEnter={onEnterPin}
      />
    </SafeAreaView>
  );
};

export default PinLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
