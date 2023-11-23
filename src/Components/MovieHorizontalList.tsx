import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {IMovie} from '../Types/MovieTypes';
import {getImageUrl} from '../Utilities/APIs/ImageUtils';
import {textStyle} from '../Utilities/Styles/GlobalStyle';
import MovieHorizontalListItem from './MovieHorizontalListItem';

type IMovieHorizontalListPropTypes = {
  item: IMovie[];
};

const MovieHorizontalList = (props: IMovieHorizontalListPropTypes) => {
  const itemWidth = 150;
  const itemSpacing = 10;
  const itemHeight = 200;

  return (
    <FlatList
      horizontal
      style={[{flex: 1}]}
      data={props.item}
      keyExtractor={item => item.id.toString()}
      snapToInterval={itemWidth + itemSpacing}
      decelerationRate={0}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={16}
      renderItem={({item}) => {
        return (
          <MovieHorizontalListItem
            item={item}
            containerStyle={{width: itemWidth, marginRight: itemSpacing}}
            imageStyle={{
              width: itemWidth,
              height: itemHeight,
              borderRadius: 8,
              overflow: 'hidden',
            }}
          />
        );
      }}
    />
  );
};

export default MovieHorizontalList;

const styles = StyleSheet.create({});
