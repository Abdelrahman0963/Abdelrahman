import { motion } from "framer-motion";

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-[999] bg-[var(--bg-color)] flex items-center justify-center overflow-hidden">

            <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col items-center gap-10!"
            >
                {/* Logo */}
                <motion.img
                    src="/Logo/logo.png"
                    alt="logo"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="w-[160px] md:w-[200px]"
                />

                {/* Loader */}
                <div className="flex gap-4!">
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            className="w-4 h-4 rounded-full bg-[var(--first-color)]"
                            animate={{
                                y: ["0%", "-60%", "0%"],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                {/* Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-white/70 tracking-widest text-sm uppercase"
                >
                    Loading Portfolio
                </motion.p>
            </motion.div>
        </div>
    );
};

export default LoadingScreen;
