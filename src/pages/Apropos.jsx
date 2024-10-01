import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import aboutBanner from "../assets/images/aproposIMG.png";
import Collapse from "../components/Collapse/Collapse";
import collapsesData from "../data/collapsesData.json";
import Footer from "../components/Footer/Footer";

const Apropos = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Banner imageSrc={aboutBanner} text="" className="banner-about" />
        <section className="collapses-container">
          {collapsesData.map((collapse) => (
            <Collapse title={collapse.title} key={collapse.title}>
              <p>{collapse.content}</p>
            </Collapse>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Apropos;
