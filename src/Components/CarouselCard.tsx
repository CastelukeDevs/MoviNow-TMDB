import {
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
import {addSubscribe, removeSubscribe} from '../Redux/Reducers/DefaultReducer';

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
            //   paddingBottom: 20 + DotActiveSize,
            paddingHorizontal: 8,
          },
          prop.textContainerStyle,
        ]}
        colors={['#00000000', '#00000000', '#000000']}>
        <SafeAreaView style={{flex: 1, paddingTop: 30, alignItems: 'flex-end'}}>
          <IconButton
            name={isSubscribed ? 'bookmark' : 'bookmark-outline'}
            onPress={toggleSubscribe}
            mode="contained"
          />
        </SafeAreaView>
        <TouchableOpacity onPress={prop.onPress}>
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="star-outline" color={GlobalColor.light} size={16} />
              <Text style={[textStyle.Title_Bold]}>
                {prop.item.vote_average}
              </Text>
            </View>
            <Text style={[textStyle.Hero_Bold]}>{prop.item.title}</Text>
          </>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({});
