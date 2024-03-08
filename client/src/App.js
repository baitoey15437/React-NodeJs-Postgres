
import { BrowserRouter as Router, useRoutes } from "react-router-dom"
import Navbar from './Navbar';
import Users from './Users';
import UserCreate from "./UserCreate";
import UserUpdate from "./UserUpdate";
import './App.css';


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Users /> },
    { path: "create", element: <UserCreate /> },
    { path: "update/:id", element: <UserUpdate /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Navbar/>
      <App />
    </Router>
  );
};

export default AppWrapper;