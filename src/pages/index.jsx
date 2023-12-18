import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Rating,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Snackbar,
  Paper,
  Link,
  Grid,
  Fab,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { wordLeftAnimation, letterLeftAnimation } from "@/lib/animations";
import { sendCotactData } from "@/lib/api";
import { Link as NextLink } from "next/link";
import Image from "next/image";
import useList from "@/lib/list.js";

export default function Home() {
  useEffect(() => {
    useList.persist.rehydrate();
  }, []);

  const list = useList((state) => new Array(state.list));
  const clearList = useList((state) => state.clearList);
  const deleteItem = useList((state) => state.deleteItem);

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });

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

  const [isCircle, setIsCircle] = useState(true);
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

  const handleClick1 = () => {
    clearList();
  };

  const handleDelete = (element) => {
    deleteItem(element.textContent);
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

  const comments = [
    {
      nickName: "​Ернар Ибраев",
      comment:
        "Беру на свою элантру запчасти только здесь! Ходовка, свечи и т.д., все качественное. Машина чувствует себя прекрасно, разве что не летает! Спасибо Артуру, за клиентоориентированность, всегда грамотно проконсультирует, подскажет что лучше. Зачем ехать на базар, когда рядом такой магазинчик есть) Цены низкие, сравниваю с другими в интернете. Что ещё надо для счастья!",
      rating: 5,
    },
    {
      nickName: "​Дархан Магауин",
      comment:
        "Спасибо за помощь. Проконсультировали меня с добротой и пониманием, хотя уже было время для закрытия. Подсказали какую запчасть лучше установить, хозяин знает в автомобилях буквально всё. Так еще и установку модно сделать прямо напротив магазина, что очень удобно.",
      rating: 4.5,
    },
    {
      nickName: "K KZ",
      comment:
        "Хозяин молодец. Обслуживание хорошее. Цены приземлённые, адекватные. Всем советую!",
      rating: 4,
    },
    {
      nickName: "David Avakyan",
      comment:
        "Колодки вместе со свечами купил недавно в этом магазине, все отлично, продавец толковый, свое дело знает",
      rating: 5,
    },
    {
      nickName: "Elizaveta Mil",
      comment:
        "Купила свечи 4 штуки, на свой Киа церато, все отлично работает, уже 2 недели прошло, двигатель как часы работает заводиться с пол оборота",
      rating: 4.5,
    },
    {
      nickName: "Olga Trofimova",
      comment:
        "Большой ассортимент, помогли мне, честно не знаю что покупала в сто дали список и пошла купила,цены приемлемые, продавец вежливый",
      rating: 5,
    },
    {
      nickName: "Яна Хан",
      comment:
        "Купила колпаки на свой акцент, все отлично, помог установить, огромное человеческое спасибо",
      rating: 4.5,
    },
    {
      nickName: "Марина Яковлева",
      comment:
        "Советую, магазин отличный, купила антифриз, Все отлично, вежливый продавец",
      rating: 5,
    },
    {
      nickName: "​Марина Морозова",
      comment:
        "Очень богатый выбор! Стану постоянным покупателем! Также очень приветливые и знающие свое дело продавцы! цены умеренные! вообщем меня все устроило! буду заходить почаще! всем удачи!",
      rating: 5,
    },
  ];

  const faqContent = [
    {
      header: "Запчасти разного качества",
      body: "Надежные решения для вашего транспорта",
    },
    {
      header: "Доступные цены",
      body: "Качество не ударит по вашему кошельку",
    },
    {
      header: "Доставка по всей Астане",
      body: "Медленный транспорт не нужен когда время тикает",
    },
  ];

  const headers = [
    "Детали для ТО",
    "Прокладки двигателя",
    "Система подачи воздуха в двигателе",
    "Механизм газораспределения",
    "Кривошатунный механизм двигателя",
    "Система Смазки в двигателе",
    "Приготовление смеси в двигателе",
    "Двигатель",
    "Топливная система",
    "Система охлаждения",
    "Cистема Выпуска",
  ];

  const faqVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const commonTypography = {
    layout: true,
    initial: "hidden",
    transition: {
      duration: 1,
      ease: "backInOut",
      staggerChildren: 0.2,
      childrenDelay: 0.4,
    },
  };

  return (
    <Box className="home" sx={{ height: "auto", width: "100% " }}>
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
      <Box
        className="FAQ"
        id="about"
        sx={{
          backgroundColor: "#EDF2F4",
          width: "calc(100% - 300px)",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          padding: "100px 150px 130px 150px",
        }}
      >
        <Typography
          ref={ref}
          sx={{ width: "1250px", height: "115px", marginBottom: "40px" }}
          component={motion.span}
          {...commonTypography}
          animate={isInView ? "visible" : ""}
        >
          {wordLeftAnimation(
            "Качественные Запчасти для Вашего Автомобиля",
            "WixExtraBold",
            "64px",
            { marginRight: "15px" }
          )}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", marginTop: "100px" }}>
          <Card
            ref={ref}
            sx={{
              width: "470px",
              height: "480px",
              borderRadius: "40px",
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : ""}
            transition={{ duration: 1, type: "spring", delay: 0.8 }}
          >
            <Image
              src="/filter.png"
              alt="oil filter"
              width={470}
              height={480}
            />
          </Card>
          <Box
            ref={ref}
            sx={{ alignSelf: "center", marginLeft: "150px" }}
            component={motion.div}
            initial="hidden"
            animate={isInView ? "visible" : ""}
            transition={{
              duration: 1,
              type: "spring",
              staggerChildren: 0.35,
              delayChildren: 0.8,
            }}
          >
            {faqContent.map((element, index) => {
              return (
                <>
                  <Box
                    key={index}
                    sx={{
                      width: "470px",
                      height: "64px",
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "72px",
                    }}
                    component={motion.div}
                    variants={faqVariants}
                  >
                    <Typography
                      variant="WixExtraBold"
                      fontSize="22px"
                      sx={{ marginBottom: "9px" }}
                    >
                      {element.header}
                    </Typography>
                    <Typography variant="SchibstedRegular" fontSize="20px">
                      {element.body}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box
        className="section1"
        sx={{
          width: "calc(100% - 300px)",
          height: "auto",
          padding: "100px 150px 100px 150px",
          backgroundColor: "#8D99AE",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Card
          ref={ref1}
          sx={{ width: "500px", height: "480px", borderRadius: "40px" }}
          component={motion.div}
          initial={{ opacity: 0, x: 60 }}
          animate={isInView1 ? { opacity: 1, x: 0 } : ""}
          transition={{ duration: 1, ease: "backInOut" }}
        >
          <Image alt="engine" src="/engine.png" width={500} height={480} />
        </Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            left: "210px",
            top: "120px",
          }}
          component={motion.div}
        >
          <Typography
            ref={ref1}
            sx={{ marginBottom: "30px", width: "550px" }}
            component={motion.span}
            {...commonTypography}
            animate={isInView1 ? "visible" : ""}
          >
            {wordLeftAnimation(
              "Исследуйте Преимущества Carmax",
              "WixExtraBold",
              "35px",
              { marginRight: "15px" }
            )}
          </Typography>
          <Typography
            ref={ref1}
            sx={{ width: "550px" }}
            component={motion.span}
            animate={isInView1 ? "visible" : ""}
            {...commonTypography}
          >
            {wordLeftAnimation(
              "Мы - команда экспертов по автозапчастям, готовых предоставить вам только лучшее.",
              "SchibstedRegular",
              "20.5px",
              { marginRight: "15px" }
            )}
          </Typography>
        </Box>
      </Box>
      <Box
        className="section2"
        sx={{
          width: "calc(100% - 300px)",
          height: "auto",
          padding: "120px 150px 100px 150px",
          backgroundColor: "#8D99AE",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "470px",
            marginRight: "250px",
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          <Typography
            ref={ref2}
            component={motion.span}
            animate={isInView2 ? "visible" : ""}
            {...commonTypography}
          >
            {wordLeftAnimation("Наши Услуги", "WixExtraBold", "36px", {
              marginRight: "15px",
            })}
          </Typography>
          <Typography
            ref={ref2}
            sx={{ width: "550px", marginTop: "40px" }}
            component={motion.span}
            animate={isInView2 ? "visible" : ""}
            {...commonTypography}
          >
            {wordLeftAnimation(
              "Быстрая Доставка: Ваш заказ - наш приоритет Профессиональные Консультации: Наши эксперты всегда готовы помочь как в выборе запчасти, так и в ее установке в нашем СТО",
              "SchibstedRegular",
              "20.5px",
              { marginRight: "15px" }
            )}
          </Typography>
        </Box>
        <Card
          ref={ref2}
          sx={{
            width: "500px",
            height: "480px",
            borderRadius: "40px",
          }}
          component={motion.div}
          initial={{ opacity: 0, x: 60 }}
          animate={isInView2 ? { opacity: 1, x: 0 } : ""}
          transition={{ duration: 1, ease: "backInOut" }}
        >
          <Image alt="engine" src="/gasket.png" width={500} height={480} />
        </Card>
      </Box>
      <Box
        id="catalog"
        sx={{
          width: "calc(100% - 300px)",
          height: "auto",
          padding: "100px 150px 100px 150px",
          backgroundColor: "#EF233C",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          ref={ref5}
          sx={{ alignSelf: "center", marginBottom: "70px" }}
          component={motion.span}
          initial="hidden"
          animate={isInView5 ? "visible" : ""}
          transition={{
            duration: 1,
            type: "spring",
            staggerChildren: 0.1,
          }}
        >
          {letterLeftAnimation("Каталог", "WixExtraBold", "65px")}
        </Typography>
        <Box
          sx={{ width: "100%", height: "auto" }}
          component={motion.div}
          layout
          initial="hidden"
          animate={isInView5 ? "visible" : ""}
          transition={{
            duration: 1.5,
            ease: "backInOut",
            times: [0, 0.5, 1],
            staggerChildren: 0.2,
            childreDelay: 0.4,
          }}
        >
          {headers.map((part, index) => {
            return (
              <>
                <Paper
                  key={index}
                  sx={{
                    width: "100%",
                    height: "100px",
                    borderRadius: "20px",
                    marginTop: "10px",
                    textAlign: "center",
                    opacity: 0.85,
                  }}
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: [0, 0.5, 1], y: [60, 0, 0] },
                  }}
                >
                  <Link
                    href={`/parts/${headers.indexOf(part)}`}
                    component={NextLink}
                    color="black"
                    underline="none"
                  >
                    <Typography
                      variant="WixExtraBold"
                      fontSize="30px"
                      sx={{ position: "relative", top: "30px" }}
                    >
                      {part}
                    </Typography>
                  </Link>
                </Paper>
              </>
            );
          })}
        </Box>
      </Box>
      <Box
        ref={ref3}
        className="comments"
        sx={{
          width: "calc(100% - 300px)",
          height: "auto",
          padding: "100px 150px 100px 150px",
          backgroundColor: "#EF233C",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        component={motion.div}
        initial="hidden"
        animate={isInView3 ? "visible" : ""}
        transition={{
          duration: 2,
          times: [0, 0.5, 1],
          ease: "backInOut",
          staggerChildren: 0.3,
          childrenDelay: 0.4,
        }}
      >
        {comments.map((element, index) => {
          return (
            <>
              <Card
                key={index}
                sx={{
                  backgroundColor: "white",
                  opacity: 0.87,
                  width: "320px",
                  height: "auto",
                  marginTop: "20px",
                  marginLeft: "20px",
                  borderRadius: "20px",
                  padding: "30px",
                }}
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: [0, 0.4, 0.87], y: [60, 0, 0] },
                }}
              >
                <CardHeader
                  sx={{ marginBottom: "4px" }}
                  avatar={
                    <Avatar>
                      <Image
                        src={`/user${index}.png`}
                        alt={`user${index}`}
                        fill
                      />
                    </Avatar>
                  }
                  title={
                    <Typography varaint="WixExtraBold" fontSize="20px">
                      {element.nickName}
                    </Typography>
                  }
                  subheader={
                    <Rating
                      name="commentRating"
                      precision={0.5}
                      value={element.rating}
                      size="small"
                      readOnly
                    />
                  }
                />
                <CardContent>
                  <Typography variant="InterMedium" fontSize="16px">
                    {element.comment}
                  </Typography>
                </CardContent>
              </Card>
            </>
          );
        })}
      </Box>
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
          ref={ref4}
          sx={{
            alignSelf: "center",
            marginBottom: "40px",
            color: "#001122",
            position: "relative",
            left: "10px",
          }}
          component={motion.span}
          {...commonTypography}
          animate={isInView4 ? "visible" : ""}
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
              {state.isLoading ? (
                <CircularProgress color="info" />
              ) : (
                "Отправить"
              )}
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
    </Box>
  );
}
