import Banner from "../components/Banner/Banner";
import aboutBanner from "../assets/images/aproposIMG.png";
import Collapse from "../components/Collapse/Collapse";
import collapsesData from "../data/collapsesData.json";

const Apropos = () => {
  return (
    <>
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
    </>
  );
};

export default Apropos;
