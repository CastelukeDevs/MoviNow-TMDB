import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {IMovie} from '../Types/MovieTypes';
import {getImageUrl} from '../Utilities/APIs/ImageUtils';
import {textStyle} from '../Utilities/Styles/GlobalStyle';
import IconButton from './Core/IconButton';
import useIsSubscribed from '../Utilities/Hooks/useIsSubscribed';

type MovieHorizontalListItemPropTypes = {
  item: IMovie;
  containerStyle?: ViewStyle;
  imageStyle?: ViewStyle;
  onPress?: () => void;
};
const MovieHorizontalListItem = (prop: MovieHorizontalListItemPropTypes) => {
  const isSubscribed = useIsSubscribed(prop.item.id);

  return (
    <View style={prop.containerStyle}>
      <TouchableOpacity style={prop.imageStyle} onPress={prop.onPress}>
        <Image
          style={StyleSheet.absoluteFillObject}
          source={{uri: getImageUrl(prop.item.poster_path)}}
        />
        <IconButton
          name={isSubscribed ? 'bookmark' : 'bookmark-outline'}
          onPress={() => {}}
          mode="icon"
        />
      </TouchableOpacity>
      <Text style={textStyle.Title_Regular}>{prop.item.original_title}</Text>
    </View>
  );
};

export default MovieHorizontalListItem;

const styles = StyleSheet.create({});
