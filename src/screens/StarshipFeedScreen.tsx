import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { AppLayout } from "../components/AppLayout";
import { StarshipCard } from "../components/StarshipCard";
import type { Starship, Starships } from "../hooks/useStarships";
import { useStarships } from "../hooks/useStarships";
import { AppRoutes } from "../navigation/AppRoutes";
import type { RootStackParamList } from "../navigation/Navigator";

type StarshipFeedScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  AppRoutes.STARSHIP_FEED_SCREEN
>;

export const StarshipFeedScreen = () => {
  const navigation = useNavigation<StarshipFeedScreenNavigationProp>();
  const { data, isLoading, isError } = useStarships();

  if (isError) {
    return (
      <SafeAreaView>
        <Text>An error occurred, please try again later</Text>
      </SafeAreaView>
    );
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator animating={true} color={Colors.black} size="large" />
      </SafeAreaView>
    );
  }

  const handlePress = (starship: Starship) => () =>
    navigation.navigate(AppRoutes.STARSHIP_DETAIL_SCREEN, { starship });

  return (
    <AppLayout title="Starships">
      <FlatList
        data={data?.results as Starships}
        renderItem={({ item: starship }) => (
          <StarshipCard onPress={handlePress(starship)} starship={starship} />
        )}
        keyExtractor={(starship) => starship.name as string}
      />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
