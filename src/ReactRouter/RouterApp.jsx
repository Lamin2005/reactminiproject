import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CalculatorApp from "../Calculator";
import StoreApp from "../App";
import ToDoListApp from "../ToDoListApp";

import ThemeApp from "../ThemeSwitchApp";
import LanguageApp from "../LanguageChanger/LanguageApp";
import ShareLayout from "./ShareLayout";
import Error from "./Error";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectRoute from "./ProtectRoute";
import { useState } from "react";

let RouterApp = () => {
  let [user,setUser] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout/>}>
            <Route index element={<LanguageApp />} />

            <Route path="/store" element={<StoreApp />} />
            <Route path="/todolist" element={<ToDoListApp />} />
            <Route path="/calculator" element={<CalculatorApp />} />
            <Route path="/theme" element={<ThemeApp />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/dashboard" element={<ProtectRoute user={user}>
              <Dashboard user={user}/>
            </ProtectRoute>} />
            <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
