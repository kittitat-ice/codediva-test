import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useTranslation} from 'react-i18next';

const TouchIDSetting = props => {
  const {t} = useTranslation();

  const onSkipPress = () => {
    props.navigation.navigate('PinLogin');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{rowGap: 20}}>
          <Text style={styles.text1}>{t('touchid_text1')}</Text>
          <Text style={styles.text2}>{t('touchid_text2')}</Text>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 80,
              height: 80,
              borderRadius: 80,
            }}
          />
        </View>
        <View style={{rowGap: 20}}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.button1Text}>{t('touchid_button1')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSkipPress} style={styles.button2}>
            <Text style={styles.button2Text}>{t('touchid_button2')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TouchIDSetting;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 16,
    fontWeight: '200',
  },
  button1: {
    backgroundColor: 'red',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12,
  },
  button1Text: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  button2: {
    // backgroundColor: 'red',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5000,
  },
  button1Tex2: {
    fontSize: 16,
  },
});
