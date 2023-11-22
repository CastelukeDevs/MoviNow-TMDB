import React from 'react';

import {View, Text} from 'react-native';
import {IMainNavPropTypes} from '../../Routes/RouteTypes';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = (props: IMainNavPropTypes<'HomeScreen'>) => {
  const {navigation, route} = props;

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
