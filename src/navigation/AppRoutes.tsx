import { Route, Switch } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import LogoutForm from "../components/Login/LogoutForm";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
  console.log("AppRoutes");

  const routeArray = [
    <Route        key="requests" path="/requests" component={LoginForm} />,
    <PrivateRoute key="quotes"   path="/quotes" component={LoginForm} />,
    <Route        key="login"    path="/login" component={LoginForm} />,
    <PrivateRoute key="logout"   path="/logout" component={LogoutForm} />,
  ];

  return <Switch>{routeArray}</Switch>;
}
