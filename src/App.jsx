import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CtaWhats from "./components/CtaWhats";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <CtaWhats />
      </main>
      <Footer />
    </>
  );
}
