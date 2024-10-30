import Features from "../components/Features";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0, speed: 10 }}
        animate={{ opacity: 1 }}
      >
        <Hero />
        <Features />
      </motion.div>
    </>
  );
};

export default LandingPage;
