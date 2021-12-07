import React from "react";
import { NetworkProvider } from "react-native-offline";
import { QueryClient, QueryClientProvider } from "react-query";
import { FeedScreen } from "./src/screens/FeedScreen";
import { StorybookUIRoot } from "./storybook";

const SHOW_STORYBOOK = true;
const queryClient = new QueryClient();

const App = () => {
  if (SHOW_STORYBOOK && __DEV__) {
    return <StorybookUIRoot />;
  }

  return (
    <NetworkProvider>
      <QueryClientProvider client={queryClient}>
        {/* <LoginScreen /> */}
        {/* <TermsScreen /> */}
        <FeedScreen />
      </QueryClientProvider>
    </NetworkProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
