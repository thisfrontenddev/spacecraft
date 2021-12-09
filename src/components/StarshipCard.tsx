import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import type { Starship } from "../hooks/useStarships";

type Props = {
  starship: Starship;
} & Partial<React.ComponentProps<typeof Card>>;
export const StarshipCard: React.FC<Props> = ({ starship, ...props }) => {
  return (
    <Card style={styles.card} {...props}>
      <Card.Title title={starship.name} subtitle={starship.model} />
      <Card.Content>
        <Paragraph>Crew: {starship.crew}</Paragraph>
        <Paragraph>HD rating: {starship.hyperdrive_rating}</Paragraph>
        <Title>{starship.cost_in_credits} credits</Title>
      </Card.Content>
      <Card.Actions>
        <Button>Buy this spaceship</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 20,
  },
});
