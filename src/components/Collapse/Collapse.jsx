import { useState } from "react";
import icon from "../../assets/images/Vector.svg";

const iconInitialState = {
  transform: "rotate(180deg)",
};
const Collapse = ({ title, children }) => {
  /***Utilisation de useState pour gérer l'état */
  const [isOpen, setIsOpen] = useState(false);
  const [iconStyle, setIconStyle] = useState(iconInitialState);
  /** Cet état gère les styles CSS appliqués à l'icône*/

  /*Fonction pour gérer l'ouverture et la fermeture (toggleCollapse)*/
  const toggleCollapse = () => {
    setIsOpen(!isOpen);

    setIconStyle(
      isOpen
        ? iconInitialState
        : { transform: "rotate(0deg)", transition: "all 0.17s linear" }
    );
  };

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={toggleCollapse}>
        {title}
        <img
          src={icon}
          className="collapse-icon"
          alt="collapse icon"
          style={iconStyle}
        />
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
