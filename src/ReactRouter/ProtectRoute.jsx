import { Navigate, NavLink } from "react-router-dom";

let ProtectRoute = ({user,children}) => {

if(user) return children;
  
return (
    <div className="error">
      <h1>You need to Login!</h1>
      <NavLink to="/">Back to Home</NavLink>
    </div>
  );
};

export default ProtectRoute;
