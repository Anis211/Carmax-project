import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const logoVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export const wordLeftAnimation = (text, variant, fontSize, sxOptions) => {
  return text.split(" ").map((word, index) => {
    return (
      <Typography
        sx={{ display: "inline-block", ...sxOptions }}
        key={index}
        component={motion.span}
        variants={{
          hidden: { opacity: 0, x: 60 },
          visible: { opacity: [0, 0.5, 1], x: [60, 0, 0] },
        }}
        variant={variant}
        fontSize={fontSize}
      >
        {word}
      </Typography>
    );
  });
};

export const letterLeftAnimation = (text, variant, fontSize) => {
  return text.split("").map((letter, index) => {
    return (
      <Typography
        key={index}
        sx={{ display: "inline-block" }}
        component={motion.span}
        variants={logoVariants}
        variant={variant}
        color="white"
        fontSize={fontSize}
      >
        {letter}
      </Typography>
    );
  });
};
