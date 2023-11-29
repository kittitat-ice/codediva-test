import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useTranslation} from 'react-i18next';

const randomNumber = (len = 9) => {
  let num = '0';
  const number = '0123456789';
  for (let i = 0; i < len; i++) {
    const index = Math.floor(Math.random() * 10);
    num += number[index];
  }
  return num;
};

const SendOtp = props => {
  const {t} = useTranslation();
  const [phone, _] = React.useState(randomNumber());
  const [formatPhoneNumber, setFormatPhoneNumber] = React.useState(
    phone.slice(0, 3) + '-XXX-' + phone.slice(6),
  );

  const onSendPress = () => {
    props.navigation.navigate('SubmitOtp', {phone: phone});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View
          style={{
            backgroundColor: 'red',
            borderRadius: 64,
            width: 64,
            height: 64,
          }}
        />
        <Text style={styles.text1}>{t('sendotp_text1')}</Text>
        <Text style={styles.text2}>{formatPhoneNumber}</Text>
        <TouchableOpacity onPress={onSendPress} style={styles.button}>
          <Text style={styles.buttonText}>{t('sendotp_button1')}</Text>
        </TouchableOpacity>
        <Text style={styles.textContact}>{t('sendotp_contact')}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SendOtp;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 32,
    padding: 20,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 12,
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  textContact: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
});
