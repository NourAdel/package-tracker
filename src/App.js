import { AppStateProvider } from "./Context/AppStateContext";
import { PackageProvider } from "./Context/PackageContext";
import HomeScreen from "./Screens/HomeScreen";
function App() {
  return (
    <PackageProvider>
      <AppStateProvider>
        <HomeScreen/>
      </AppStateProvider>
    </PackageProvider>
  );
}

export default App;
