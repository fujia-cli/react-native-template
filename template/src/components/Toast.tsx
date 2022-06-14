import React, {FC, ReactNode, useEffect, useState, useRef} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle, Text} from 'react-native';

import {IconInfo} from '@/assets/icons';

interface Props {
  icon?: ReactNode;
  visible: boolean;
  message: string;
  duration?: number;
  style?: StyleProp<ViewStyle>;
  onHide?: CallableFunction;
}

export const Toast: FC<Props> = props => {
  const {visible = false, message, icon, duration = 3000, onHide} = props;
  const [hide, setHide] = useState(false);
  const timerRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    if (visible) {
      timerRef.current = setTimeout(() => {
        setHide(true);
        onHide && onHide();
      }, duration);
    }
  }, [duration, onHide, visible]);

  useEffect(() => {
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, []);

  if (!visible || hide) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {icon ? icon : <IconInfo size={36} color="#fff" />}
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

Toast.displayName = 'Toast';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  message: {
    color: '#fff',
    marginTop: 12,
    fontSize: 16,
  },
});
