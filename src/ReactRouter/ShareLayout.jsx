import { Outlet } from "react-router-dom";

import Nav from "./Nav";


let ShareLayout = () => {
    return(
        <div>
             <Nav />
             <Outlet/>
        </div>
    );
}

export default ShareLayout;