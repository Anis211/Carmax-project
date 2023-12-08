import { Box, Typography, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const logoVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Box className="home" sx={{ height: "auto", width: "100% " }}>
      <Box
        className="hero"
        sx={{
          width: "100%",
          height: "800px",
          backgroundColor: "#000000",
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
                layout
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 1,
                  type: "spring",
                  staggerChildren: 0.1,
                }}
              >
                {"Carmax".split("").map((letter, index) => {
                  return (
                    <>
                      <Typography
                        key={index}
                        sx={{ display: "inline-block" }}
                        component={motion.span}
                        variants={logoVariants}
                        variant="WixExtraBold"
                        color="white"
                        fontSize="83px"
                      >
                        {letter}
                      </Typography>
                    </>
                  );
                })}
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
                {"AutoParts".split("").map((letter, index) => {
                  return (
                    <>
                      <Typography
                        sx={{ display: "inline-block" }}
                        key={index}
                        component={motion.span}
                        variants={logoVariants}
                        variant="SchibstedRegular"
                        color="white"
                        fontSize="87px"
                      >
                        {letter}
                      </Typography>
                    </>
                  );
                })}
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
              layout
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                type: "spring",
                delay: 0.2,
              }}
            >
              <Image
                src="/logo.png"
                alt="triangleLogo"
                width={600}
                height={600}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
