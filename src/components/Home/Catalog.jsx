import { Box, Typography, Paper, Link, styled } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { letterLeftAnimation } from "@/lib/animations";
import { Link as NextLink } from "next/link";

const CatalogBlock = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    width: "100vw",
    padding: 0,
    textAlign: "center",
    paddingBottom: "20px",
    marginBottom: "-2px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginBottom: "-2px",
  },
  width: "calc(100% - 300px)",
  height: "auto",
  padding: "100px 150px 100px 150px",
  backgroundColor: "#EF233C",
  display: "flex",
  flexDirection: "column",
}));

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    fontSize: "38px",
    marginTop: "30px",
    marginBottom: "30px",
  },
  fontSize: "65px",
  alignSelf: "center",
  marginBottom: "70px",
}));

const Block = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { paddingLeft: "7vw" },
  width: "100%",
  height: "auto",
}));

const Main = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "85vw",
    height: "auto",
    paddingTop: "20px",
    paddingBottom: "20px",
    borderRadius: "13px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: "120px",
    borderRadius: "13px",
    paddingBottom: "10px",
  },
  width: "100%",
  height: "100px",
  borderRadius: "20px",
  marginTop: "10px",
  textAlign: "center",
  opacity: 0.85,
}));

const Text = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    textAlifn: "center",
    top: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    top: "35px",
  },
  position: "relative",
  top: "30px",
  fontSize: "30px",
}));

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
    "Трансмиссия",
    "Ходовая Часть",
    "Рулевое Управление",
    "Тормозная Система",
    "Электрооборудование",
    "Отопление / Кондиционирование",
    "Детали Салона",
    "Детали Кузова",
    "Дополнительное Оборудование",
  ];

  return (
    <CatalogBlock id="catalog">
      <Header
        ref={ref}
        component={motion.span}
        initial="hidden"
        animate={isInView ? "visible" : ""}
        transition={{
          duration: 1,
          type: "spring",
          staggerChildren: 0.1,
        }}
      >
        {letterLeftAnimation("Каталог", "WixExtraBold", "100%")}
      </Header>
      <Block
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
            <>
              <Link
                href={`/parts/${headers.indexOf(part)}`}
                component={NextLink}
                color="black"
                underline="none"
              >
                <Main
                  key={index}
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: [0, 0.5, 1], y: [60, 0, 0] },
                  }}
                >
                  <Text variant="WixExtraBold">{part}</Text>
                </Main>
              </Link>
            </>
          );
        })}
      </Block>
    </CatalogBlock>
  );
}
