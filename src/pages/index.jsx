import { Box } from "@mui/material";
import Hero from "@/components/Home/Hero";
import Faq from "@/components/Home/FAQ";
import Cart from "@/components/Home/Cart";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Catalog from "@/components/Home/Catalog";
import Comments from "@/components/Home/Comments";
import Contact from "@/components/Home/Contact";

export default function Home() {
  return (
    <Box className="home" sx={{ height: "auto", width: "100% " }}>
      <Cart />
      <Hero />
      <Faq />
      <Section1 />
      <Section2 />
      <Catalog />
      <Comments />
      <Contact />
    </Box>
  );
}
