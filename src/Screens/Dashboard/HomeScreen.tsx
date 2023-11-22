import React, {useEffect} from 'react';

import {View, Text} from 'react-native';
import {IMainNavPropTypes} from '../../Routes/RouteTypes';
import {SafeAreaView} from 'react-native-safe-area-context';
import APICall from '../../Utilities/APIs/APIRequest';
import Button from '../../Components/Core/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = (props: IMainNavPropTypes<'HomeScreen'>) => {
  const {navigation, route} = props;

  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };

  // const getMovie = async () => {
  //   await APICall('GET_MOVIE', {params: {page: 2}});
  // };

  // getMovie();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button label="clear data" onPress={clearAsyncStorage} />
    </View>
  );
};

export default HomeScreen;
