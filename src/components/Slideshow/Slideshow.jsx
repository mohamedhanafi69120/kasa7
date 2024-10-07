import { useState } from "react";
import arrowNext from "../../assets/images/arrow-next.png";
import arrowPrev from "../../assets/images/arrow-prev.png";

const Slideshow = ({ images }) => {
  /***le tableau qui contient les URL des l'images */
  const [current, setCurrent] = useState(0);
  {
    /**une variable qui garde la position actuelle (l'index)  */
  }
  const length = images.length; /**contient le nombre total d'images */

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slideshow-container">
      {images.map((image, index) => {
        return (
          <div key={index}>
            {/**chaque d'une div -une clé pour aider react identifier  quelle image  */}
            {index === current && (
              <img className="housing-img" src={image} alt="housing" />
            )}
          </div>
        );
      })}

      {length > 1 && ( // Condition pour afficher les flèches uniquement s'il y a plus d'une image
        <div className="slide-controls">
          <img
            src={arrowPrev}
            onClick={prevImage}
            className="arrow"
            alt="Preview icon"
          />
          <img
            src={arrowNext}
            onClick={nextImage}
            className="arrow"
            alt="Next icon"
          />
        </div>
      )}

      {length > 1 && ( // Condition pour afficher le compteur uniquement s'il y a plus d'une image
        <div className="slideshow-counter">
          <p>
            {current + 1}/{length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
