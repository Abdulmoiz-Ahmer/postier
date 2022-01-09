import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const Auth = function ({ children }) {
  return useAuth() === true ? children : <Navigate to="/login" replace />;
};
