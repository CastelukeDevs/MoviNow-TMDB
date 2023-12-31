import React, {useRef} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import {IMainNav} from './RouteTypes';

import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/Dashboard/HomeScreen';
import MovieDetailScreen from '../Screens/Dashboard/MovieDetailScreen';
import MovieListsScreen from '../Screens/Dashboard/MovieListsScreen';

const Stack = createStackNavigator<IMainNav>();

const defaultScreenOptions: StackNavigationOptions = {headerShown: false};

const Route = () => {
  const routeNameRef = useRef<string | null>();
  const navigationRef = createNavigationContainerRef<IMainNav>();

  const onReadyHandler = () => {
    if (navigationRef.current === null) {
      return;
    }

    routeNameRef.current = navigationRef.current.getCurrentRoute()?.name;
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} onReady={onReadyHandler}>
        <Stack.Navigator screenOptions={defaultScreenOptions}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="MovieDetailScreen"
            component={MovieDetailScreen}
          />
          <Stack.Screen name="MovieListScreen" component={MovieListsScreen} />
          {/* <Stack.Group screenOptions={{presentation: 'modal'}}></Stack.Group> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Route;
