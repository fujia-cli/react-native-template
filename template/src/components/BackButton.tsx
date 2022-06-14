import React, {FC, ReactNode} from 'react';
import {Pressable} from 'react-native';
import {IconReturn} from '@/assets/icons';

interface Props {
  size?: number;
  color?: string | string[];
  icon?: ReactNode;
  onPress?: VoidFunction;
}

export const BackButton: FC<Props> = props => {
  const {size = 24, color = '#666', icon, onPress} = props;
  return (
    <Pressable hitSlop={16} onPress={onPress}>
      {icon ? icon : <IconReturn color={color} size={size} />}
    </Pressable>
  );
};
