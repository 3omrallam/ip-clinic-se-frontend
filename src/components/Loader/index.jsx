import PropTypes from "prop-types";

import classes from "./Loader.module.scss";

function Loader({ isContained, isInline, isBorder, backdrop }) {
  const containerClass = backdrop
    ? classes.backdropEffect
    : isContained
    ? classes.loaderContainerContained
    : isInline
    ? classes.loaderContainerInline
    : classes.loaderContainer;

  return (
    <div className={containerClass}>
      <div
        className={`spinner-${isBorder ? "border" : "grow"} ${classes.loader}`}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

Loader.propTypes = {
  isContained: PropTypes.bool,
  isInline: PropTypes.bool,
  isBorder: PropTypes.bool,
};

export default Loader;
