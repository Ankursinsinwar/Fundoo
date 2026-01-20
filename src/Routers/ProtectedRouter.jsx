import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return user?.isSignIn ? children : <Navigate to="/signin" />;
}
