import { firestore } from "../../../firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import {
  Box,
  Typography,
  Paper,
  Fab,
  Autocomplete,
  TextField,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import useList from "@/lib/list";
import Cart from "@/components/Home/Cart";

export default function Part({ parts }) {
  const partss = Object.values(parts);
  const [option, setOption] = useState(null);

  const addToList = useList((state) => state.addToList);

  const clicked = useList((state) => state.clicked);
  const addToClicked = useList((state) => state.addToClicked);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    useList.persist.rehydrate();
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    const id = event.target.id;
    const name = document.getElementById(id);

    addToClicked(name.textContent);
    addToList(name.textContent);
  };

  const handleChange = (event) => {
    let data = "";
    Object.values(parts).map((part) => {
      if (part.name == event.target.textContent) data = part;
    });
    setOption([data]);
  };

  const mappingFunction = (value, index) => (
    <Paper
      key={index}
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: "20px",
        marginTop: "20px",
        textAlign: "center",
        opacity: "0.85",
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
        id={index}
        variant="WixExtraBold"
        fontSize="30px"
        sx={{ position: "relative", top: "30px" }}
      >
        {value.name}
        <Fab
          id={index}
          color="error"
          onClick={handleClick}
          sx={{ position: "relative", zIndex: 0, left: "40px" }}
        >
          <Image
            id={index}
            alt="shoppingCart"
            src={!clicked.includes(value.name) ? "/cart.png" : "/check.svg"}
            width={22}
            height={22}
            style={{ objectFit: "cover" }}
          />
        </Fab>
      </Typography>
      <Typography
        variant="SchibstedRegular"
        fontSize="17px"
        sx={{ marginTop: "50px" }}
      >
        {value.body}
      </Typography>
    </Paper>
  );

  return (
    <Box
      sx={{
        width: "calc(100% - 250px)",
        height: "auto",
        padding: "180px 150px 100px 100px",
        backgroundColor: "#EF233C",
      }}
    >
      <Cart />
      <Autocomplete
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          opacity: "0.9",
          width: "104.5%",
        }}
        options={parts.map((part) => {
          return part.name;
        })}
        renderInput={(params) => (
          <TextField {...params} label="Выберите запчасть" />
        )}
        onInputChange={handleChange}
      />
      <Box
        ref={ref}
        sx={{ width: "100%", height: "auto" }}
        component={motion.div}
        initial="hidden"
        animate={isInView ? "visible" : ""}
        transition={{
          duration: 1.5,
          ease: "backInOut",
          times: [0, 0.5, 1],
          staggerChildren: 0.3,
        }}
      >
        {option == null || option == ""
          ? partss.map(mappingFunction)
          : option.map(mappingFunction)}
      </Box>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const params = context.params;
  const id = params.id;

  const docRef = doc(firestore, "parts", "details");
  const docSnap = await getDoc(docRef);
  const res = docSnap.data();
  const data = res[id];

  return {
    props: {
      parts: data,
    },
  };
}
