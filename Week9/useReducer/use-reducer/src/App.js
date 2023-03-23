import { useReducer } from "react";
import "./App.css";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Apple INCREMENT":
        //state below is the object and counter:state.counter is the key value pair
        return { ...state, counter: state.counter + 1, apple: state.apple + 1 };

      case "Apple DECREMENT":
        return { ...state, counter: state.counter - 1, apple: state.apple - 1 };

      case "Orange INCREMEMT":
        return {
          ...state,
          counter: state.counter + 1,
          orange: state.orange + 1,
        };

      case "Orange DECREMENT":
        return {
          ...state,
          counter: state.counter - 1,
          orange: state.orange - 1,
        };

      default:
        return state;
    }
  };
  //An action is a plain js object that has a type and may or may not have a payload, variable name can be different

  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    apple: 0,
    orange: 0,
  });
  return (
    <div className="App">
      <h2>Total Items {state.counter}</h2>
      <h3>Total Apple {state.apple}</h3>
      <h3>Total Orange {state.orange}</h3>
      <button
        onClick={() => {
          return dispatch({ type: "Apple INCREMENT" });
        }}
      >
        Apple Increment
      </button>
      <button
        onClick={() => {
          return dispatch({ type: "Apple DECREMENT" });
        }}
      >
        Apple Decrement
      </button>
      <button
        onClick={() => {
          return dispatch({ type: "Orange INCREMEMT" });
        }}
      >
        Orange Increment
      </button>
      <button
        onClick={() => {
          return dispatch({ type: "Orange DECREMENT" });
        }}
      >
        Orange Decrement
      </button>
    </div>
  );
}

export default App;
