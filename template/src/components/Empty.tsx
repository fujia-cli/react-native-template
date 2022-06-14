import React, {FC} from 'react';
import {View, StyleSheet, Text, ViewStyle} from 'react-native';
import EmptySvg from '@/assets/images/empty.svg';

interface Props {
  title?: string;
  desc?: string;
  style?: ViewStyle;
}

export const Empty: FC<Props> = props => {
  const {title, desc, style = {}} = props;

  return (
    <View style={[styles.container, style]}>
      <EmptySvg style={styles.cover} />
      {title && <Text style={styles.title}>{title}</Text>}
      {desc && <Text style={styles.title}>{desc}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cover: {
    marginTop: '18%',
  },
  title: {
    marginTop: 16,
    fontSize: 16,
    color: '#999',
  },
  desc: {
    marginTop: 8,
    color: '#666',
  },
});
