import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Platform,
  Pressable,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {removeNonNumber} from '../../utils/function';
import {useDispatch} from 'react-redux';
import {setIsLogin} from '../../redux/slices/AuthSlice';

const SubmitOtp = props => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {phone} = props.route.params;
  const [otpText, setOtpText] = useState('');
  const otpLength = 4;
  const otpInput = useRef(null);
  const [formatPhoneNumber, setFormatPhoneNumber] = useState(
    phone.slice(0, 3) + '-XXX-' + phone.slice(6),
  );

  const onOtpTextChange = text => {
    const num = removeNonNumber(text);
    setOtpText(num);
  };

  const submitOtp = () => {
    dispatch(setIsLogin(true));
  };

  useEffect(() => {
    if (otpText.length === otpLength) {
      submitOtp(otpText);
    }
    return () => {};
  }, [otpText]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.topSection}>
            <Text style={styles.textHeader}>{t('submitotp_text1')}</Text>
            <Text style={styles.textInstruction}>{t('submitotp_text2')}</Text>
            <Text style={[styles.textInstruction, {fontWeight: 'bold'}]}>
              {formatPhoneNumber}
            </Text>
            <Text style={styles.refCode}>{t('ref_code')}</Text>
            <View
              style={{
                marginVertical: 12,
              }}>
              <Pressable
                onPress={() => otpInput.current.focus()}
                style={{
                  justifyContent: 'center',
                  columnGap: 16,
                  flexDirection: 'row',
                }}>
                <View
                  style={[
                    styles.newOtpInput,
                    otpText.length === 0 && {
                      borderColor: 'green',
                    },
                  ]}>
                  <Text style={styles.otp} maxFontSizeMultiplier={1}>
                    {otpText[0]}
                  </Text>
                </View>
                <View
                  style={[
                    styles.newOtpInput,
                    otpText.length === 1 && {
                      borderColor: 'green',
                    },
                  ]}>
                  <Text style={styles.otp} maxFontSizeMultiplier={1}>
                    {otpText[1]}
                  </Text>
                </View>
                <View
                  style={[
                    styles.newOtpInput,
                    otpText.length === 2 && {
                      borderColor: 'green',
                    },
                  ]}>
                  <Text style={styles.otp} maxFontSizeMultiplier={1}>
                    {otpText[2]}
                  </Text>
                </View>
                <View
                  style={[
                    styles.newOtpInput,
                    otpText.length >= 3 && {
                      borderColor: 'green',
                    },
                  ]}>
                  <Text style={styles.otp} maxFontSizeMultiplier={1}>
                    {otpText[3]}
                  </Text>
                </View>
              </Pressable>
              <TextInput
                ref={otpInput}
                maxLength={4}
                value={otpText}
                keyboardType={'numeric'}
                autoComplete={
                  Platform.OS === 'android' ? 'sms-otp' : 'one-time-code'
                }
                style={{
                  // backgroundColor: 'red',
                  width: 0,
                  height: 0,
                  bottom: 0,
                  padding: 1, // android padding 0 can't focus and no keyboard
                }}
                onChangeText={onOtpTextChange}
              />
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 20, rowGap: 8}}>
            <Text style={{fontSize: 16}}>{t('submitotp_text3')}</Text>
            <TouchableOpacity onPress={() => console.log('resend pressed')}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {t('submitotp_button1')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubmitOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 20,
  },
  body: {
    flex: 1,
    marginHorizontal: 36,
  },
  textHeader: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
  },
  textInstruction: {
    fontSize: 16,
    // textAlign: 'center',
    marginTop: 12,
  },
  refCode: {
    fontSize: 14,
    // textAlign: 'center',
  },
  topSection: {
    flex: 1,
    // alignItems: 'center',
    paddingTop: 20,
  },
  otpInput: {
    minHeight: 50,
    height: 'auto',
    backgroundColor: 'white',
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 8,
    paddingTop: 6,
    paddingBottom: 6,
    color: 'black',
    fontSize: 24,
  },
  buttonContainer: {
    alignItems: 'center',
    marginHorizontal: 36,
  },
  newOtpInput: {
    height: 48,
    width: 48,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otp: {
    fontSize: 24,
  },
});
