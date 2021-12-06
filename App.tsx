import React from "react";
import { NetworkProvider } from "react-native-offline";
import { QueryClient, QueryClientProvider } from "react-query";
import FeedScreen from "./src/screens/FeedScreen";

const queryClient = new QueryClient();
const App = () => {
  return (
    <NetworkProvider>
      <QueryClientProvider client={queryClient}>
        {/* <LoginScreen />
        <TermsScreen /> */}
        <FeedScreen />
      </QueryClientProvider>
    </NetworkProvider>
  );
};

export default App;
