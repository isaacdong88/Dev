import "./App.css";
import Counter from "./components/Counter";
import CounterContext from "./contexts/CounterContext";

function App() {
  //Retrieve your context from the provider
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
