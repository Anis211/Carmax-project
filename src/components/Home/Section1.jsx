/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Box, Typography, Card, styled } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { wordLeftAnimation } from "@/lib/animations";
import { useRef } from "react";

const Section = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    marginBottom: "-5px",
    paddingTop: "30px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: "40vh",
    width: "calc(100vw - 120px)",
    padding: "80px 60px 0px 60px",
    marginBottom: "-5px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    height: "calc(60vh - 120px)",
    width: "calc(100vw - 120px)",
    padding: "120px 60px 0px 60px",
    marginBottom: "-5px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "calc(100% - 300px)",
    height: "50vh",
    padding: "100px 0px 0px 300px",
  },
  backgroundColor: "#8D99AE",
  display: "flex",
  flexDirection: "row",
}));

const Image = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "74vw",
    height: "74vw",
    margin: "40px auto 30px auto",
  },
  [theme.breakpoints.between("sm", "lg")]: {
    width: "350px",
    height: "350px",
  },
  width: "25.25vw",
  height: "24.24vw",
  borderRadius: "40px",
}));

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { fontSize: "26px", width: "100%" },
  [theme.breakpoints.between("sm", "lg")]: {
    width: "40vw",
  },
  [theme.breakpoints.up("lg")]: { width: "27.7vw" },
  fontSize: "35px",
  marginBottom: "30px",
}));

const Body = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: "19px",
  },
  [theme.breakpoints.between("sm", "lg")]: {
    width: "40vw",
  },
  fontSize: "20.5px",
  width: "27.7vw",
}));

const Text = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "calc(100vw - 60px)",
    paddingLeft: "40px",
    textAlign: "center",
  },
  [theme.breakpoints.between("sm", "lg")]: {
    textAlign: "center",
    top: 0,
    left: "7vw",
  },
  [theme.breakpoints.up("lg")]: {
    left: "10.6vw",
    top: "6.06vw",
  },
  position: "relative",
  display: "flex",
  flexDirection: "column",
}));

export default function Section1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Section>
      <Image
        ref={ref}
        component={motion.div}
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : ""}
        transition={{ duration: 1, ease: "backInOut" }}
      >
        <img
          alt="engine"
          src="/engine.png"
          style={{ width: "100%", height: "100%" }}
        />
      </Image>
      <Text component={motion.div}>
        <Header
          ref={ref}
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
            "100%",
            { marginRight: "15px" }
          )}
        </Header>
        <Body
          ref={ref}
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
            "100%",
            { marginRight: "15px" }
          )}
        </Body>
      </Text>
    </Section>
  );
}
