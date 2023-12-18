import {
  Box,
  Typography,
  Paper,
  Fab,
  Button,
  Autocomplete,
  TextField,
  Link,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Link as NextLink } from "next/link";
import useList from "@/lib/list";

export default function Part({ parts }) {
  const [isCircle, setIsCircle] = useState(true);

  const partss = Object.values(parts);
  const [option, setOption] = useState(null);

  const list = useList((state) => new Array(state.list));
  const addToList = useList((state) => state.addToList);
  const clearList = useList((state) => state.clearList);
  const deleteItem = useList((state) => state.deleteItem);

  const clicked = useList((state) => state.clicked);
  const addToClicked = useList((state) => state.addToClicked);
  const deleteClicked = useList((state) => state.deleteClicked);
  const clearClicked = useList((state) => state.clearClicked);

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

  const handleClick1 = () => {
    clearList();
    clearClicked();
  };

  const handleChange = (event) => {
    let data = "";
    Object.values(parts).map((part) => {
      if (part.name == event.target.textContent) data = part;
    });
    setOption([data]);
  };

  const handleDelete = (element) => {
    deleteItem(element.textContent);
    deleteClicked(element.textContent);
  };

  const mappingFunction = (value, index) => {
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
      </>
    );
  };

  return (
    <Box
      sx={{
        width: "calc(100% - 250px)",
        height: "auto",
        padding: "180px 150px 100px 100px",
        backgroundColor: "#EF233C",
      }}
    >
      {!isCircle ? (
        <>
          <Box
            sx={{
              width: "500px",
              height: "auto",
              backgroundColor: "white",
              opacity: "0.93",
              display: "flex",
              flexDirection: "column",
              borderRadius: "20px",
              position: "fixed",
              zIndex: 2,
              left: "65%",
              top: "16%",
            }}
            component={motion.div}
            initial={{ x: 70, y: -70, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{ x: -70, y: -70, opacity: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <Box
              id="container"
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "15px",
                marginBottom: "15px",
              }}
              component={motion.div}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1.5,
                ease: "backInOut",
                times: [0, 0.5, 1],
                staggerChildren: 0.3,
              }}
            >
              <Image
                src="/cross.svg"
                alt="cross"
                width={18}
                height={18}
                onClick={() => setIsCircle(true)}
                style={{ position: "absolute", left: "461px" }}
              />
              <Link
                component={NextLink}
                href="/#catalog"
                underline="none"
                sx={{ alignSelf: "center", marginBottom: "10px" }}
              >
                <Typography variant="WixExtraBold" fontSize="25px">
                  Карзина
                </Typography>
              </Link>
              {list[0].map((value, index) => {
                if (value != "") {
                  return (
                    <>
                      <Box
                        key={index}
                        sx={{
                          height: "auto",
                          width: "100%",
                          padding: "10px 20px 10px 30px",
                          display: "flex",
                          flexDirection: "row",
                        }}
                        component={motion.div}
                        variants={{
                          hidden: { opacity: 0, y: 60 },
                          visible: { opacity: [0, 0.5, 1], y: [60, 0, 0] },
                        }}
                      >
                        <Typography
                          id={`d${index}`}
                          variant="InterMedium"
                          fontSize="16px"
                          sx={{ alignSelf: "center" }}
                        >
                          {value}
                        </Typography>
                        <Fab
                          color="error"
                          size="small"
                          sx={{ marginLeft: "10px" }}
                        >
                          <p
                            id={`b${index}`}
                            style={{
                              zIndex: -1,
                              opacity: 0,
                              position: "absolute",
                            }}
                            onClick={(event) => handleDelete(event.target)}
                          >
                            {value}
                          </p>
                          <Image
                            id={index}
                            alt="cross"
                            src="/cross.svg"
                            width={16}
                            height={16}
                            onClick={(event) => {
                              const elem = document.getElementById(
                                `b${event.target.id}`
                              );
                              handleDelete(elem);
                            }}
                          />
                        </Fab>
                      </Box>
                    </>
                  );
                }
              })}
            </Box>
            <Button
              variant="contained"
              onClick={handleClick1}
              sx={{
                borderRadius: "0px 0px 20px 20px",
                marginTop: "10px",
              }}
            >
              Delete
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Fab
            sx={{
              width: "70px",
              height: "70px",
              backgroundColor: "white",
              opacity: "0.93",
              borderRadius: "90px",
              position: "fixed",
              zIndex: 2,
              left: "94%",
              top: "15%",
            }}
            onClick={() => setIsCircle(false)}
            component={motion.div}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image alt="shopping cart" src="/cart.png" width={22} height={22} />
          </Fab>
        </>
      )}
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
