import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import StoreApp from "./App";
//import ToDoListApp from "./ToDoListApp";
//import CalculatorApp from "./Calculator";
//import ThemeApp from "./ThemeSwitchApp";
//import LanguageApp from "./LanguageChanger/LanguageApp";
import RouterApp from "./ReactRouter/RouterApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterApp />
);