// Accueil.jsx
import React from "react";
import Banner from "../../components/Banner/Banner";
import bannerImg from "../../assets/images/IMG.png";
import Card from "../../components/Cards/Card";
import LogementsList from "../../data/data.json";

const Accueil = () => {
  return (
    <>
      <main className="main">
        <Banner imageSrc={bannerImg} text="Chez vous, partout et ailleurs" />
        <section className="cards-container">
          {LogementsList.map((Logement) => (
            <Card key={Logement.id} item={Logement} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Accueil;
