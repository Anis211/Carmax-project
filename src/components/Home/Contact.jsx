import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Snackbar,
  styled,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { wordLeftAnimation } from "@/lib/animations";
import { sendCotactData } from "@/lib/api";
import useList from "@/lib/list.js";

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { fontSize: "30px" },
  alignSelf: "center",
  marginBottom: "40px",
  color: "#001122",
  position: "relative",
  left: "10px",
  fontSize: "50px",
}));

const Main = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    height: "100vh",
    padding: "0px",
    textAlign: "center",
    paddingTop: "60px",
  },
  width: "calc(100% - 300px)",
  height: "60vh",
  padding: "100px 150px 200px 150px",
  backgroundColor: "#DADEE5",
  display: "flex",
  flexDirection: "column",
}));

const Group = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { flexDirection: "column" },
  display: "flex",
  flexDirection: "row",
  alignSelf: "center",
  gap: "10px",
}));

const Name = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { width: "75vw" },
  [theme.breakpoints.between("sm", "md")]: { width: "28vw" },
  [theme.breakpoints.between("md", "lg")]: { width: "20vw" },
  width: "18vw",
  margin: "0px auto",
}));

const Number = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { width: "75vw" },
  [theme.breakpoints.between("sm", "md")]: { width: "28vw" },
  [theme.breakpoints.between("md", "lg")]: { width: "20vw" },
  width: "18vw",
  margin: "0px auto",
}));

const Brand = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { width: "75vw" },
  [theme.breakpoints.between("sm", "md")]: { width: "57.3vw" },
  [theme.breakpoints.between("md", "lg")]: { width: "41vw" },
  width: "44.5%",
  margin: "15px auto",
  marginBottom: "0px",
}));

const Order = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { width: "75vw" },
  [theme.breakpoints.between("sm", "md")]: { width: "57.3vw" },
  [theme.breakpoints.between("md", "lg")]: { width: "41vw" },
  width: "44.5%",
  borderRadius: "10px",
  margin: "15px auto",
  opacity: 0.5,
}));

const Clicker = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { width: "75vw" },
  [theme.breakpoints.between("sm", "md")]: {
    width: "57.3vw",
    marginTop: "0px",
  },
  [theme.breakpoints.between("md", "lg")]: { width: "41vw", marginTop: 0 },
  width: "44.5%",
  alignSelf: "center",
  margin: "10px auto",
  marginBottom: "20px",
}));

const Alertion = styled(Alert)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "90vw",
    position: "relative",
    bottom: "84vh",
  },
  [theme.breakpoints.between("sm", "lg")]: {
    width: "400px",
    height: "40px",
  },
  width: "15.15vw",
}));

const Text = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.between("sm", "lg")]: {
    fontSize: "18px",
  },
}));

export default function Contact() {
  useEffect(() => {
    useList.persist.rehydrate();
  }, []);

  const list = useList((state) => new Array(state.list));
  const clearList = useList((state) => state.clearList);
  const clearClicked = useList((state) => state.clearClicked);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const initValues = {
    name: "",
    number: "",
    message: "",
    car: "",
  };
  const initState = {
    values: initValues,
    isLoading: false,
    isError: false,
    error: "",
  };

  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const { values } = state;

  const handleChange = (event) => {
    setState((prev) => {
      return {
        ...prev,
        values: {
          ...prev.values,
          message: `${list[0]}`,
          [event.target.name]: event.target.value,
        },
      };
    });
  };

  const handleBlur = (event) => {
    setTouched((prev) => {
      return { ...prev, [event.target.name]: true };
    });
  };

  const handleClick = async () => {
    setState((prev) => {
      return { ...prev, isLoading: true };
    });
    try {
      await sendCotactData(values);
      setIsSuccess(true);
      clearList();
      clearClicked();
    } catch (err) {
      setState((prev) => {
        return {
          ...prev,
          isError: true,
          isLoading: false,
          error: err.message,
        };
      });
    }
  };

  return (
    <Main id="contact">
      <Header
        ref={ref}
        component={motion.span}
        layout={true}
        initial={"hidden"}
        transition={{
          duration: 1,
          ease: "backInOut",
          staggerChildren: 0.2,
          childrenDelay: 0.4,
        }}
        animate={isInView ? "visible" : ""}
      >
        {wordLeftAnimation("Свяжитесь с нами", "InterBold", "100%", {
          marginRight: "15px",
        })}
      </Header>
      <Box
        sx={{
          height: "14.64vw",
          width: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Group>
          <Name
            label="Имя"
            variant="outlined"
            required
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && !values.name ? true : false}
          />
          <Number
            label="Номер WhatsApp"
            variant="outlined"
            required
            type="tel"
            name="number"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.number && !values.number ? true : false}
          />
        </Group>
        <Brand
          label="VIN Номер Автомобиля"
          variant="outlined"
          required
          type="text"
          name="car"
          value={values.car}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.car && !values.car ? true : false}
        />
        <Order
          label="Заказ"
          multiline
          minRows={10}
          name="message"
          value={list[0]}
          content={list[0]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Clicker
          variant="contained"
          disabled={
            !values.name || !values.number || !values.car ? true : false
          }
          onClick={handleClick}
        >
          <Typography variant="SchibstedRegular">
            {state.isLoading ? <CircularProgress color="info" /> : "Отправить"}
          </Typography>
        </Clicker>
      </Box>
      <Snackbar
        open={isSuccess || state.isError}
        autoHideDuration={2000}
        onClose={() => {
          setIsSuccess(false);
          setState(initState);
          setTouched({});
        }}
      >
        {state.isError ? (
          <Alertion severity="error">Ошибка: {state.error}</Alertion>
        ) : (
          <Alertion severity="success" variant="filled">
            <Text>
              Запрос был отправлен, мы свяжемся с вами в скорое время!
            </Text>
          </Alertion>
        )}
      </Snackbar>
    </Main>
  );
}
