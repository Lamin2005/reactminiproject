import {LanguageProvider} from "./LanguageContext";
import Button from "./Button";
import "./language.css";

let App = () => {
    return(
        <LanguageProvider>
           <div className="mainview">
                <Button/>
           </div>
        </LanguageProvider>

    );
}

export default App;