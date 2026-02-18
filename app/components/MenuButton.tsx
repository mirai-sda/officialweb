import { motion, MotionConfig } from "framer-motion";

interface Props {
  active: boolean;
  setActive: (active: boolean) => void;
}
const MenuButton = ({ active, setActive }: Props) => {
  return (
    <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
      <motion.div
        onClick={() => setActive}
        className="relative h-10 w-10 rounded-lg bg-white/0 transition-colors hover:bg-white/20"
        animate={active ? "open" : "close"}
        initial={false}
      >
        <motion.span
          className="absolute h-[3px] w-6 bg-white rounded-lg"
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
              color: "#ff0000",
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
              color: "#ff0000",
            },
          }}
        />
        <motion.span
          className="absolute h-[3px] w-6 bg-white rounded-lg"
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            close: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          className="absolute h-[3px] w-6 bg-white rounded-lg"
          style={{
            left: "50%",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              bottom: ["35%", "50%", "50%"],
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "35%"],
            },
          }}
        />
      </motion.div>
    </MotionConfig>
  );
};

export default MenuButton;
