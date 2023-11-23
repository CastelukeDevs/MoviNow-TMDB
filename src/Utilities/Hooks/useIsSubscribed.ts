import {useSelector} from 'react-redux';
import {RootStateType} from '../../Redux/Store';

export default (movieID: number) => {
  const subsList = useSelector(
    (state: RootStateType) => state.subscribe.movies,
  );

  if (subsList === null || subsList === undefined || subsList?.length < 1)
    return false;

  const findSubs = subsList.filter(item => item.id === movieID);
  return findSubs.length > 0;
};
