import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Parent from "./Parent";
import CheeseContext from "./context/CheeseContext";
import MangoContext from "./context/MangoContext";
import { Provider } from "./context/CounterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <MangoContext.Provider value={"mango"}>
      <CheeseContext.Provider value={"cheddar"}>
        <Parent />
      </CheeseContext.Provider>
    </MangoContext.Provider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
