import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <article className="card">
      <Link to={`/logement/${item.id}`} className="card-link">
        {/*Le chemin de destination construit dynamiquement
      en utilisant l'ID de l'élément (item.id).exemple, 
si item.id vaut 123, alors l'URL du lien sera /logement/123 */}
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
