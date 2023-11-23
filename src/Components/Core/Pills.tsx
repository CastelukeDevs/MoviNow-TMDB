import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textStyle} from '../../Utilities/Styles/GlobalStyle';
import GlobalColor from '../../Utilities/Styles/GlobalColor';

type IPillsPropType = {
  label: string;
};
const Pills = (props: IPillsPropType) => {
  return (
    <View style={styles.Container}>
      <Text style={[textStyle.Title_Regular]}>{props.label}</Text>
    </View>
  );
};

export default Pills;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: GlobalColor.accent,
    borderRadius: 100,
    margin: 4,
  },
});
