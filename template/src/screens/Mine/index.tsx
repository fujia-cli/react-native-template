import React from 'react';
import {Text, View, StyleSheet, Pressable, Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import type {MyBottomTabScreenProps, StackRouteNames} from '@/navigator/types';
import {IconStar, IconInfo, IconEmpty, IconCreation, IconRead} from '@/assets/icons/index';
import {useAppSelector} from '@/store/hooks';
import {FocusAwareStatusBar} from '@/components/FocusAwareStatusBar';
// import {delToken} from '@/utils/index';

const DEFAULT_SIGNATURE = '因为相信 所以看见';

export const MineScreen = () => {
  const navigation = useNavigation<MyBottomTabScreenProps<'Mine'>['navigation']>();

  const handleLinkScreen = (screenName: StackRouteNames) => {
    return () => {
      navigation.navigate(screenName);
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar backgroundColor="#007fff" barStyle="light-content" />
      <View style={styles.ornamental} />
      <View style={styles.header}>
        <Pressable onPress={handleLinkScreen('Login')}>
          <View style={styles.avatarOccupy}>
            <IconRead size={40} color="#007fff" />
          </View>
          <Text style={styles.loginText}>点击登录</Text>
        </Pressable>
        <Text style={styles.slogan}>ALL FROM LOVE</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ornamental: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 128,
    backgroundColor: '#007fff',
  },
  header: {
    marginHorizontal: 24,
    marginTop: 56,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    borderColor: '#ddd',
    alignItems: 'center',
    paddingBottom: 48,
    backgroundColor: '#fff',
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    marginTop: -32,
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  avatarOccupy: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -32,
    width: 64,
    height: 64,
    borderRadius: 24,
    backgroundColor: '#f5f9f9',
  },
  loginText: {
    marginTop: 8,
    fontSize: 16,
    color: '#333',
  },
  slogan: {
    marginTop: 8,
    color: '#696969',
  },
  profile: {
    alignItems: 'center',
    marginTop: 8,
  },
  nickname: {
    fontSize: 16,
    color: '#666',
  },
  signature: {
    marginTop: 8,
    color: '#2a3a4a',
  },
  main: {
    marginTop: 36,
    paddingHorizontal: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
  },
  gridIcon: {
    padding: 6,
    borderRadius: 18,
    backgroundColor: '#f5f5f5',
  },
  gridItem: {
    alignItems: 'center',
    width: '25%',
  },
  gridItemText: {
    marginTop: 8,
    color: '#333',
  },
});
