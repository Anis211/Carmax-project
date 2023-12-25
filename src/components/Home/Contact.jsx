import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { wordLeftAnimation } from "@/lib/animations";
import { sendCotactData } from "@/lib/api";
import useList from "@/lib/list.js";

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
    <Box
      id="contact"
      className="contactUs"
      sx={{
        width: "calc(100% - 300px)",
        height: "auto",
        padding: "100px 150px 200px 150px",
        backgroundColor: "#DADEE5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        ref={ref}
        sx={{
          alignSelf: "center",
          marginBottom: "40px",
          color: "#001122",
          position: "relative",
          left: "10px",
        }}
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
        {wordLeftAnimation("Свяжитесь с нами", "InterBold", "50px", {
          marginRight: "15px",
        })}
      </Typography>
      <Box
        sx={{
          height: "290px",
          width: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <TextField
            label="Имя"
            variant="outlined"
            required
            sx={{ width: "265px", marginLeft: "15px" }}
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && !values.name ? true : false}
          />
          <TextField
            label="Номер WhatsApp"
            variant="outlined"
            required
            type="tel"
            sx={{ width: "265px", marginLeft: "15px" }}
            name="number"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.number && !values.number ? true : false}
          />
        </Box>
        <TextField
          label="Марка и Модель Автомобиля"
          variant="outlined"
          required
          type="text"
          sx={{ width: "44.5%", left: "344px", marginTop: "15px" }}
          name="car"
          value={values.car}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.car && !values.car ? true : false}
        />
        <TextField
          label="Заказ"
          multiline
          minRows={10}
          sx={{
            width: "44.5%",
            borderRadius: "10px",
            marginTop: "15px",
            position: "relative",
            left: "344px",
            opacity: 0.5,
          }}
          name="message"
          value={list[0]}
          content={list[0]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button
          variant="contained"
          sx={{
            width: "540px",
            alignSelf: "center",
            position: "relative",
            left: "6px",
            marginTop: "10px",
          }}
          disabled={
            !values.name || !values.number || !values.car ? true : false
          }
          onClick={handleClick}
        >
          <Typography variant="SchibstedRegular">
            {state.isLoading ? <CircularProgress color="info" /> : "Отправить"}
          </Typography>
        </Button>
      </Box>
      <Snackbar
        open={isSuccess}
        autoHideDuration={2000}
        onClose={() => {
          setIsSuccess(false);
          setState(initState);
          setTouched({});
        }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "300px" }}>
          Email has been successfully sent
        </Alert>
      </Snackbar>
      {state.isError ? <Alert severity="error">{state.error}</Alert> : ""}
    </Box>
  );
}
