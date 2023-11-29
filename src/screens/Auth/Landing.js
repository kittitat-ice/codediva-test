import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';

const Landing = props => {
  const {t, i18n} = useTranslation();

  const onLandPress = lang => {
    i18n.changeLanguage(lang);
    props.navigation.navigate('Consent');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>{t('landing_welcome1')}</Text>
          <Text style={styles.text2}>{t('landing_lang1')}</Text>
        </View>
        <View style={{flex: 1}} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onLandPress('en')}>
            <Text style={styles.buttonText}>{'English'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onLandPress('th')}>
            <Text style={styles.buttonText}>{'ไทย'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}} />
      </View>
    </SafeAreaView>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {flex: 1},
  body: {flex: 1, paddingHorizontal: 20},
  textContainer: {rowGap: 12, flex: 1, justifyContent: 'flex-end'},
  text1: {fontSize: 20, fontWeight: 'bold'},
  text2: {fontSize: 16},
  buttonContainer: {
    flex: 1,
    rowGap: 20,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
