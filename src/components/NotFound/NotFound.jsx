import css from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={css.notFoundContainer}>
      <div className={css.notFoundText} title="ERROR 404: Not Found">
        ERROR 404:
      </div>
      <div className={css.notFoundText} title="ERROR 404: Not Found">
        Not Found
      </div>
      <div className={css.notFoundText} title="ERROR 404:">
        ERROR 404:
      </div>
      <div className={css.notFoundText} title="Not Found">
        Not Found
      </div>
      <div className={css.notFoundText} title="Not Found">
        ERROR 404:
      </div>
      <div className={css.notFoundText} title="ERROR 404:">
        Not Found
      </div>
    </div>
  );
}

export default NotFound;
