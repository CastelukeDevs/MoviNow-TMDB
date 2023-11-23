// import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {IMovie} from '../Types/MovieTypes';

export type IMainNav = {
  SplashScreen: undefined;
  MovieDetail: IMovie | undefined;
  HomeScreen: undefined;
};

export type IMainNavPropTypes<T extends keyof IMainNav> = StackScreenProps<
  IMainNav,
  T
>;

export type IDashNav = {
  HomeScreen: undefined;
  AboutScreen: undefined;
  DeveloperScreen2: {def: boolean; testProp?: string};
};
// export type IDashNavPropTypes<T extends keyof IDashNav> = DrawerScreenProps<
//   IDashNav,
//   T
// >;

// export type IDashNavPropTypes<T extends keyof IDashNav> = CompositeScreenProps<
//   DrawerScreenProps<IDashNav, T>,
//   IMainNavPropTypes<keyof IMainNav>
// >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IMainNav {}
  }
}
