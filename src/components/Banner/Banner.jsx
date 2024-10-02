const Banner = ({ imageSrc, text, className }) => {
  /****1-Crée un composant Banner, en utilisant une fonction fléchée (=>).
les props (propriétés) que le composant Banner reçoit en tant qu'arguments.
imageSrc : L'URL de l'image qui sera utilisée en arrière-plan de la bannière.
text : Le texte qui sera affiché à l'intérieur de la bannière.
className : Permet d'ajouter des classes CSS 
 */
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${imageSrc})`,
  };
  /**: j'ai Crée un objet bannerStyle qui contient les styles CSS que nous voulons appliquer à la bannière, 
un effet de dégradé transparent (une couche sombre) sur l'image pour rendre le texte plus lisible.
 */
  return (
    <div className={`banner ${className}`} style={bannerStyle}>
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
