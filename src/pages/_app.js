import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import Layout from "./layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Carmax</title>
        <link rel="icon" href="/logoC.png" type="image/x-icon" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
