/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Box, Typography, Card, styled } from "@mui/material";
import { wordLeftAnimation } from "@/lib/animations";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FAQ = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
    width: "100vw",
    padding: "60px 0px 40px 0px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: "calc(100vh + 50px)",
    width: "100vw",
    padding: "0px",
    paddingTop: "40px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "calc(100% - 200px)",
    height: "calc(100vh - 210px)",
    padding: "60px 150px 150px 50px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "calc(100% - 200px)",
    height: "calc(100vh - 210px)",
    padding: "60px 150px 150px 50px",
  },
  backgroundColor: "#EDF2F4",
  display: "flex",
  flexDirection: "column",
}));

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
    width: "calc(100% - 15px)",
    paddingLeft: "6vw",
    margin: "0px auto 100px auto",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "38px",
    width: "calc(100vw - 100px)",
    paddingLeft: "100px",
    marginTop: "10px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "38px",
    width: "calc(100vw - 50px)",
    paddingLeft: "50px",
    marginTop: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "54px",
    width: "100vw",
    margin: "0px auto",
  },
  height: "5.6vw",
  marginBottom: "40px",
}));

const Main = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "90vw",
    margin: "0px auto",
  },
  [theme.breakpoints.between("sm", "md")]: {
    margin: "0px auto",
    marginTop: "9vh",
    paddingLeft: "20px",
    flexDirection: "column",
  },
  [theme.breakpoints.between("md", "lg")]: {
    marginTop: "9vh",
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    margin: "0px auto",
    marginTop: "70px",
  },
  display: "flex",
}));

const Image = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "75.5vw",
    height: "75.5vw",
    margin: "0px auto",
    marginBottom: "20px",
  },
  [theme.breakpoints.between("sm", "lg")]: {
    width: "420px",
    height: "400px",
    margin: "0px auto",
    marginBottom: "60px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "23.73vw",
    height: "24.24vw",
    margin: 0,
  },
  borderRadius: "40px",
}));

const TextBlock = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { alignSelf: "center" },
  [theme.breakpoints.between("sm", "md")]: {
    marginLeft: "10px",
    alignSelf: "center",
  },
  [theme.breakpoints.between("md", "lg")]: {
    marginLeft: "30px",
    alignSelf: "center",
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: "7.57vw",
  },
}));

const Text = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "3.23vw",
    marginTop: "40px",
    textAlign: "center",
  },
  [theme.breakpoints.between("sm", "lg")]: {
    width: "100%",
    height: "auto",
    marginTop: "10px",
    textAlign: "center",
  },
  [theme.breakpoints.up("lg")]: {
    width: "23.73vw",
    height: "3.23vw",
  },
  display: "flex",
  flexDirection: "column",
  marginBottom: "72px",
}));

const Head = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { fontSize: "19px", marginBottom: "15px" },
  [theme.breakpoints.between("sm", "lg")]: {
    fontSize: "25px",
    marginBottom: "15px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "22px",
    marginBottom: "9px",
  },
}));

const Body = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { fontSize: "15px" },
  fontSize: "20px",
}));

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
    <FAQ id="about">
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
          "Качественные Запчасти для Вашего Автомобиля",
          "WixExtraBold",
          "100%",
          { marginRight: "15px" }
        )}
      </Header>
      <Main>
        <Image
          ref={ref}
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : ""}
          transition={{ duration: 1, type: "spring", delay: 0.8 }}
        >
          <img
            src="/filter.png"
            alt="oil filter"
            style={{ width: "100%", height: "100%" }}
          />
        </Image>
        <TextBlock
          ref={ref}
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
              <Text
                key={index}
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Head variant="WixExtraBold">{element.header}</Head>
                <Body variant="SchibstedRegular">{element.body}</Body>
              </Text>
            );
          })}
        </TextBlock>
      </Main>
    </FAQ>
  );
}
