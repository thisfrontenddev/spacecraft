import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";
type Props = {
  starship: Record<
    "name" | "model" | "crew" | "hyperdrive_rating" | "cost_in_credits",
    string | number | undefined
  >;
};
const StarshipCard: React.FC<Props> = ({ starship }) => {
  return (
    <Card style={styles.card}>
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

export default StarshipCard;

const styles = StyleSheet.create({
  card: {
    margin: 20,
  },
});
