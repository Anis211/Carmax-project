import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import Layout from "./layout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
