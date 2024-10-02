// Correction de l'import pour utiliser le fichier SCSS
import "./Tags.scss";

const Tags = ({ tags }) => {
  return (
    <div className="housing-tags">
      {tags.map((tag, tagIndex) => (
        <p key={tagIndex} className="tag">
          {tag}
        </p>
      ))}
    </div>
  );
};

export default Tags;
