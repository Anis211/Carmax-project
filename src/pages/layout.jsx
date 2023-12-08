import { motion } from "framer-motion";
import { Box, Typography, Link, Divider } from "@mui/material";
import { Link as NextLink } from "next/link";
import { theme } from "@/theme";

export default function Layout({ children }) {
  const headers = [
    {
      text: "Главная",
      path: "",
    },
    {
      text: "О нас",
      path: "about",
    },
    {
      text: "Каталог",
      path: "catalog",
    },
    {
      text: "Контакты",
      path: "contact",
    },
  ];

  const footerDetails = [
    {
      header: "Contact us",
      body: [
        "Address: st.Petrova 23",
        "Phone number: +7 705 602 1256",
        "Email: anishejioov@gmail.com",
      ],
    },
    {
      header: "Social Media",
      body: ["Facebook", "Instagram", "WhatsApp"],
    },
    {
      header: "Links",
      body: ["Home", "Catalog", "Contact", "About"],
    },
    {
      header: "Catalog",
      body: ["Engine fuel pump", "fuel pump", "oil filter", "accessories"],
    },
  ];

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box className="main" sx={{ dispay: "flex", flexDirection: "column" }}>
      <Box
        className="navbar"
        sx={{
          width: "100%",
          height: "100px",
          backgroundColor: theme.palette.primary.main,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          alignSelf: "flex-start",
        }}
      >
        <Typography
          variant="logo"
          sx={{
            justifyItems: "flex-start",
            position: "relative",
            left: "50px",
          }}
          aria-hidden
          component={motion.span}
          layout
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, type: "spring", staggerChildren: 0.05 }}
        >
          {"Carmax".split("").map((letter, index) => {
            return (
              <>
                <Typography
                  key={index}
                  sx={{ display: "inline-block" }}
                  variant="logo"
                  component={motion.span}
                  variants={logoVariants}
                >
                  {letter}
                </Typography>
              </>
            );
          })}
        </Typography>
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
          transition={{ duration: 1, type: "spring", staggerChildren: 0.1 }}
        >
          {headers.map((header, index) => {
            return (
              <>
                <Link
                  key={index}
                  component={NextLink}
                  href={`/${header.path}`}
                  underline="none"
                  color="white"
                  sx={{ marginRight: "70px" }}
                >
                  <Typography
                    variant="headers"
                    sx={{ display: "inline-block" }}
                    component={motion.span}
                    variants={logoVariants}
                  >
                    {header.text}
                  </Typography>
                </Link>
              </>
            );
          })}
        </Box>
      </Box>
      {children}
      <Box
        className="footer"
        sx={{
          width: "100%",
          height: "300px",
          backgroundColor: theme.palette.primary.main,
          alignSelf: "flex-end",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexGrow: 1,
            alignItems: "flex-start",
            alignSelf: "center",
            justifyContent: "space-evenly",
            lineHeight: "22px",
          }}
        >
          <Divider
            variant="fullWidth"
            orientation="vertical"
            sx={{
              borderColor: "lightgrey",
              height: "130px",
            }}
          />
          {footerDetails.map((details) => {
            return (
              <>
                <Box
                  className="contentBox"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="footerHead"
                    sx={{ marginBottom: "15px" }}
                  >
                    {details.header}
                  </Typography>
                  {details.body.map((body) => {
                    return (
                      <>
                        <Typography variant="footerBody">{body}</Typography>
                      </>
                    );
                  })}
                </Box>
                <Divider
                  variant="fullWidth"
                  orientation="vertical"
                  sx={{
                    borderColor: "lightgrey",
                    height: "130px",
                  }}
                />
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
