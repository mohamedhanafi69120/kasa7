const Host = ({ firstName, lastName, picture }) => {
  return (
    <div className="housing-host">
      <div className="host-info">
        <div className="host-name">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <img className="host-img" src={picture} alt="host" />
      </div>
    </div>
  );
};

export default Host;
