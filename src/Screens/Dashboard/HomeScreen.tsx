import React, {useEffect} from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {IMainNavPropTypes} from '../../Routes/RouteTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {RootStateType} from '../../Redux/Store';
import GlobalColor from '../../Utilities/Styles/GlobalColor';
import Carousel from '../../Components/Carousel';
import {textStyle} from '../../Utilities/Styles/GlobalStyle';
import {getImageUrl} from '../../Utilities/APIs/ImageUtils';
import MovieHorizontalList from '../../Components/MovieHorizontalList';
import SectionHeader from '../../Components/SectionHeader';

const HomeScreen = (props: IMainNavPropTypes<'HomeScreen'>) => {
  const {navigation, route} = props;

  const discover = useSelector((state: RootStateType) => state.discover.movies);
  const genre = useSelector((state: RootStateType) => state.default.genresList);

  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };

  const nowPlayingSeeMoreHandler = () => {};

  return (
    <View style={{flex: 1, backgroundColor: GlobalColor.dark}}>
      <ScrollView horizontal={false}>
        <Carousel item={discover} />
        <SectionHeader
          label="Now Playing"
          onSeeMorePress={nowPlayingSeeMoreHandler}
        />
        <MovieHorizontalList item={discover} />
        <SectionHeader
          label="Upcoming"
          onSeeMorePress={nowPlayingSeeMoreHandler}
        />
        <MovieHorizontalList item={discover} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
