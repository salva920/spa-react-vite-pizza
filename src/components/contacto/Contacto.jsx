import { motion } from "framer-motion";
function Contacto() {

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <h1>Contacto</h1>
      </motion.div>
    )
  }
  
  export default Contacto