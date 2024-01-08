import { motion } from "framer-motion";
import { Box, Typography, Link, Divider, styled } from "@mui/material";
import { Link as NextLink } from "next/link";

const Logo = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
  justifyItems: "flex-start",
  position: "relative",
  left: "2.52vw",
  fontSize: "35px",
}));

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { fontSize: "13px" },
  fontSize: "20px",
}));

const Navbar = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { height: "70px" },
  width: "100vw",
  height: "100px",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  alignSelf: "flex-start",
  position: "fixed",
  zIndex: 2,
}));

const Footer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
  width: "100%",
  height: "auto",
  backgroundColor: theme.palette.primary.main,
  alignSelf: "flex-end",
  display: "flex",
}));

const FooterDetails = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    gap: "15px",
    paddingTop: "60px",
  },
  width: "100%",
  height: "auto",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  textAlign: "center",
  paddingTop: "100px",
}));

const Text = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { fontSize: "0.9em" },
}));

const Seperator = styled(Divider)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { borderColor: theme.palette.primary.main },
  borderColor: "lightgrey",
  height: "130px",
  position: "relative",
  bottom: "100px",
}));

export default function Layout({ children }) {
  const headers = [
    {
      text: "Главная",
      path: "#hero",
    },
    {
      text: "О нас",
      path: "#about",
    },
    {
      text: "Каталог",
      path: "#catalog",
    },
    {
      text: "Контакты",
      path: "#contact",
    },
  ];

  const footerDetails = [
    {
      header: "Контактные Данные",
      body: [
        "Наш Адресс: ул.Петрова 23",
        "Номер Телефона: +7 700 330 09 28",
        "Почта: artyr_kz@mail.ru",
      ],
      links: ["", "", ""],
    },
    {
      header: "Ссылки",
      body: ["Home", "Catalog", "Contact", "About"],
      links: ["#hero", "#about", "#catalog", "#contact"],
    },
    {
      header: "Социальные сети",
      body: ["Instagram", "WhatsApp", "2Gis"],
      links: [
        "https://www.instagram.com/magazin_avtozap_carmax?utm_source=qr&igsh=MXF1bmNuMmd4NGo5dQ==",
        "https://web.whatsapp.com/",
        "https://2gis.kz/astana/firm/70000001018076457",
      ],
    },
  ];

  const logoVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: [0, 0.5, 1], y: [40, -10, 0] },
  };

  return (
    <Box
      className="main"
      sx={{
        dispay: "flex",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <Navbar>
        <Logo
          variant="logo"
          aria-hidden
          component={motion.span}
          layout
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: [0, 0.5, 1], y: [40, -10, 0] }}
          transition={{ duration: 1, type: "spring" }}
        >
          Carmax
        </Logo>
        <Box
          className="headers"
          sx={{
            marginRight: "0px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
          component={motion.div}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
            type: "spring",
            staggerChildren: 0.2,
            delayChildren: 0.3,
          }}
        >
          {headers.map((header, index) => {
            return (
              <Link
                key={index}
                component={NextLink}
                href={`/${header.path}`}
                underline="none"
                color="white"
                sx={{ marginRight: "3.53vw" }}
              >
                <Header
                  key={index}
                  variant="headers"
                  sx={{ display: "inline-block" }}
                  component={motion.span}
                  variants={logoVariants}
                >
                  {header.text}
                </Header>
              </Link>
            );
          })}
        </Box>
      </Navbar>
      {children}
      <Footer>
        <FooterDetails>
          {footerDetails.map((details, index) => {
            return (
              <Box key={index} sx={{ width: "100%" }}>
                <Box
                  className="contentBox"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Text variant="footerHead" sx={{ marginBottom: "15px" }}>
                    {details.header}
                  </Text>
                  {details.body.map((body, index) => {
                    return (
                      <Link
                        key={index}
                        component={NextLink}
                        href={details.links[index]}
                        underline="none"
                        color="white"
                      >
                        <Text key={index} variant="footerBody">
                          {body}
                        </Text>
                      </Link>
                    );
                  })}
                </Box>
                {index < footerDetails.length - 1 ? (
                  <Seperator
                    key={index}
                    variant="fullWidth"
                    orientation="vertical"
                  />
                ) : (
                  ""
                )}
              </Box>
            );
          })}
        </FooterDetails>
      </Footer>
    </Box>
  );
}
