import { Box, Typography, Card } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { wordLeftAnimation } from "@/lib/animations";
import { useRef } from "react";
import Image from "next/image";

export default function Section1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      className="section1"
      sx={{
        width: "calc(100% - 300px)",
        height: "auto",
        padding: "100px 150px 100px 150px",
        backgroundColor: "#8D99AE",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Card
        ref={ref}
        sx={{ width: "500px", height: "480px", borderRadius: "40px" }}
        component={motion.div}
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : ""}
        transition={{ duration: 1, ease: "backInOut" }}
      >
        <Image alt="engine" src="/engine.png" width={500} height={480} />
      </Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          left: "210px",
          top: "120px",
        }}
        component={motion.div}
      >
        <Typography
          ref={ref}
          sx={{ marginBottom: "30px", width: "550px" }}
          component={motion.span}
          layout={true}
          initial={"hidden"}
          transition={{
            duration: 1,
            ease: "backInOut",
            staggerChildren: 0.2,
            childrenDelay: 0.4,
          }}
          animate={isInView ? "visible" : ""}
        >
          {wordLeftAnimation(
            "Исследуйте Преимущества Carmax",
            "WixExtraBold",
            "35px",
            { marginRight: "15px" }
          )}
        </Typography>
        <Typography
          ref={ref}
          sx={{ width: "550px" }}
          component={motion.span}
          animate={isInView ? "visible" : ""}
          layout={true}
          initial={"hidden"}
          transition={{
            duration: 1,
            ease: "backInOut",
            staggerChildren: 0.2,
            childrenDelay: 0.4,
          }}
        >
          {wordLeftAnimation(
            "Мы - команда экспертов по автозапчастям, готовых предоставить вам только лучшее.",
            "SchibstedRegular",
            "20.5px",
            { marginRight: "15px" }
          )}
        </Typography>
      </Box>
    </Box>
  );
}
