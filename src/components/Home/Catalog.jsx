import { Box, Typography, Paper, Link } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { letterLeftAnimation } from "@/lib/animations";
import { Link as NextLink } from "next/link";

export default function Catalog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const headers = [
    "Детали для ТО",
    "Прокладки двигателя",
    "Система подачи воздуха в двигателе",
    "Механизм газораспределения",
    "Кривошатунный механизм двигателя",
    "Система Смазки в двигателе",
    "Приготовление смеси в двигателе",
    "Двигатель",
    "Топливная система",
    "Система охлаждения",
    "Cистема Выпуска",
  ];

  return (
    <Box
      id="catalog"
      sx={{
        width: "calc(100% - 300px)",
        height: "auto",
        padding: "100px 150px 100px 150px",
        backgroundColor: "#EF233C",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        ref={ref}
        sx={{ alignSelf: "center", marginBottom: "70px" }}
        component={motion.span}
        initial="hidden"
        animate={isInView ? "visible" : ""}
        transition={{
          duration: 1,
          type: "spring",
          staggerChildren: 0.1,
        }}
      >
        {letterLeftAnimation("Каталог", "WixExtraBold", "65px")}
      </Typography>
      <Box
        sx={{ width: "100%", height: "auto" }}
        component={motion.div}
        layout
        initial="hidden"
        animate={isInView ? "visible" : ""}
        transition={{
          duration: 1.5,
          ease: "backInOut",
          times: [0, 0.5, 1],
          staggerChildren: 0.2,
          childreDelay: 0.4,
        }}
      >
        {headers.map((part, index) => {
          return (
            <Paper
              key={index}
              sx={{
                width: "100%",
                height: "100px",
                borderRadius: "20px",
                marginTop: "10px",
                textAlign: "center",
                opacity: 0.85,
              }}
              component={motion.div}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: [0, 0.5, 1], y: [60, 0, 0] },
              }}
            >
              <Link
                href={`/parts/${headers.indexOf(part)}`}
                component={NextLink}
                color="black"
                underline="none"
              >
                <Typography
                  variant="WixExtraBold"
                  fontSize="30px"
                  sx={{ position: "relative", top: "30px" }}
                >
                  {part}
                </Typography>
              </Link>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
}
