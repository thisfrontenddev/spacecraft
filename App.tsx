import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import FeedScreen from "./src/screens/FeedScreen";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <LoginScreen />
      <TermsScreen /> */}
      <FeedScreen />
    </QueryClientProvider>
  );
};

export default App;
