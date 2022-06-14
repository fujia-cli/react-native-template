import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {store} from '@/store/index';
import {Navigator} from '@/navigator/index';

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <Navigator />
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
