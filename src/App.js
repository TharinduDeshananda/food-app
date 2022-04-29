import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import RiceComponent from "./components/RiceComponent/RiceComponent";
import StartComponent from "./components/StartComponent/StartComponent";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="main-content">
        <Routes>
          <Route path="" element={<StartComponent />} />
          <Route path="meal" element={<RiceComponent />} />
          <Route path="meal/curry" element={<div>Curry Page</div>} />
          <Route
            path="meal/curry/done"
            element={<div>Order complete Page</div>}
          />
          <Route path="*" element={<div>No such route</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
