import React from "react";
import { NetworkProvider } from "react-native-offline";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navigator } from "./src/navigation/Navigator";
import { StorybookUIRoot } from "./storybook";

const SHOW_STORYBOOK = process.env.SHOW_STORYBOOK || false;
const queryClient = new QueryClient();

const App = () => {
  if (SHOW_STORYBOOK && __DEV__) {
    return <StorybookUIRoot />;
  }

  return (
    <NetworkProvider>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </NetworkProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
