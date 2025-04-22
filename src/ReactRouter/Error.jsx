import { NavLink } from "react-router-dom";
import "../index.css";

let Error = () =>{
   
    return(
        <div className="error">
            <h1>Error 404 Page Not Found</h1>
            <NavLink to="/">Back to Home</NavLink>
        </div>
    );
}

export default Error;