import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import "./language.css";

let Buttons = ()=> {

    let {language,changeLanguage,t} = useContext(LanguageContext)
    return(
        <div className="container">
            <h1>{t('welcome')}</h1>
            <button className="en" onClick={()=>changeLanguage(language === "en" ? "mm" : "en" )}>  {language==="en" ? t('change_language') : t('change_language') }</button>
          
        </div>
    );
}

export default Buttons;