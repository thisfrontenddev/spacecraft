import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

storiesOf("Card", module).add("default", () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Card>
      <Card.Content>
        <Title>Do you like this exercice?</Title>
        <Paragraph>
          Component Driven Developement makes me feel happy because it's easy to
          debug
        </Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    </Card>
  </View>
));
