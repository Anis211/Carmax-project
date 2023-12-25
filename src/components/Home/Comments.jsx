import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Comments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  return (
    <Box
      ref={ref}
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
      animate={isInView ? "visible" : ""}
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
                  <Image src={`/user${index}.png`} alt={`user${index}`} fill />
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
        );
      })}
    </Box>
  );
}
