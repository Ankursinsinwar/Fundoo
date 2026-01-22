import { Navigate } from "react-router-dom";

export default function AuthRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user !== null && user !== undefined && user.isSignIn) {
    return <Navigate to="/dashboard"/>;
  }
  return children;
}
