import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {IMainNavPropTypes} from '../../Routes/RouteTypes';
import {getImageUrl} from '../../Utilities/APIs/ImageUtils';
import GlobalColor from '../../Utilities/Styles/GlobalColor';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from '../../Components/Carousel';
import {textStyle} from '../../Utilities/Styles/GlobalStyle';
import moment from 'moment';
import IconButton from '../../Components/Core/IconButton';
import useIsSubscribed from '../../Utilities/Hooks/useIsSubscribed';
import {useDispatch} from 'react-redux';
import Button from '../../Components/Core/Button';
import GenreList from '../../Components/GenreList';
import {
  addSubscribe,
  removeSubscribe,
} from '../../Redux/Reducers/SubscribeReducer';

const {width: wWidth, height: wHeight} = Dimensions.get('window');

const MovieDetailScreen = (props: IMainNavPropTypes<'MovieDetailScreen'>) => {
  const movie = props.route.params;
  const isSubscribed = useIsSubscribed(movie.id);
  const dispatch = useDispatch<any>();

  const toggleSubscribe = () => {
    if (isSubscribed) return dispatch(removeSubscribe(movie.id));
    dispatch(addSubscribe(movie));
  };

  const onBackHandler = () => {
    props.navigation.goBack();
  };

  return (
    <>
      <ScrollView style={styles.RootContainer}>
        <View style={styles.HeaderContainer}>
          <Image
            source={{uri: getImageUrl(movie.poster_path)}}
            style={StyleSheet.absoluteFillObject}
          />
          <LinearGradient
            style={StyleSheet.absoluteFillObject}
            colors={['#00000000', '#00000000', GlobalColor.dark]}
          />
        </View>

        <View style={{paddingHorizontal: 12}}>
          <Text style={textStyle.H1_Bold}>{movie.title}</Text>
          <Text style={[textStyle.H2_Regular, {marginBottom: 12}]}>
            ({moment(movie.release_date).year()})
          </Text>
          <GenreList item={movie.genre_ids} />
          <Text style={[textStyle.Title_Bold, {marginTop: 12}]}>Synopsis:</Text>
          <Text style={[textStyle.SubTitle_Regular, {marginTop: 12}]}>
            {movie.overview}
          </Text>
          <Text style={[textStyle.Title_Bold, {marginTop: 12}]}>
            Rating: {movie.vote_average} - {movie.vote_count}
          </Text>
          <View style={styles.Separator} />
          <Button
            label={isSubscribed ? 'Remove Bookmark' : 'Bookmark'}
            onPress={toggleSubscribe}
            mode={isSubscribed ? 'text' : 'contained'}
          />
          <View style={styles.Separator} />
        </View>
      </ScrollView>
      <SafeAreaView style={styles.StickyButtonRootContainer}>
        <View style={styles.StickyButtonContainer}>
          <Button
            label="back"
            icon={{name: 'chevron-back-outline'}}
            onPress={onBackHandler}
          />
          <IconButton
            name={isSubscribed ? 'bookmark' : 'bookmark-outline'}
            onPress={toggleSubscribe}
            mode="contained"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  RootContainer: {
    flex: 1,
    backgroundColor: GlobalColor.dark,
  },
  HeaderContainer: {
    height: (wHeight / 4) * 3,
    backgroundColor: 'red',
  },
  Separator: {
    height: 40,
  },
  StickyButtonRootContainer: {
    paddingTop: Platform.OS === 'android' ? 37 : 12,
    position: 'absolute',
    top: 0,
    width: '100%',
    left: 0,
  },
  StickyButtonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 8,
  },
});
