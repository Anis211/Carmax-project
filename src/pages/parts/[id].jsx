import { Box, Typography, Paper, Fab } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Part({ parts }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      sx={{
        width: "calc(100% - 250px)",
        height: "auto",
        padding: "180px 150px 100px 100px",
        backgroundColor: "#EF233C",
      }}
    >
      <Box
        ref={ref}
        sx={{ width: "100%", height: "auto" }}
        component={motion.div}
        layout
        initial="hidden"
        animate={isInView ? "visible" : ""}
        transition={{
          duration: 1.5,
          ease: "backInOut",
          times: [0, 0.5, 1],
          staggerChildren: 0.3,
        }}
      >
        {Object.values(parts).map((value, index) => {
          return (
            <>
              <Paper
                key={index}
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  marginTop: "20px",
                  textAlign: "center",
                  opacity: 0.85,
                  padding: "10px 30px 45px 30px",
                  display: "flex",
                  flexDirection: "column",
                }}
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: [0, 0.5, 1], y: [60, 0, 0] },
                }}
              >
                <Typography
                  variant="WixExtraBold"
                  fontSize="30px"
                  sx={{ position: "relative", top: "30px" }}
                >
                  {value.name} <Fab sx={{ position: "relative", zIndex: 0 }} />
                </Typography>
                <Typography
                  variant="SchibstedRegular"
                  fontSize="17px"
                  sx={{ marginTop: "50px" }}
                >
                  {value.body}
                </Typography>
              </Paper>
            </>
          );
        })}
      </Box>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;

  const response = await fetch("http://localhost:3000/api/parts");
  const json = await response.json();

  const data = json[Object.keys(json)[id]];

  return {
    props: {
      parts: data,
    },
  };
}
