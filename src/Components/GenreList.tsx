import {View} from 'react-native';
import React from 'react';
import {IGenre} from '../Types/MovieTypes';
import {useSelector} from 'react-redux';
import {RootStateType} from '../Redux/Store';
import Pills from './Core/Pills';

type IGenreListPropType = {
  item: number[];
};
const GenreList = (prop: IGenreListPropType) => {
  const genreList = useSelector(
    (state: RootStateType) => state.genre.genresList,
  );
  const genre: IGenre[] = [];
  prop.item.forEach(id => {
    const genreIndex = genreList.findIndex(item => item.id === id);
    genre.push(genreList[genreIndex]);
  });

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {genre.map((item, index) => (
        <Pills key={index} label={item.name} />
      ))}
    </View>
  );
};

export default GenreList;
