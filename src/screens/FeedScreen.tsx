import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { AppLayout } from "../components/AppLayout";
import { StarshipCard } from "../components/StarshipCard";
import { useStarships } from "../hooks/useStarships";

export const FeedScreen = () => {
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

  return (
    <AppLayout title="Starships">
      <FlatList
        data={data?.results}
        renderItem={({ item }) => <StarshipCard starship={item} />}
        keyExtractor={(item) => item.name}
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
