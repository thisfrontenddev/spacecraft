import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LoginScreen } from "../screens/LoginScreen";
import { TermsScreen } from "../screens/TermsScreen";
import { AppRoutes } from "./AppRoutes";

export type RootStackParamList = {
  [AppRoutes.LOGIN_SCREEN]: undefined;
  [AppRoutes.TERMS_SCREEN]: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: "modal",
        }}
      >
        <Stack.Screen name={AppRoutes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={AppRoutes.TERMS_SCREEN} component={TermsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
