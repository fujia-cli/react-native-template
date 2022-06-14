import React, {FC, PropsWithChildren} from 'react';
import {ActivityIndicator, StyleSheet, View, ActivityIndicatorProps} from 'react-native';

interface Props extends ActivityIndicatorProps {
  loading: boolean;
}

export const Spin: FC<PropsWithChildren<Props>> = props => {
  const {children, loading = false, color = '#007fff', ...indicatorProps} = props;

  return (
    <>
      {!!loading && (
        <View style={styles.mask}>
          <ActivityIndicator color={color} {...indicatorProps} />
        </View>
      )}
      {children}
    </>
  );
};

const styles = StyleSheet.create({
  mask: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0 ,0, 0, 0.05)',
    justifyContent: 'center',
  },
});
