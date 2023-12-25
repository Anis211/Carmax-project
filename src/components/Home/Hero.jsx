import { Grid, Box, Typography, Card } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { letterLeftAnimation } from "../../lib/animations";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        height: "800px",
        backgroundColor: "#000000",
        paddingTop: "100px",
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              top: "235px",
            }}
          >
            <Typography
              sx={{
                position: "relative",
                left: "-40px",
              }}
              component={motion.span}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1,
                type: "spring",
                staggerChildren: 0.1,
              }}
            >
              {letterLeftAnimation("Carmax", "WixExtraBold", "83px")}
            </Typography>
            <Typography
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
              {letterLeftAnimation("AutoParts", "SchibstedRegular", "87px")}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              width: "600px",
              height: "600px",
              position: "relative",
              top: "40px",
            }}
            component={motion.div}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              type: "spring",
              delay: 0.2,
            }}
          >
            <Image src="/logo.png" alt="logo" width={600} height={600} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
