import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {textStyle} from '../../Utilities/Styles/GlobalStyle';
import GlobalColor from '../../Utilities/Styles/GlobalColor';
import Icon, {IIconProps} from './Icon';

type IButtonProp = {
  label: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  mode?: 'contained' | 'text';
  icon?: IIconProps;
};

//TODO: add disable button function

/**
 *
 * @param label string
 * @param onPress function
 * Simple button
 */
const Button = (props: IButtonProp) => {
  const currentMode = props.mode || 'contained';

  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[
        currentMode === 'contained' && {
          backgroundColor: GlobalColor.accent,
          borderRadius: 8,
        },
        {
          padding: 12,
        },
        props.icon && {flexDirection: 'row', justifyContent: 'flex-end'},
        props.containerStyle,
      ]}>
      {props.icon && <Icon {...props.icon} color={GlobalColor.light} />}
      {props.label && (
        <Text
          style={[
            textStyle.SubTitle_Bold,
            {textAlign: 'center', textAlignVertical: 'center'},
            {
              color:
                currentMode === 'contained'
                  ? GlobalColor.light
                  : GlobalColor.accent,

              // backgroundColor: 'red',
            },
            props.labelStyle,
          ]}>
          {props.label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
