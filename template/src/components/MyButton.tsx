import React, {FC, ReactNode} from 'react';
import {
  Pressable,
  Text,
  PressableProps,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
  ColorValue,
} from 'react-native';

interface Props extends PressableProps {
  label: string;
  loading?: boolean;
  icon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  disabledStyle?: StyleProp<ViewStyle>;
  indicatorColor?: ColorValue;
  indicatorSize?: number | 'small' | 'large';
}

export const MyButton: FC<Props> = props => {
  const {
    label,
    loading,
    style,
    labelStyle,
    disabledStyle = styles.disabled,
    icon,
    indicatorColor,
    disabled,
    indicatorSize,
    ...pressableProps
  } = props;

  return (
    <Pressable
      {...pressableProps}
      disabled={disabled}
      style={[styles.container, style, disabled ? disabledStyle : null]}>
      {loading && (
        <ActivityIndicator color={indicatorColor} size={indicatorSize} style={styles.indicator} />
      )}
      <Text style={[styles.text, labelStyle]}>{label}</Text>
      {icon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  indicator: {
    marginRight: 6,
  },
  text: {
    fontSize: 16,
    paddingVertical: 12,
  },
  disabled: {
    backgroundColor: '#999',
  },
});
