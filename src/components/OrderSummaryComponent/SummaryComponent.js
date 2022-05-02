import { useContext } from "react";
import { FoodContext } from "../../context/FoodContext";

const SummaryComponent = () => {
  const { state, dispatch } = useContext(FoodContext);
  console.log(state);
  return (
    <div>
      <div>
        <h1>Order Summary</h1>
      </div>
      <div>
        <h3>Meal : {state.meal}</h3>
        <h3>
          Curries:{" "}
          {state.curries.map((e) => (
            <span> {e} </span>
          ))}
        </h3>
      </div>
    </div>
  );
};

export default SummaryComponent;
