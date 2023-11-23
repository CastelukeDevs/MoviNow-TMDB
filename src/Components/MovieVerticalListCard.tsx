import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {getImageUrl} from '../Utilities/APIs/ImageUtils';
import moment from 'moment';
import {textStyle} from '../Utilities/Styles/GlobalStyle';
import {IMovie} from '../Types/MovieTypes';

const {width: wWidth} = Dimensions.get('window');

const itemWidth = 150;
const itemSpacing = 10;
const itemHeight = 200;

type IMovieVerticalListCardPropType = {item: IMovie; onPress: () => void};
const MovieVerticalListCard = (prop: IMovieVerticalListCardPropType) => {
  return (
    <View style={styles.RootContainer}>
      <TouchableOpacity style={styles.ImageContainer} onPress={prop.onPress}>
        <Image
          style={StyleSheet.absoluteFillObject}
          source={{uri: getImageUrl(prop.item.poster_path)}}
        />
      </TouchableOpacity>
      <View style={styles.TextContainer}>
        <Text style={textStyle.H2_Bold}>{prop.item.title}</Text>
        <Text style={[textStyle.H3_Regular, {marginBottom: 12}]}>
          ({moment(prop.item.release_date).year()})
        </Text>
      </View>
    </View>
  );
};

export default MovieVerticalListCard;

const styles = StyleSheet.create({
  RootContainer: {
    padding: itemSpacing,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: wWidth,
    marginTop: 12,
  },
  ImageContainer: {
    height: itemHeight,
    width: itemWidth,
    borderRadius: 8,
    overflow: 'hidden',
  },
  TextContainer: {marginLeft: 12, flex: 1},
});
