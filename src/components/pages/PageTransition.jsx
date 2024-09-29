import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition = ({children}) => {
    const pathname = useLocation().pathname
    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0, transition: { duration: 0.2, delay:0.4, ease: "easeInOut" } }}
                    className="h-screen w-screen bg-gray-950 fixed top-0 pointer-events-none"
                />
            {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition;