import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Button from '../../Components/Core/Button';
import {IMainNavPropTypes} from '../../Routes/RouteTypes';
import GlobalColor from '../../Utilities/Styles/GlobalColor';
import {textStyle} from '../../Utilities/Styles/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../../Redux/Store';
import {getImageUrl} from '../../Utilities/APIs/ImageUtils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import moment from 'moment';
import IconButton from '../../Components/Core/IconButton';
import MovieVerticalListCard from '../../Components/MovieVerticalListCard';
import {IMovie} from '../../Types/MovieTypes';
import {fetchDiscoverNext} from '../../Redux/Actions/DiscoverAction';
import {
  fetchNowPlaying,
  fetchNowPlayingNext,
} from '../../Redux/Actions/NowPlayingAction';
import {fetchUpcomingNext} from '../../Redux/Actions/UpcomingAction';

const MovieListsScreen = (props: IMainNavPropTypes<'MovieListScreen'>) => {
  const screenType = props.route.params.type;

  const discover = useSelector((state: RootStateType) => state.discover);
  const upcoming = useSelector((state: RootStateType) => state.upcoming);
  const nowPlaying = useSelector((state: RootStateType) => state.nowPlaying);
  const subscribe = useSelector((state: RootStateType) => state.subscribe);

  const getMovieList = () => {
    switch (screenType) {
      case 'Discover':
        return discover;
      case 'Now-Playing':
        return nowPlaying;
      case 'Upcoming':
        return upcoming;
      case 'Bookmark':
        return subscribe;

      default:
        return discover;
    }
  };

  const dispatch = useDispatch<any>();

  const onEndReachedHandler = () => {
    if (screenType === 'Bookmark') return;

    if (!getMovieList().isLoading) {
      switch (screenType) {
        case 'Discover':
          dispatch(fetchDiscoverNext());
          break;
        case 'Now-Playing':
          dispatch(fetchNowPlayingNext());
          break;
        case 'Upcoming':
          dispatch(fetchUpcomingNext());
          break;

        default:
          break;
      }
    }
  };

  const onItemPressHandler = (movie: IMovie) => {
    props.navigation.navigate('MovieDetailScreen', movie);
  };

  const onBackHandler = () => {
    props.navigation.goBack();
  };

  return (
    <>
      <SafeAreaView style={styles.StickyButtonRootContainer}>
        <View style={styles.StickyButtonContainer}>
          <Button
            label="back"
            icon={{name: 'chevron-back-outline'}}
            onPress={onBackHandler}
          />
          <View style={styles.AlignTextCenter}>
            <Text style={[textStyle.H2_Bold]}>{screenType}</Text>
          </View>
        </View>
      </SafeAreaView>
      <FlatList
        style={{backgroundColor: GlobalColor.dark}}
        data={getMovieList().movies}
        keyExtractor={(_, i) => i.toString()}
        onEndReached={onEndReachedHandler}
        renderItem={({item}) => (
          <MovieVerticalListCard
            item={item}
            onPress={() => onItemPressHandler(item)}
          />
        )}
      />
    </>
  );
};

export default MovieListsScreen;

const styles = StyleSheet.create({
  StickyButtonRootContainer: {
    paddingTop: Platform.OS === 'android' ? 32 : 8,
    // position: 'absolute',
    top: 0,
    width: '100%',
    left: 0,
    backgroundColor: GlobalColor.dark,
    justifyContent: 'center',
  },
  StickyButtonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 8,
  },
  AlignTextCenter: {justifyContent: 'center'},
});
