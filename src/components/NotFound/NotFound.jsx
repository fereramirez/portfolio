import "./NotFound.scss";

const NotFound = () => {
  //! VOLVER A VER al entrar a un enlace 404, por un instante se ve el contenido de NotFound
  return (
    <div className="not-found-container">
      <div className="not-found-text" title="ERROR 404: Not Found">
        ERROR 404:
      </div>
      <div className="not-found-text" title="ERROR 404: Not Found">
        Not Found
      </div>
      <div className="not-found-text" title="ERROR 404:">
        ERROR 404:
      </div>
      <div className="not-found-text" title="Not Found">
        Not Found
      </div>
      <div className="not-found-text" title="Not Found">
        ERROR 404:
      </div>
      <div className="not-found-text" title="ERROR 404:">
        Not Found
      </div>
    </div>
  );
};

export default NotFound;
