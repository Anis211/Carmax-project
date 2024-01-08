import { firestore } from "../../../firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import {
  Box,
  Typography,
  Paper,
  Fab,
  Autocomplete,
  TextField,
  styled,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import useList from "@/lib/list";
import Cart from "@/components/Home/Cart";

const Main = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: 0,
    paddingTop: "90px",
    paddingBottom: "50px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    padding: "120px 0",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    padding: "120px 0",
  },
  width: "calc(100% - 250px)",
  height: "auto",
  padding: "180px 150px 100px 100px",
  backgroundColor: "#EF233C",
}));

const Parts = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "75%",
    marginLeft: "20px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "85%",
    marginLeft: "30px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "90%",
    marginLeft: "30px",
  },
  width: "100%",
  height: "auto",
}));

const Search = styled(Autocomplete)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "120%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "109%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "105.5%",
  },
  backgroundColor: "white",
  borderRadius: "10px",
  opacity: "0.9",
  width: "104.5%",
}));

const Page = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: "15px",
  },
  width: "100%",
  height: "auto",
  borderRadius: "20px",
  marginTop: "20px",
  textAlign: "center",
  opacity: "0.85",
  padding: "10px 30px 45px 30px",
  display: "flex",
  flexDirection: "column",
}));

const Head = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { fontSize: "22px" },
  position: "relative",
  top: "30px",
  fontSize: "30px",
}));

const Body = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

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
    <Page
      key={index}
      component={motion.div}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: [0, 0.5, 1], y: [60, 0, 0] },
      }}
    >
      <Head id={index} variant="WixExtraBold">
        {value.name}
        <Fab
          id={index}
          color="error"
          onClick={handleClick}
          sx={{ position: "relative", zIndex: 0, left: "20px" }}
        >
          <Image
            id={index}
            alt="shoppingCart"
            src={!clicked.includes(value.name) ? "/cart.png" : "/check.png"}
            width={23}
            height={23}
            style={{ objectFit: "cover" }}
          />
        </Fab>
      </Head>
      <Body
        variant="SchibstedRegular"
        fontSize="17px"
        sx={{ marginTop: "50px" }}
      >
        {value.body}
      </Body>
    </Page>
  );

  return (
    <Main>
      <Cart />
      <Parts
        ref={ref}
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
        <Search
          options={parts.map((part) => {
            return part.name;
          })}
          renderInput={(params) => (
            <TextField {...params} label="Выберите запчасть" />
          )}
          onInputChange={handleChange}
        />
        {option == null || option == ""
          ? partss.map(mappingFunction)
          : option.map(mappingFunction)}
      </Parts>
    </Main>
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
