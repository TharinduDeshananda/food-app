import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";
import { useState } from "react";
import LoadingModal from "../LoadingModal/LoadingModal";

const StartComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="main-wrapper">
      <motion.div
        initial={{ y: -50, transform: "scale(0.4)", opacity: "0" }}
        animate={{ y: 0, transform: "scale(1.0)", opacity: "1" }}
        transition={{ delay: 0.5 }}
        className="main-title"
      >
        Welcome To My Food App
      </motion.div>

      <Link to={"meal"}>
        <motion.button
          initial={{ y: 50, transform: "scale(0.4)", opacity: "0" }}
          animate={{ y: 0, transform: "scale(1.0)", opacity: "1" }}
          transition={{ delay: 0.5 }}
          className="main-order-button"
        >
          Start My Order
        </motion.button>
      </Link>
      <button
        onClick={() => {
          setModalOpen((state) => !state);
          setTimeout(() => {
            setModalOpen((state) => !state);
          }, 3000);
        }}
      >
        show modal
      </button>
      {modalOpen ? <LoadingModal /> : null}
    </div>
  );
};

export default StartComponent;
