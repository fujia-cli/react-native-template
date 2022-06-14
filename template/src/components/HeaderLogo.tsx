import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Logo from '@/assets/images/logo.svg';

interface Props {
  title?: string;
}

export const HeaderLogo: FC<Props> = props => {
  const {title = 'ALL FROM LOVE'} = props;

  return (
    <View style={styles.container}>
      <Logo width={96} height={96} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 16,
    color: '#666',
  },
});
