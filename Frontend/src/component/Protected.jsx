import React from "react";
import { useAuth } from "../features/hooks/useAuth.js";
import LoadingOverlay from "./LodingOverlay";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingOverlay />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Protected;
