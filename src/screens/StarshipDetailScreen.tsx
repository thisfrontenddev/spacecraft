import type { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { AppLayout } from "../components/AppLayout";
import { StarshipCard } from "../components/StarshipCard";
import type { AppRoutes } from "../navigation/AppRoutes";
import type { RootStackParamList } from "../navigation/Navigator";

type StarshipDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  AppRoutes.STARSHIP_DETAIL_SCREEN
>;

export const StarshipDetailScreen: React.FC = () => {
  const { name, params } = useRoute<StarshipDetailScreenRouteProp>();
  return (
    <AppLayout title={name}>
      <StarshipCard starship={params.starship} />
    </AppLayout>
  );
};
