import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMainNavPropTypes} from '../Routes/RouteTypes';

const SplashScreen = (props: IMainNavPropTypes<'SplashScreen'>) => {
  const splashScreenDelay = 5000;
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('HomeScreen');
    }, splashScreenDelay);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>SplashScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
