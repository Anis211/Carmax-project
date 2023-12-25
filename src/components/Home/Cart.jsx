import { Box, Typography, Button, Link, Fab } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useList from "@/lib/list.js";
import { Link as NextLink } from "next/link";
import Image from "next/image";

export default function Cart() {
  useEffect(() => {
    useList.persist.rehydrate();
  }, []);

  const list = useList((state) => new Array(state.list));
  const clearList = useList((state) => state.clearList);
  const deleteItem = useList((state) => state.deleteItem);
  const clearClicked = useList((state) => state.clearClicked);

  const [isCircle, setIsCircle] = useState(true);

  const handleClick = () => {
    clearList();
    clearClicked();
  };

  const handleDelete = (element) => {
    deleteItem(element.textContent);
  };

  if (!isCircle) {
    return (
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
            href="/#contact"
            underline="none"
            sx={{
              alignSelf: "center",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            <Typography variant="WixExtraBold" fontSize="25px">
              Карзина
            </Typography>
            <Typography
              varaint="InterRegular"
              fontSize="14px"
              sx={{ alignSelf: "center" }}
            >
              (Нажмите на карзине чтобы заказать)
            </Typography>
          </Link>
          {list[0].map((value, index) => {
            if (value != "") {
              return (
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
                  <Fab color="error" size="small" sx={{ marginLeft: "10px" }}>
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
              );
            }
          })}
        </Box>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            borderRadius: "0px 0px 20px 20px",
            marginTop: "10px",
          }}
        >
          Delete
        </Button>
      </Box>
    );
  }
  return (
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
  );
}
