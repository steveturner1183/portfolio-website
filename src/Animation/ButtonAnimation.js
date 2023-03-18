import { motion } from "framer-motion";

export default function ButtonAnimation(props) {
    return (
        <motion.div 
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.2 }}
        >
        {props.children}
        </motion.div>
        )
    };