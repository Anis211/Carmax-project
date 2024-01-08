import { Box, Typography, Button, Link, Fab, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useList from "@/lib/list.js";
import { Link as NextLink } from "next/link";
import Image from "next/image";

const Shop = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "80vw",
    left: "18%",
    top: "10%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "50vw",
    left: "40%",
    top: "10%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "33vw",
  },
  width: "25.25vw",
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
}));

const Circle = styled(Fab)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "50px",
    height: "50px",
    left: "85%",
    top: "9%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    left: "90%",
    top: "10%",
  },
  width: "70px",
  height: "70px",
  backgroundColor: "white",
  opacity: "0.93",
  borderRadius: "90px",
  position: "fixed",
  zIndex: 2,
  left: "94%",
  top: "15%",
}));

const Value = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "20px",
  },
  alignSelf: "center",
  fontSize: "16px",
}));

const Block = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { width: "auto" },
  height: "auto",
  width: "100%",
  padding: "10px 20px 10px 30px",
  display: "flex",
  flexDirection: "row",
}));

const Cross = styled(Fab)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { marginLeft: "5px" },
  marginLeft: "10px",
}));

export default function Cart() {
  useEffect(() => {
    useList.persist.rehydrate();
  }, []);

  const list = useList((state) => new Array(state.list));
  const clearList = useList((state) => state.clearList);
  const deleteItem = useList((state) => state.deleteItem);
  const deleteClicked = useList((state) => state.deleteClicked);
  const clearClicked = useList((state) => state.clearClicked);

  const [isCircle, setIsCircle] = useState(true);

  const handleClick = () => {
    clearList();
    clearClicked();
  };

  const handleDelete = (element) => {
    deleteItem(element.textContent);
    deleteClicked(element.textContent);
  };

  if (!isCircle) {
    return (
      <Shop
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
            src="/cross.png "
            alt="cross"
            width={25}
            height={25}
            onClick={() => setIsCircle(true)}
            style={{ position: "absolute", left: "10px" }}
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
              Корзина
            </Typography>
            <Typography
              varaint="InterRegular"
              fontSize="14px"
              sx={{ alignSelf: "center" }}
            >
              (Нажмите на корзину чтобы заказать)
            </Typography>
          </Link>
          {list[0].map((value, index) => {
            if (value != "") {
              return (
                <Block
                  key={index}
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: [0, 0.5, 1], y: [60, 0, 0] },
                  }}
                >
                  <Value id={`d${index}`} variant="InterMedium">
                    {value}
                  </Value>
                  <Cross color="error" size="small">
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
                      src="/cross.png"
                      width={22}
                      height={22}
                      onClick={(event) => {
                        const elem = document.getElementById(
                          `b${event.target.id}`
                        );
                        handleDelete(elem);
                      }}
                    />
                  </Cross>
                </Block>
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
          Удалить
        </Button>
      </Shop>
    );
  }
  return (
    <Circle
      onClick={() => setIsCircle(false)}
      component={motion.div}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Image alt="shopping cart" src="/cart.png" width={22} height={22} />
    </Circle>
  );
}
