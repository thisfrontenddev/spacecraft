import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useIsConnected } from "react-native-offline";
import { ActivityIndicator, Colors } from "react-native-paper";

const Offline = () => {
  // Use the useIsConnected hook
  const isConnected = useIsConnected();

  return (
    <SafeAreaView style={styles.root}>
      <ActivityIndicator animating={true} color={Colors.black} size="large" />
      {isConnected && (
        <View style={styles.container}>
          <Text style={styles.message}>Offline, trying again...</Text>
          <ActivityIndicator animating={true} color={styles.message.color} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Offline;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    padding: 20,
    marginHorizontal: 20,
    position: "absolute",
    top: 55,
    width: "90%",
    borderRadius: 10,
    backgroundColor: Colors.red100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  message: {
    color: Colors.red800,
  },
});
