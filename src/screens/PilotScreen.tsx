import type { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { AppLayout } from "../components/AppLayout";
import type { AppRoutes } from "../navigation/AppRoutes";
import type { RootStackParamList } from "../navigation/Navigator";

type StarshipDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  AppRoutes.STARSHIP_DETAIL_SCREEN
>;

export const PilotScreen: React.FC = () => {
  const { name, params } = useRoute<StarshipDetailScreenRouteProp>();
  return (
    <AppLayout title={name}>
      <Text>Pilot screen</Text>
    </AppLayout>
  );
};
