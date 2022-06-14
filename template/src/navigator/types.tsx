import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";

export type RootStackParamList = {
  BottomTabs: undefined;
  Search: undefined;
  Login: undefined;
  Register: undefined;
  UserAgreement: undefined;
  PrivacyPolicy: undefined;
  NotFound: undefined;
};

export type StackRouteNames = keyof RootStackParamList;

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

export type BottomTabParamList = {
  Home: undefined;
  Mine: undefined;
};

export type MyBottomTabScreenProps<T extends keyof BottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
