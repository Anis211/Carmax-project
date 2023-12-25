import { Box, Typography, Card } from "@mui/material";
import { wordLeftAnimation } from "@/lib/animations";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Faq() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const faqContent = [
    {
      header: "Запчасти разного качества",
      body: "Надежные решения для вашего транспорта",
    },
    {
      header: "Доступные цены",
      body: "Качество не ударит по вашему кошельку",
    },
    {
      header: "Доставка по всей Астане",
      body: "Медленный транспорт не нужен когда время тикает",
    },
  ];

  return (
    <Box
      className="FAQ"
      id="about"
      sx={{
        backgroundColor: "#EDF2F4",
        width: "calc(100% - 300px)",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        padding: "100px 150px 130px 150px",
      }}
    >
      <Typography
        ref={ref}
        sx={{ width: "1250px", height: "115px", marginBottom: "40px" }}
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
          "Качественные Запчасти для Вашего Автомобиля",
          "WixExtraBold",
          "64px",
          { marginRight: "15px" }
        )}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", marginTop: "100px" }}>
        <Card
          ref={ref}
          sx={{
            width: "470px",
            height: "480px",
            borderRadius: "40px",
          }}
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : ""}
          transition={{ duration: 1, type: "spring", delay: 0.8 }}
        >
          <Image src="/filter.png" alt="oil filter" width={470} height={480} />
        </Card>
        <Box
          ref={ref}
          sx={{ alignSelf: "center", marginLeft: "150px" }}
          component={motion.div}
          initial="hidden"
          animate={isInView ? "visible" : ""}
          transition={{
            duration: 1,
            type: "spring",
            staggerChildren: 0.35,
            delayChildren: 0.8,
          }}
        >
          {faqContent.map((element, index) => {
            return (
              <Box
                key={index}
                sx={{
                  width: "470px",
                  height: "64px",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "72px",
                }}
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Typography
                  variant="WixExtraBold"
                  fontSize="22px"
                  sx={{ marginBottom: "9px" }}
                >
                  {element.header}
                </Typography>
                <Typography variant="SchibstedRegular" fontSize="20px">
                  {element.body}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
