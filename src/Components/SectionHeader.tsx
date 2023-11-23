import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textStyle} from '../Utilities/Styles/GlobalStyle';
import GlobalColor from '../Utilities/Styles/GlobalColor';
import Button from './Core/Button';

type ISectionHeaderPropTypes = {
  label: string;
  onSeeMorePress: () => void;
};
const SectionHeader = (props: ISectionHeaderPropTypes) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
      }}>
      <Text style={[textStyle.H1_Bold, {flex: 1}]}>{props.label}</Text>
      {typeof props.onSeeMorePress === 'function' && (
        <Button label="See more" onPress={props.onSeeMorePress} mode="text" />
      )}
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({});
