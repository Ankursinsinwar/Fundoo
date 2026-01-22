import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user !== null && user !== undefined && user.isSignIn) {
    return children;
  }
  return <Navigate to="/signin" />;
}
