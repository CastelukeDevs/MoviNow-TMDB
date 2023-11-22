import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMainNavPropTypes} from '../Routes/RouteTypes';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchDiscover,
  fetchDiscoverNext,
} from '../Redux/Actions/DiscoverAction';
import {fetchGenres} from '../Redux/Actions/DefaultAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../Components/Core/Button';
import {RootStateType} from '../Redux/Store';

const SplashScreen = (props: IMainNavPropTypes<'SplashScreen'>) => {
  const dispatch = useDispatch<any>();
  const genre = useSelector((state: RootStateType) => state.default);
  const discover = useSelector((state: RootStateType) => state.discover);

  useEffect(() => {
    prepareData();

    if (genre.isSuccess && discover.isSuccess) {
      console.log('ready to move');
      props.navigation.navigate('HomeScreen');
    }
    return () => {};
  }, [genre, discover]);

  const prepareData = () => {
    if (genre.genresList.length < 1 && !genre.isSuccess)
      return dispatch(fetchGenres());
    if (discover.movies.length < 1 && !discover.isSuccess)
      return dispatch(fetchDiscover());
  };

  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };

  return (
    <SafeAreaView>
      <View>
        <Text>SplashScreen</Text>
        <Button onPress={clearAsyncStorage} label="clear storage" />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
