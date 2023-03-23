import logo from "./logo.svg";
import "./App.css";
import Child from "./components/Child";
import Counter from "./components/Counter";

//Lesson on useContext

function Parent() {
  const cheese = "Gouda";
  return (
    <div className="parent">
      <h2>Parent Component</h2>
      <Child cheese={cheese} />
      <Counter />
    </div>
  );
}

export default Parent;
