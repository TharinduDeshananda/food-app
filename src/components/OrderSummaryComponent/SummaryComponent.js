import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FoodContext } from "../../context/FoodContext";
import "./style.css";

const SummaryComponent = () => {
  const { state, dispatch } = useContext(FoodContext);
  const customNavigate = useNavigate();
  const clearContext = () => {
    dispatch({ type: "CLEAR" });
    console.log("context cleared");
    customNavigate("/", { replace: true });
  };

  console.log(state);
  return (
    <div className="summary-wrapper">
      <div className="summary-title">
        <h1>Order Summary</h1>
      </div>
      <div className="summary-descr">
        <h3>Meal : {state.meal}</h3>
        <h3>
          Curries:{" "}
          {state.curries.map((e) => (
            <span> {e} </span>
          ))}
        </h3>
      </div>
      <div className="summary-buttons">
        <button onClick={clearContext} className="summary-button">
          Cancel
        </button>
        <button onClick={clearContext} className="summary-button">
          Complete
        </button>
      </div>
    </div>
  );
};

export default SummaryComponent;
