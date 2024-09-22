import bannerImg from "../../assets/images/IMG.png";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Accueil.css";

const Accueil = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Banner imageSrc={bannerImg} text="Chez vous, partout et ailleurs" />
      </main>
      <Footer />
    </>
  );
};

export default Accueil;
