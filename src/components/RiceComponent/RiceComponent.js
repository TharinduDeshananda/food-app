import { Link } from "react-router-dom";
import "./style.css";

const RiceComponent = () => {
  return (
    <div className="rice-comp">
      <div className="rice-comp-title">Choose your rice!!..</div>
      <div className="rice-menu">
        <Link to={"meal/chicken"}>
          <div className="rice-item">Chicken Rice</div>
        </Link>
        <Link to={"meal/vegetable"}>
          <div className="rice-item">Vegetable Rice</div>
        </Link>
        <Link to={"meal/egg"}>
          <div className="rice-item">Egg Rice</div>
        </Link>
        <Link to={"meal/fish"}>
          <div className="rice-item">Fish Rice</div>
        </Link>
        <Link to={"meal/fried"}>
          <div className="rice-item">Fried Rice</div>
        </Link>
      </div>
    </div>
  );
};
export default RiceComponent;
