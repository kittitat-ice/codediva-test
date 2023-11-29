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

const Consent = props => {
  const {t, i18n} = useTranslation();

  const onAcceptPress = () => {
    props.navigation.navigate('Login');
  };
  const onNegativePress = () => {
    console.log('onNegativePress');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.placeholderIcon} />
          <Text style={styles.header}>{t('consent_head1')}</Text>
        </View>
        <ScrollView style={styles.body}>
          <View style={{width: 50, height: 3000}} />
          <Text>{'test'}</Text>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={onNegativePress}
            style={[styles.buttonBase, styles.buttonNegative]}>
            <Text style={styles.buttonTextNegative}>{t('consent_no')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onAcceptPress}
            style={[styles.buttonBase, styles.buttonPositive]}>
            <Text style={styles.buttonTextPositive}>{t('consent_yes')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Consent;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', padding: 20},
  body: {flex: 1, marginEnd: -20},
  headerContainer: {flexDirection: 'row', columnGap: 8, alignItems: 'center'},
  header: {fontSize: 20, fontWeight: 'bold'},
  placeholderIcon: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: 'red',
  },
  buttonContainer: {
    flexDirection: 'row',
    columnGap: 12,
  },
  buttonBase: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'red',
    paddingVertical: 12,
    alignItems: 'center',
    flex: 1,
  },
  buttonNegative: {
    backgroundColor: 'white',
  },
  buttonPositive: {
    backgroundColor: 'red',
  },
  buttonTextNegative: {
    color: 'red',
    fontSize: 16,
  },
  buttonTextPositive: {
    color: 'white',
    fontSize: 16,
  },
});
