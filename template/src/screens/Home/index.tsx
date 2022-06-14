import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

import {Empty} from '@/components/Empty';

export const HomeScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Empty title='Thanks to use "stage"' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
