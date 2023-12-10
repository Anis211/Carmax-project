import {
  Box,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Rating,
  TextField,
  Button,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Home() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref3, { once: true });

  const logoVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  };

  const faqVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

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

  const commonTypography = {
    layout: true,
    initial: "hidden",
    transition: {
      duration: 1,
      ease: "backInOut",
      staggerChildren: 0.2,
      childrenDelay: 0.3,
    },
  };

  const imageAnimation = {
    initial: { x: 80, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
      duration: 1.5,
      type: "spring",
      delay: 0.2,
    },
  };

  const wordLeftAnimation = (text, variant, fontSize, sxOptions) => {
    return text.split(" ").map((word, index) => {
      return (
        <>
          <Typography
            sx={{ display: "inline-block", ...sxOptions }}
            key={index}
            component={motion.span}
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: { opacity: [0, 0.5, 1], x: [60, 0, 0] },
            }}
            variant={variant}
            fontSize={fontSize}
          >
            {word}
          </Typography>
        </>
      );
    });
  };

  const letterLeftAnimation = (text, variant, fontSize) => {
    return text.split("").map((letter, index) => {
      return (
        <>
          <Typography
            key={index}
            sx={{ display: "inline-block" }}
            component={motion.span}
            variants={logoVariants}
            variant={variant}
            color="white"
            fontSize={fontSize}
          >
            {letter}
          </Typography>
        </>
      );
    });
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
              ref={ref}
              sx={{
                width: "600px",
                height: "600px",
                position: "relative",
                top: "40px",
              }}
              component={motion.div}
              {...imageAnimation}
            >
              <Image src="/logo.png" alt="logo" width={600} height={600} />
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box
        className="FAQ"
        sx={{
          backgroundColor: "#EDF2F4",
          width: "calc(100% - 300px)",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          padding: "60px 150px 130px 150px",
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
              "Быстрая Доставка: Ваш заказ - наш приоритет Профессиональные Консультации: Наши эксперты всегда готовы помочь как в выборе запчасти, так и в ее установке а нашем СТО",
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
            {["Имя", "Email"].map((placeHolder, index) => {
              return (
                <>
                  <TextField
                    key={index}
                    label={placeHolder}
                    variant="outlined"
                    required
                    sx={{ width: "265px", marginLeft: "15px" }}
                  />
                </>
              );
            })}
          </Box>
          <TextField
            label="Сообщение"
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
          >
            <Typography variant="SchibstedRegular">Отправить</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
