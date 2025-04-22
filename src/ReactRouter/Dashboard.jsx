import { NavLink } from "react-router-dom";

let Dashboard = ({user}) => {
  return (
    <div className="error">
      <h1>Welcome {user} </h1>
      <NavLink to="/">Back to Home</NavLink>
    </div>
  );
};

export default Dashboard;
