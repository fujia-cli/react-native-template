import React from 'react';
import {Text, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer, createNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';

import {UserAgreementScreen} from '@/screens/Account/ScreenAgreement';
import {LoginScreen} from '@/screens/Account/ScreenLogin';
import {PrivacyPolicyScreen} from '@/screens/Account/ScreenPrivacyPolicy';
import {RegisterScreen} from '@/screens/Account/ScreenRegister';
import {SearchScreen} from '@/screens/Search';

import {BottomTabs} from './BottomTabs';
import type {RootStackParamList} from './types';
import {BackButton} from '@/components/BackButton';

const navigationRef = createNavigationContainerRef();

export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const handleGoBack = () => {
    if (navigationRef.isReady()) {
      navigationRef.goBack();
    }
  };

  const renderTitle = (title: string) => {
    return <Text style={styles.title}>{title}</Text>;
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}>
        <Stack.Group>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="BottomTabs"
            component={BottomTabs}
          />

          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Search"
            component={SearchScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Register"
            component={RegisterScreen}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerBackVisible: false,
              headerLeft: () => <BackButton onPress={handleGoBack} />,
              headerTitle: () => renderTitle('用户协议'),
            }}
            name="UserAgreement"
            component={UserAgreementScreen}
          />

          <Stack.Screen
            options={{
              headerShown: true,
              headerBackVisible: false,
              headerLeft: () => <BackButton onPress={handleGoBack} />,
              headerTitle: () => renderTitle('隐私政策'),
            }}
            name="PrivacyPolicy"
            component={PrivacyPolicyScreen}
          />
        </Stack.Group>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: '#666',
  },
});
