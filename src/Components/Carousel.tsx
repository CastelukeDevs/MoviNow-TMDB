import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import {IMovie} from '../Types/MovieTypes';
import GlobalColor from '../Utilities/Styles/GlobalColor';
import CarouselCard from './CarouselCard';

const {width: wWidth, height: wHeight} = Dimensions.get('window');

const DotSize = 8;
const DotSpacing = 8;
const DotActiveSize = DotSize + DotSpacing;
const ContainerHorizontalSpacing = wWidth / 2 - (DotSize + DotSpacing) * 2.5;

type ICarouselPropTypes = {
  item: IMovie[];
  maxItem?: number;
  onItemPress?: (movie: IMovie) => void;
};

const Carousel = (prop: ICarouselPropTypes) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const moviesCarouselData = prop.item.slice(0, prop.maxItem || 5);

  return (
    <View style={{flex: 1}}>
      <Animated.FlatList
        horizontal
        style={[{zIndex: 1, height: wHeight, flex: 1}]}
        data={moviesCarouselData}
        keyExtractor={(_, i) => i.toString()}
        snapToInterval={wWidth}
        decelerationRate={0}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => (
          <CarouselCard
            item={item}
            width={wWidth}
            textContainerStyle={{
              paddingBottom: 30 + DotActiveSize,
            }}
            onPress={() => {
              prop.onItemPress?.(item);
            }}
          />
        )}
      />
      <View style={styles.IndicatorContainer}>
        {moviesCarouselData.map((_, index) => (
          <View style={styles.IndicatorDot} key={index.toString()} />
        ))}
        <Animated.View
          style={[
            styles.IndicatorActive,
            {
              transform: [
                {
                  translateX: Animated.divide(scrollX, wWidth).interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, DotActiveSize],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  IndicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 2,
    bottom: 20,

    left: ContainerHorizontalSpacing,
  },
  IndicatorDot: {
    width: DotSize,
    height: DotSize,
    borderRadius: DotSize,
    marginLeft: DotSpacing,
    backgroundColor: GlobalColor.accent,
  },
  IndicatorActive: {
    width: DotActiveSize,
    height: DotActiveSize,
    borderRadius: DotActiveSize,
    borderWidth: 2,
    borderColor: GlobalColor.accent,
    position: 'absolute',
    bottom: -DotSize / 2,
    left: DotSize / 2,
    // bottom: 20,
  },
  TextColor: {color: GlobalColor.light},
});
