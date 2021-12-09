import { useQuery } from "react-query";

export type Starship = Record<
  "name" | "model" | "crew" | "hyperdrive_rating" | "cost_in_credits",
  string | number | undefined
>;
export type Starships = Starship[];

async function fetchData() {
  const result = await fetch("https://swapi.dev/api/starships/");
  const json = await result.json();
  return json;
}

export function useStarships() {
  return useQuery(["starships"], fetchData);
}
