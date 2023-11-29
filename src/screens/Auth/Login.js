import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useTranslation} from 'react-i18next';

const Login = props => {
  const {t} = useTranslation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [saveLoginInfo, setSaveLoginInfo] = React.useState(false);

  const onUsernameChange = text => {
    // do regex test
    setUsername(text);
  };
  const onPasswordChange = text => {
    // do regex test
    setPassword(text);
  };

  const onLoginPress = () => {
    props.navigation.navigate('SendOtp');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 2}} />
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <TextInput
            value={username}
            placeholder={t('login_input1_placeholder')}
            onChangeText={onUsernameChange}
            style={styles.input}
          />
          <TextInput
            value={password}
            placeholder={t('login_input2_placeholder')}
            secureTextEntry
            onChangeText={onPasswordChange}
            style={styles.input}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              columnGap: 8,
              alignItems: 'center',
            }}
            onPress={() => setSaveLoginInfo(val => !val)}>
            <View style={styles.checkbox}>
              {saveLoginInfo && <View style={styles.chackboxIconPlaceholder} />}
            </View>
            <Text>{t('login_checkbox1_text')}</Text>
          </TouchableOpacity>
          <View style={{flex: 1}} />
          <TouchableOpacity
            onPress={() => console.log('forget password pressed')}>
            <Text>{t('login_button1_resetpassword')}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onLoginPress} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>{t('login_button2_login')}</Text>
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', alignItems: 'center', columnGap: 12}}>
          <View style={styles.line} />
          <Text style={styles.textNoAccount}>{t('login_text1')}</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity
          onPress={() => console.log('on register pressed')}
          style={styles.buttonSignup}>
          <Text style={styles.buttonSignupText}>{t('login_button3')}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {flex: 1},
  body: {
    paddingHorizontal: 20,
    rowGap: 20,
  },
  input: {
    fontSize: 18,
    padding: 0,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  inputContainer: {
    rowGap: 32,
  },
  checkbox: {
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chackboxIconPlaceholder: {
    backgroundColor: 'red',
    borderRadius: 18,
    width: '80%',
    height: '80%',
  },
  loginButton: {
    backgroundColor: 'red',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    color: 'white',
  },
  buttonSignup: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
  },
  buttonSignupText: {
    fontSize: 18,
    color: 'red',
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: '#AAA',
  },
  textNoAccount: {
    color: '#aaa',
    fontSize: 16,
  },
});
