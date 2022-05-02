import { useContext } from "react";
import { Link } from "react-router-dom";
import { FoodContext } from "../../context/FoodContext";
import "./style.css";

const RiceComponent = () => {
  const { state, dispatch } = useContext(FoodContext);

  return (
    <div className="rice-comp">
      <div className="rice-comp-title">Choose your rice!!..</div>
      <div className="rice-menu">
        <Link
          to={"curry"}
          onClick={() => {
            dispatch({ type: "SET_MEAL", payload: "CHIKEN_RICE" });
          }}
        >
          <div className="rice-item">Chicken Rice</div>
        </Link>
        <Link
          to={"curry"}
          onClick={() => {
            dispatch({ type: "SET_MEAL", payload: "VEGETABLE_RICE" });
          }}
        >
          <div className="rice-item">Vegetable Rice</div>
        </Link>
        <Link
          to={"curry"}
          onClick={() => {
            dispatch({ type: "SET_MEAL", payload: "EGG_RICE" });
          }}
        >
          <div className="rice-item">Egg Rice</div>
        </Link>
        <Link
          to={"curry"}
          onClick={() => {
            dispatch({ type: "SET_MEAL", payload: "FISH_RICE" });
          }}
        >
          <div className="rice-item">Fish Rice</div>
        </Link>
        <Link
          to={"curry"}
          onClick={() => {
            dispatch({ type: "SET_MEAL", payload: "FRIED_RICE" });
          }}
        >
          <div className="rice-item">Fried Rice</div>
        </Link>
      </div>
    </div>
  );
};
export default RiceComponent;
