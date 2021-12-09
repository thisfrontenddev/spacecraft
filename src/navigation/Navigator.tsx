import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import type { Starship } from "../hooks/useStarships";
import { LoginScreen } from "../screens/LoginScreen";
import { PilotScreen } from "../screens/PilotScreen";
import { StarshipDetailScreen } from "../screens/StarshipDetailScreen";
import { StarshipFeedScreen } from "../screens/StarshipFeedScreen";
import { TermsScreen } from "../screens/TermsScreen";
import { AppRoutes } from "./AppRoutes";

export type RootStackParamList = {
  [AppRoutes.LOGIN_SCREEN]: undefined;
  [AppRoutes.TERMS_SCREEN]: undefined;
  [AppRoutes.STARSHIP_FEED_SCREEN]: undefined;
  [AppRoutes.STARSHIP_DETAIL_SCREEN]: { starship: Starship };
  [AppRoutes.PILOT_SCREEN]: { pilots: [] };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={AppRoutes.LOGIN_SCREEN}
      >
        <Stack.Screen name={AppRoutes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen
          name={AppRoutes.TERMS_SCREEN}
          component={TermsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name={AppRoutes.STARSHIP_FEED_SCREEN}
          component={StarshipFeedScreen}
        />
        <Stack.Screen
          name={AppRoutes.STARSHIP_DETAIL_SCREEN}
          component={StarshipDetailScreen}
          options={{ presentation: "fullScreenModal" }}
        />
        <Stack.Screen name={AppRoutes.PILOT_SCREEN} component={PilotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
