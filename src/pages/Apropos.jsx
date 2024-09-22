import aboutBanner from "../assets/images/aproposIMG.png";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Apropos = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Banner imageSrc={aboutBanner} text="" className="banner-about" />
      </main>
      <Footer />
    </>
  );
};

export default Apropos;
