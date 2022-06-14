import uuid from 'react-native-uuid';
import DeviceInfo from 'react-native-device-info';
import {Dimensions, StatusBar, Platform} from 'react-native';

import {reduxStorage, storage} from './storage';
import {IDENTITY_ID_KEY, TOKEN_KEY} from './constants';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const percentToWidth = (percent: number) => Math.round(percent * viewportWidth);

const percentToHeight = (percent: number) => Math.round(percent * viewportHeight);

const mockAsync = (timeout = 3000) =>
  new Promise(resolve => {
    setTimeout(resolve, timeout);
  });

const statusBarHeight = StatusBar.currentHeight;

export {viewportWidth, viewportHeight, statusBarHeight, percentToWidth, percentToHeight, mockAsync};

export const genOrGetIdentityId = async () => {
  // unique user labeling
  let identityId = '';

  const hasIdentityId = storage.contains(IDENTITY_ID_KEY);

  if (hasIdentityId) {
    identityId = await reduxStorage.getItem(IDENTITY_ID_KEY)!;
  } else {
    // user open the app first time.
    identityId = uuid.v4() as string;
    await reduxStorage.setItem(IDENTITY_ID_KEY, identityId);
  }

  return identityId;
};

interface AppDeviceInfo {
  identityId: string;
  systemName: string;
  systemVersion: string;
  brand: string;
  appName: string;
  appVersion: string;
  [index: string]: any;
}
export const getDeviceInfo = async () => {
  // const androidIdPromise = DeviceInfo.getAndroidId();

  const deviceInfo = {} as AppDeviceInfo;
  deviceInfo.identityId = await genOrGetIdentityId();
  deviceInfo.systemName = DeviceInfo.getSystemName();
  deviceInfo.systemVersion = DeviceInfo.getSystemVersion();
  deviceInfo.brand = DeviceInfo.getBrand();
  deviceInfo.appName = DeviceInfo.getApplicationName();
  deviceInfo.appVersion = DeviceInfo.getVersion();

  return deviceInfo;
};

export const isAndroid = Platform.OS === 'android' ? true : false;

export const isIOS = Platform.OS === 'ios' ? true : false;

export const setToken = async (token: string) => {
  try {
    await reduxStorage.setItem(TOKEN_KEY, token);
  } catch (err) {
    console.error(err);
  }
};

export const delToken = async () => {
  try {
    await reduxStorage.removeItem(TOKEN_KEY);
  } catch (err) {
    console.error(err);
  }
};

export const getToken = () => storage.getString(TOKEN_KEY);
