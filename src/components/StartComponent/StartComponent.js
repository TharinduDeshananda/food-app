import { Link } from "react-router-dom";
import "./style.css";

const StartComponent = () => {
  return (
    <div>
      <Link to={"meal"}>Start My Order</Link>
    </div>
  );
};

export default StartComponent;
