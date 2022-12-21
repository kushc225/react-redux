import "./App.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const App = () => {
  const { a } = useSelector((state) => state.increment);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({
      type: "incrementNum",
    });
  };
  const decrement = () => {
    dispatch({
      type: "decrementNum",
    });
  };
  const divider = () => {
    dispatch({
      type: "devideNum",
    });
  };
  const mult = () => {
    dispatch({
      type: "multiplyNum",
    });
  };
  return (
    <>
      <h1>{a}</h1>
      <button
        onClick={increment}
        style={{
          backgroundColor: "blue",
          color: "white",
          marginLeft: "10px",
          padding: "10px",
        }}
      >
        increment
      </button>
      <button
        onClick={decrement}
        style={{
          backgroundColor: "blue",
          color: "white",
          marginLeft: "10px",
          padding: "10px",
        }}
      >
        decrement
      </button>
      <button
        onClick={divider}
        style={{
          backgroundColor: "blue",
          color: "white",
          marginLeft: "10px",
          padding: "10px",
        }}
      >
        divide
      </button>
      <button
        onClick={mult}
        style={{
          backgroundColor: "blue",
          color: "white",
          marginLeft: "10px",
          padding: "10px",
        }}
      >
        mutliply
      </button>
    </>
  );
};

export default App;
