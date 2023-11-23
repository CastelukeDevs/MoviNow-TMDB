import React, {useEffect} from 'react';

import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {IMainNavPropTypes, MovieListScreenType} from '../../Routes/RouteTypes';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../../Redux/Store';
import GlobalColor from '../../Utilities/Styles/GlobalColor';
import Carousel from '../../Components/Carousel';
import MovieHorizontalList from '../../Components/MovieHorizontalList';
import SectionHeader from '../../Components/SectionHeader';
import {IMovie} from '../../Types/MovieTypes';
import {fetchDiscover} from '../../Redux/Actions/DiscoverAction';
import {fetchUpcoming} from '../../Redux/Actions/UpcomingAction';
import {fetchNowPlaying} from '../../Redux/Actions/NowPlayingAction';
import {fetchPopular} from '../../Redux/Actions/PopularAction';
import {textStyle} from '../../Utilities/Styles/GlobalStyle';

const HomeScreen = (props: IMainNavPropTypes<'HomeScreen'>) => {
  const {navigation, route} = props;

  const popular = useSelector((state: RootStateType) => state.popular.movies);
  const discover = useSelector((state: RootStateType) => state.discover.movies);
  const nowPlaying = useSelector(
    (state: RootStateType) => state.nowPlaying.movies,
  );
  const upcoming = useSelector((state: RootStateType) => state.upcoming.movies);
  const subscribed = useSelector(
    (state: RootStateType) => state.subscribe.movies,
  );
  // const subscribed = [];
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (popular.length < 1) dispatch(fetchPopular());
    if (discover.length < 1) dispatch(fetchDiscover());
    if (nowPlaying.length < 1) dispatch(fetchNowPlaying());
    if (upcoming.length < 1) dispatch(fetchUpcoming());
  }, []);

  const nowPlayingSeeMoreHandler = (screenType: MovieListScreenType) => {
    navigation.navigate('MovieListScreen', {type: screenType});
  };
  const movieSelectedHandler = (movie: IMovie) => {
    navigation.navigate('MovieDetailScreen', movie);
  };

  const onItemPressHandler = (movie: IMovie) => {
    navigation.navigate('MovieDetailScreen', movie);
  };

  return (
    <View style={styles.RootContainer}>
      <ScrollView horizontal={false}>
        <Carousel item={popular} onItemPress={movieSelectedHandler} />
        <SectionHeader
          label="Now Playing"
          onSeeMorePress={() => nowPlayingSeeMoreHandler('Now-Playing')}
        />
        <MovieHorizontalList
          item={nowPlaying}
          onItemPress={onItemPressHandler}
        />
        <SectionHeader
          label="Upcoming"
          onSeeMorePress={() => nowPlayingSeeMoreHandler('Upcoming')}
        />
        <MovieHorizontalList item={upcoming} onItemPress={onItemPressHandler} />
        <SectionHeader
          label="Discover"
          onSeeMorePress={() => nowPlayingSeeMoreHandler('Discover')}
        />
        <MovieHorizontalList item={discover} onItemPress={onItemPressHandler} />
        {subscribed.length > 0 && (
          <>
            <SectionHeader
              label="Bookmarked"
              onSeeMorePress={() => nowPlayingSeeMoreHandler('Bookmark')}
            />
            <MovieHorizontalList
              item={subscribed}
              onItemPress={onItemPressHandler}
            />
          </>
        )}
        <Text style={[textStyle.Content_Bold, {textAlign: 'center'}]}>
          Rizki Abdillah
        </Text>
        <Text style={[textStyle.Content_Regular, {textAlign: 'center'}]}>
          Casteluke Creative Labs @2023
        </Text>
        <Text style={[textStyle.Content_Regular, {textAlign: 'center'}]}>
          rizki.casteluke@gmail.com
        </Text>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  RootContainer: {flex: 1, backgroundColor: GlobalColor.dark},
});
