import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { useIsConnected } from "react-native-offline";
import { Headline } from "react-native-paper";
import Offline from "./Offline";

type Props = {
  title: string;
};

const AppLayout: React.FC<Props> = ({ children, title }) => {
  const isConnected = useIsConnected();
  if (isConnected) return <Offline />;

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView nestedScrollEnabled={true}>
        <Headline style={styles.headline}>{title}</Headline>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#f8f8f8",
  },
  headline: {
    height: "auto",
    fontSize: 40,
    lineHeight: 0,
    fontWeight: "bold",
    padding: 20,
  },
});

export default AppLayout;
