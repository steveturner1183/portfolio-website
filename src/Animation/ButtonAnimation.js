import { motion } from "framer-motion";

export default function ButtonAnimation(props) {
    return (
        <motion.div 
        whileTap={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        >
        {props.children}
        </motion.div>
        )
    };