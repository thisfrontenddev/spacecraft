import React from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Headline } from "react-native-paper";
import StarshipCard from "../components/StarshipCard";
import { useStarships } from "../hooks/useStarships";

const FeedScreen = () => {
  const { data, isLoading, isError } = useStarships();

  // if (isError) return "An error occured, please try again later";
  // if (isLoading) return "Loading...";

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Headline>Starships</Headline>
      <FlatList
        data={data?.results}
        renderItem={({ item }) => <StarshipCard starship={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#f8f8f8",
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default FeedScreen;
