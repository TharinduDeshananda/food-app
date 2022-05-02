import "./style.css";
import { motion } from "framer-motion";
const AppHeader = () => {
  return (
    <motion.div
      initial={{ y: -50, transform: "scale(0.4)", opacity: "0" }}
      animate={{ y: 0, transform: "scale(1.0)", opacity: "1" }}
      transition={{ delay: 0.5 }}
      className="app-header"
    >
      <div className="header-logo">Logo</div>
      <div className="header-title">Title</div>
    </motion.div>
  );
};

export default AppHeader;
