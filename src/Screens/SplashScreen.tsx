import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMainNavPropTypes} from '../Routes/RouteTypes';
import {useDispatch, useSelector} from 'react-redux';
import {fetchGenres} from '../Redux/Actions/GenreAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../Components/Core/Button';
import {RootStateType} from '../Redux/Store';
import GlobalColor from '../Utilities/Styles/GlobalColor';
import Icon from '../Components/Core/Icon';
import {textStyle} from '../Utilities/Styles/GlobalStyle';

const SplashScreen = (props: IMainNavPropTypes<'SplashScreen'>) => {
  const dispatch = useDispatch<any>();
  const genre = useSelector((state: RootStateType) => state.genre);

  useEffect(() => {
    if (
      genre.genresList.length < 1 &&
      genre.isSuccess === null &&
      !genre.isLoading
    ) {
      dispatch(fetchGenres());
    }
    if (genre.isSuccess) {
      props.navigation.replace('HomeScreen');
    }

    return () => {};
  }, [genre]);

  return (
    <SafeAreaView style={styles.RootContainer}>
      <Icon name="videocam-outline" size={200} color={GlobalColor.accent} />
      <Text style={textStyle.Hero_Bold}>MoviNow</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  RootContainer: {
    flex: 1,
    backgroundColor: GlobalColor.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
