/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Box, Typography, Card, styled } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { wordLeftAnimation } from "@/lib/animations";

const Section = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    padding: "0px",
    paddingBottom: "50px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: "40vh",
    width: "calc(100vw - 120px)",
    padding: "0px 60px 60px 60px",
    marginBottom: "-5px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    height: "calc(60vh - 200px)",
    width: "calc(100vw - 200px)",
    padding: "100px 100px 100px 100px",
    marginBottom: "-5px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "calc(100vw - 300px)",
    height: "auto",
    padding: "120px 150px 100px 150px",
  },
  backgroundColor: "#8D99AE",
  display: "flex",
  flexDirection: "row",
}));

const Image = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "75.5vw",
    height: "75.5vw",
    margin: "60px auto 0px auto",
  },
  [theme.breakpoints.between("sm", "lg")]: {
    width: "330px",
    height: "330px",
    margin: "auto",
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginLeft: "140px",
  },
  width: "25.25vw",
  height: "24.24vw",
  borderRadius: "40px",
  margin: "0px auto",
}));

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { width: "100vw", fontSize: "23px" },
  [theme.breakpoints.between("sm", "lg")]: {
    width: "35vw",
  },
  fontSize: "36px",
}));

const Body = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
    width: "100vw",
  },
  [theme.breakpoints.between("sm", "lg")]: {
    width: "35vw",
  },
  fontSize: "20.5px",
  width: "31vw",
  marginTop: "40px",
}));

const Text = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    marginRight: "68vw",
    marginTop: "40px",
  },
  [theme.breakpoints.between("sm", "lg")]: {
    textAlign: "center",
    top: 0,
    left: "7vw",
  },
  width: "27.7vw",
  margin: "0px auto",
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
}));

export default function Section2() {
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  return (
    <Section>
      <Text>
        <Header
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
          {wordLeftAnimation("Наши Услуги", "WixExtraBold", "100%", {
            marginRight: "15px",
          })}
        </Header>
        <Body
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
          {wordLeftAnimation(
            "Быстрая Доставка: Ваш заказ - наш приоритет Профессиональные Консультации: Наши эксперты всегда готовы помочь как в выборе запчасти, так и в ее установке в нашем СТО",
            "SchibstedRegular",
            "100%",
            { marginRight: "15px" }
          )}
        </Body>
      </Text>
      <Image
        ref={ref2}
        component={motion.div}
        initial={{ opacity: 0, x: 60 }}
        animate={isInView2 ? { opacity: 1, x: 0 } : ""}
        transition={{ duration: 1, ease: "backInOut" }}
      >
        <img
          alt="engine"
          src="/gasket.png"
          style={{ width: "100%", height: "100%" }}
        />
      </Image>
    </Section>
  );
}
