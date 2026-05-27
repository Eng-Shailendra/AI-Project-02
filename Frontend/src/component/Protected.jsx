import React from "react";
import { useAuth } from "../features/hooks/useAuth.js";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "./LodingOverlay";

const Protected = ({ childern }) => {
  const { loading, user } = useAuth();
  const navigate = useNavigate();
  if (loading)
    return (
      <>
        <LoadingOverlay />
      </>
    );
  if (!user) navigate("/login");

  return childern;
};

export default Protected;
