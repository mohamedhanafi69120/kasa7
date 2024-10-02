import { Link } from "react-router-dom";
/********************import Link permet de créer un lien de navigation interne
 * à l'application sans recharger la page entière, ce qui rend la navigation
 *  fluide dans une application React. */

const Card = ({ item }) => {
  /***Card est un composant fonctionnel qui reçoit une prop
   * appelée item. Cette prop est un objet contenant les informations de l'élément à afficher
   * (comme l'id, le titre, et l'image de couverture).** */
  return (
    <article className="card">
      <Link to={`/logement/${item.id}`} className="card-link">
        <div className="img-container">
          <img src={item.cover} alt={item.title} />
        </div>
        <div className="card-title">
          <h2>{item.title}</h2>
        </div>
      </Link>
    </article>
  );
};

export default Card;
