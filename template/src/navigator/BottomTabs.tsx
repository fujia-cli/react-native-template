import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from '@/screens/Home';
import {MineScreen} from '@/screens/Mine';
import {IconHome, IconMine} from '@/assets/icons';
import {useAppDispatch, useAppSelector} from '@/store/hooks';

import {getToken} from '@/utils/index';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const dispatch = useAppDispatch();

  return (
    <Tab.Navigator
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e74135',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({color, size}) => <IconHome color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Mine"
        component={MineScreen}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => <IconMine color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};
