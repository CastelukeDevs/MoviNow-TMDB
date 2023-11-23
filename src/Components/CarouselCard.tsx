import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {getImageUrl} from '../Utilities/APIs/ImageUtils';
import {IMovie} from '../Types/MovieTypes';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconButton from './Core/IconButton';
import Icon from './Core/Icon';
import GlobalColor from '../Utilities/Styles/GlobalColor';
import {textStyle} from '../Utilities/Styles/GlobalStyle';
import useIsSubscribed from '../Utilities/Hooks/useIsSubscribed';
import {useDispatch} from 'react-redux';
import GenreList from './GenreList';
import {
  addSubscribe,
  removeSubscribe,
} from '../Redux/Reducers/SubscribeReducer';

type ICarouselCardPropTypes = {
  width: number;
  item: IMovie;
  textContainerStyle?: ViewStyle;
  onPress?: () => void;
};
const CarouselCard = (prop: ICarouselCardPropTypes) => {
  const dispatch = useDispatch<any>();
  const isSubscribed = useIsSubscribed(prop.item.id);

  const toggleSubscribe = () => {
    if (isSubscribed) return dispatch(removeSubscribe(prop.item.id));
    dispatch(addSubscribe(prop.item));
  };

  return (
    <ImageBackground
      style={{width: prop.width, flex: 1}}
      source={{
        uri: getImageUrl(prop.item.poster_path),
      }}>
      <LinearGradient
        style={[
          {
            flex: 1,
            paddingHorizontal: 8,
          },
          prop.textContainerStyle,
        ]}
        colors={['#00000000', '#00000000', GlobalColor.dark]}>
        <SafeAreaView style={styles.SafeAreaView}>
          <IconButton
            name={isSubscribed ? 'bookmark' : 'bookmark-outline'}
            onPress={toggleSubscribe}
            mode="contained"
          />
        </SafeAreaView>
        <TouchableOpacity
          onPress={prop.onPress}
          disabled={typeof prop.onPress === 'undefined'}>
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="star" color={GlobalColor.accent} size={16} />
              <Text style={[textStyle.Title_Bold, {color: GlobalColor.accent}]}>
                {Math.round(prop.item.vote_average)}/10
              </Text>
            </View>
            <Text style={[textStyle.Hero_Bold]}>{prop.item.title}</Text>
            <GenreList item={prop.item.genre_ids} />
          </>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1, paddingTop: 12, alignItems: 'flex-end'},
});
