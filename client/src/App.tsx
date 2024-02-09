import RootLayout from "./Layout/RootLayout";
import ContextProvider from "./providers/ContextProvider";
import RoutesProvider from "./providers/RoutesProvider";

const App = () => {
  return (
    <ContextProvider>
      <RoutesProvider>
        <RootLayout />
      </RoutesProvider>
    </ContextProvider>
  );
};

export default App;
