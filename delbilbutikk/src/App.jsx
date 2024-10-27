import "./output.css";
import List from "./components/ListUp";
import CreateNewList from "./components/CreateList";
import { CarPartContextProvider } from "./components/CarPartContext"; // Oppdater med kontekstprovider
import Header from "./components/header";

function App() {
  return (
    <CarPartContextProvider>
      <div className="space-y-2 mb-8">
        <Header />
        <CreateNewList />
        <List />
      </div>
    </CarPartContextProvider>
  );
}

export default App;
