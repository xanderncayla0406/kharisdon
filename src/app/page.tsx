import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Recovery from "@/components/Recovery";
import CustomGifts from "@/components/CustomGifts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Mission />
      <Products />
      <Process />
      <Recovery />
      <CustomGifts />
      <Footer />
    </main>
  );
}
