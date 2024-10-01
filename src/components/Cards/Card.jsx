import { Link } from "react-router-dom";

const Card = ({ item }) => {
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
