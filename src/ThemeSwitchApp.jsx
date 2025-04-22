import { useEffect, useState } from "react";
import "./index.css";
import Context from "./Context";
import Button from "./SwitchButton";

let App = () => {
    
    let style = {
        padding:"1rem 2rem",
        borderRadius:"10px",
        border:"none",
        background:"red",
        color:"white",
        fontSize:"17px",
        cursor:"pointer"
    };

    let [theme,setTheme] = useState("dark");

    useEffect(()=>{
        document.body.style.backgroundColor = theme === "light" ? "white" : "#20262a";
    },[theme]);

    return(
        <Context.Provider value={{style,theme,setTheme}}>
            <Button/>
        </Context.Provider>
        
    );
}

export default App;