import { useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import CurryComponent from "./components/CurryComponent/CurryComponent";
import SummaryComponent from "./components/OrderSummaryComponent/SummaryComponent";
import RiceComponent from "./components/RiceComponent/RiceComponent";
import StartComponent from "./components/StartComponent/StartComponent";
import { FoodProvider } from "./context/FoodContext";
import foodReducer from "./context/FoodReducer";
const initState = {
  meal: "no meal",
  curries: [],
};
function App() {
  const [foodState, dispatch] = useReducer(foodReducer, initState);

  return (
    <FoodProvider value={{ state: foodState, dispatch: dispatch }}>
      <div className="App">
        <AppHeader />
        <div className="main-content">
          <Routes>
            <Route path="" element={<StartComponent />} />
            <Route path="meal" element={<RiceComponent />} />
            <Route path="meal/curry" element={<CurryComponent />} />
            <Route path="meal/curry/done" element={<SummaryComponent />} />
            <Route path="*" element={<div>No such route</div>} />
          </Routes>
        </div>
      </div>
    </FoodProvider>
  );
}

export default App;
