import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { Headline } from "react-native-paper";

const Header: React.FC<ViewProps> = ({ children }) => {
  return (
    <View style={[styles.headline]}>
      <Headline style={styles.text}>{children}</Headline>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headline: {
    flexGrow: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "blue",
  },
  text: {
    flexGrow: 1,
    textAlign: "center",
    color: "#FFF",
  },
});
