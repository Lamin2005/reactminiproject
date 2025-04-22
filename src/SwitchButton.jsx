import { useContext } from "react";
import Context from "./Context";

let Button = () => {
    let {style,theme,setTheme} = useContext(Context);

    console.log(theme);
    
    return(
        <div  className="btn-main">
            <button style={style} onClick={()=> setTheme((prev)=>prev === "light" ? "dark" : "light")} >{theme === "light" ? "Dark" : "Light"} Mood</button>
        </div>
    );
}

export default Button;