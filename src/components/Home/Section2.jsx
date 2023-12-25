import { Box, Typography, Card } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { wordLeftAnimation } from "@/lib/animations";
import Image from "next/image";

export default function Section2() {
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  return (
    <Box
      className="section2"
      sx={{
        width: "calc(100% - 300px)",
        height: "auto",
        padding: "120px 150px 100px 150px",
        backgroundColor: "#8D99AE",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          width: "470px",
          marginRight: "250px",
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
        }}
      >
        <Typography
          ref={ref2}
          component={motion.span}
          animate={isInView2 ? "visible" : ""}
          layout={true}
          initial={"hidden"}
          transition={{
            duration: 1,
            ease: "backInOut",
            staggerChildren: 0.2,
            childrenDelay: 0.4,
          }}
        >
          {wordLeftAnimation("Наши Услуги", "WixExtraBold", "36px", {
            marginRight: "15px",
          })}
        </Typography>
        <Typography
          ref={ref2}
          sx={{ width: "550px", marginTop: "40px" }}
          component={motion.span}
          animate={isInView2 ? "visible" : ""}
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
            "Быстрая Доставка: Ваш заказ - наш приоритет Профессиональные Консультации: Наши эксперты всегда готовы помочь как в выборе запчасти, так и в ее установке в нашем СТО",
            "SchibstedRegular",
            "20.5px",
            { marginRight: "15px" }
          )}
        </Typography>
      </Box>
      <Card
        ref={ref2}
        sx={{
          width: "500px",
          height: "480px",
          borderRadius: "40px",
        }}
        component={motion.div}
        initial={{ opacity: 0, x: 60 }}
        animate={isInView2 ? { opacity: 1, x: 0 } : ""}
        transition={{ duration: 1, ease: "backInOut" }}
      >
        <Image alt="engine" src="/gasket.png" width={500} height={480} />
      </Card>
    </Box>
  );
}
