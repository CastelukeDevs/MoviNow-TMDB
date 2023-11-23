import React from 'react';
import {IMovie} from '../Types/MovieTypes';
import MovieHorizontalListItem from './MovieHorizontalListItem';
import {FlatList} from 'react-native';

type IMovieHorizontalListPropTypes = {
  item: IMovie[];
  onItemPress?: (movie: IMovie) => void;
};

const MovieHorizontalList = (props: IMovieHorizontalListPropTypes) => {
  const itemWidth = 150;
  const itemSpacing = 10;
  const itemHeight = 200;

  const movieList = props.item.slice(0, 10);

  return (
    <FlatList
      horizontal
      style={[{flex: 1}]}
      data={movieList}
      keyExtractor={(_, i) => i.toString()}
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
            onPress={() => props.onItemPress?.(item)}
          />
        );
      }}
    />
  );
};

export default MovieHorizontalList;
