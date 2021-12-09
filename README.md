# Starship

> A _draft_ application created while attending [David Leuiliette (@flexbox)](https://davidl.fr/)'s **Road to React Native** workshop.

This app is built with React Native with the Expo CLI, allowing for a quick
feedback loop, and an easy to deploy application through OTA updates.

## The stack

- `react-native` and `expo` as a baseline for the app
- `eslint` with `eslint-config-react-native-wcandillon` as a base set of rules
- `react-query` as a data fetching/update/caching tool for API requests
- `react-navigation` as a navigation handler
- `react-paper` for rapid prototyping
- `storybook` for making sure that components behave properly when
  decontextualized

## Getting started

Pretty simple, just install dependencies and launch Metro bundler.

```bash
yarn install && yarn start
```
