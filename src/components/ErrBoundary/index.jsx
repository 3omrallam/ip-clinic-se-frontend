import PropTypes from "prop-types";

import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./ErrorFallback";

function ErrBoundary({ children, isContained }) {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <ErrorFallback
          isContained={isContained}
          error={error}
          resetErrorBoundary={resetErrorBoundary}
        />
      )}
    >
      {children}
    </ErrorBoundary>
  );
}

ErrBoundary.propTypes = {
  isContained: PropTypes.bool,
};

export default ErrBoundary;
