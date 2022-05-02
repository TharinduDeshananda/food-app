import { useContext } from "react";
import { FoodContext } from "../../context/FoodContext";

const SummaryComponent = () => {
  const { state, dispatch } = useContext(FoodContext);
  console.log(state);
  return <div>order summary</div>;
};

export default SummaryComponent;
