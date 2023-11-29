import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

const Splash = props => {
  const onTimerReached = async () => {
    props.navigation.replace('Landing');
  };

  useEffect(() => {
    let timer = setTimeout(onTimerReached, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <View style={{backgroundColor: 'red', flex: 1}} />
    </SafeAreaView>
  );
};

export default Splash;
