import { Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Loader from "./components/Loader";
import ErrBoundary from "./components/ErrBoundary";
import NotFound from "./components/NotFound";
import Home from "./pages/Home/index";

function AppRoutes() {
  return (
    <Suspense fallback={<Loader isContained />}>
      <ErrBoundary isContained>
        <Routes>
          <Route path="/se/applications" element={<Home />} />
          <Route path="/se" element={<Navigate to="/se/applications" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrBoundary>
    </Suspense>
  );
}

export default AppRoutes;
