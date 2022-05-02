import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FoodContext } from "../../context/FoodContext";
import "./style.css";

const CurryComponent = () => {
  const { state, dispatch } = useContext(FoodContext);
  const [curries, setCurries] = useState([]);
  const addCurry = useCallback(
    (event) => {
      const curry = event.target.dataset.curryType;
      const newCurries = curries.filter((c) => c.localeCompare(curry) != 0);
      newCurries.push(curry);
      setCurries(newCurries);
      event.target.classList.toggle("curry-item-select");
      console.log("current curries: ", newCurries);
    },
    [curries]
  );

  const handleNext = useCallback(() => {
    console.log("handleNext invoked");
    dispatch({ type: "ADD_CURRIES", payload: curries });
  }, [curries]);
  return (
    <div className="curry-comp">
      <div className="curry-comp-title">
        Choose your curries!!.. {state.meal}
      </div>
      <div className="curry-menu">
        <div
          className="curry-item"
          data-curry-type="CHICKEN"
          onClick={addCurry}
        >
          Chicken
        </div>
        <div className="curry-item" data-curry-type="DHAL" onClick={addCurry}>
          Dhal
        </div>
        <div className="curry-item" data-curry-type="EGGS" onClick={addCurry}>
          Eggs
        </div>
        <div className="curry-item" data-curry-type="FISH" onClick={addCurry}>
          Fish
        </div>
        <div
          className="curry-item"
          data-curry-type="PAPADAM"
          onClick={addCurry}
        >
          Papadam
        </div>
      </div>
      <Link to={"done"} onClick={handleNext}>
        <button className="button-page">Next</button>
      </Link>
      <button className="button-page">Previous</button>
    </div>
  );
};
export default CurryComponent;
