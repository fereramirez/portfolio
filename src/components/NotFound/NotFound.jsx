import React from "react";

import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={css.container}>
      <div className={css.text} title="ERROR 404: Not Found">
        ERROR 404:
      </div>
      <div className={css.text} title="ERROR 404: Not Found">
        Not Found
      </div>
      <div className={css.text} title="ERROR 404:">
        ERROR 404:
      </div>
      <div className={css.text} title="Not Found">
        Not Found
      </div>
      <div className={css.text} title="Not Found">
        ERROR 404:
      </div>
      <div className={css.text} title="ERROR 404:">
        Not Found
      </div>
    </div>
  );
};

export default NotFound;
