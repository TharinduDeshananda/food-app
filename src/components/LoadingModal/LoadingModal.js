import "./style.css";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
const LoadingModal = () => {
  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="load-modal"
      >
        Loading..
      </motion.div>
    </AnimatePresence>,
    document.getElementById("portal")
  );
};

export default LoadingModal;
