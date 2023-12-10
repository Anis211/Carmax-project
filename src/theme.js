import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#262B42" },
    secondary: { main: "#FBFCFD" },
  },
  typography: {
    logo: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 800,
      fontSize: 35,
      color: "#FCCA46",
    },
    headers: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 800,
      fontSize: 15,
      color: "#FBFCFD",
    },
    footerHead: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 400,
      fontSize: 19,
      color: "#FBFCFD",
    },
    footerBody: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      color: "#FBFCFD",
    },
    WixExtraBold: {
      fontFamily: "Wix Madefor Display, sans-serif",
      fontWeight: 800,
    },
    SchibstedRegular: {
      fontFamily: "Schibsted Grotesk, sans-serif",
      fontWeight: 400,
    },
    SchibstedBold: {
      fontFamily: "Schibsted Grotesk, sans-serif",
      fontWeight: 700,
    },
    InterRegular: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
    },
    InterMedium: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
    },
    InterBold: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 700,
    },
    WixTextBold: {
      fontFamily: "Wix Madefor Text, sans-serif",
      fontWeight: 700,
    },
    WixTextMedium: {
      fontFamily: "Wix Madefor Text, sans-serif",
      fontWeight: 500,
    },
    WixTextRegular: {
      fontFamily: "Wix Madefor Text, sans-serif",
      fontWeight: 400,
    },
  },
});
