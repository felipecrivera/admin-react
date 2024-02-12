import { Outlet, Navigate } from "react-router-dom";
const PrivateRoute = () => {
  const loggedIn = localStorage.getItem("isUserLoggedIn");
  if (loggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default PrivateRoute;
