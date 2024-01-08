import { Grid, Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { letterLeftAnimation } from "../../lib/animations";

const Logo = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    zIndex: -3,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "52.94vw",
    height: "52.94vw",
    top: "25vh",
    left: "-20px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "42.94vw",
    height: "42.94vw",
    left: "-20px",
    top: "19vw",
  },
  [theme.breakpoints.up("lg")]: {
    width: "30.3vw",
    height: "30.3vw",
    top: "9.1vw",
    left: "6.04vw",
  },
  position: "relative",
}));

const Text = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { left: "23.3vw", top: "35vh" },
  [theme.breakpoints.between("sm", "md")]: {
    zIndex: 1,
    top: "33vh",
    left: "30px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    zIndex: 1,
    left: "20px",
    top: "30.5vw",
  },
  [theme.breakpoints.up("lg")]: {
    top: "315px",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
}));

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { fontSize: "45px", left: 0 },
  [theme.breakpoints.between("sm", "lg")]: {
    fontSize: "75px",
    left: 0,
  },
  position: "relative",
  left: "-40px",
  fontSize: "83px",
}));

const Body = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { fontSize: "38px" },
  [theme.breakpoints.between("sm", "lg")]: {
    fontSize: "75px",
  },
  fontSize: "87px",
}));

const HeroBlock = styled(Box)(({ theme }) => ({
  [theme.breakpoints.between("sm", "md")]: {
    height: "100vh",
  },
  [theme.breakpoints.between("md", "lg")]: {
    height: "100vh",
    padding: 0,
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
    height: "100vh",
  },
  width: "100%",
  height: "100vh",
  backgroundColor: "#000000",
  paddingTop: "100px",
}));

export default function Hero() {
  return (
    <HeroBlock id="hero">
      <Grid container>
        <Grid item xs={6}>
          <Text>
            <Header
              component={motion.span}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1,
                type: "spring",
                staggerChildren: 0.1,
              }}
            >
              {letterLeftAnimation("Carmax", "WixExtraBold", "100%")}
            </Header>
            <Body
              component={motion.span}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1,
                type: "spring",
                delayChildren: 0.7,
                staggerChildren: 0.1,
              }}
            >
              {letterLeftAnimation("AutoParts", "SchibstedRegular", "100%")}
            </Body>
          </Text>
        </Grid>
        <Grid item xs={6}>
          <Logo
            component={motion.div}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              type: "spring",
              delay: 0.2,
            }}
          >
            <Image src="/logo.png" alt="logo" fill />
          </Logo>
        </Grid>
      </Grid>
    </HeroBlock>
  );
}
