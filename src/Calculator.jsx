import React, { useState } from "react";
import "./CalculatorApp.css";

const Calculator = () => {
  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
  const operators = ["/", "*", "-", "+"];
  const functions = ["C", "DEL"];

  const [input, setInput] = useState("");
 
  let handlar = (value) => {
    if(value === "C"){
      setInput("");
    }else{
      let result = input.toString();
      setInput(result.slice(0,-1));
    }
  };

  let handlarEqual = () => {
    try {
      let value = eval(input);
      setInput(value);
    } catch (error) {
      setInput(error);
      console.log("Error Message" , error);
    }
  };
 
  return (
    <div className="calculator-wrapper">
      <h1 className="calculator-title">Calculator App</h1>

      <div className="calculator">
        <input className="display" type="text" value={input} onChange={(e)=> setInput(e.target.value)} />

        <div className="button-area">
          <div className="numbers">
            {numbers.map((num, index) => (
              <button key={index} className="btn" onClick={() => setInput(input + num)}>
                {num}
              </button>
            ))}
          </div>

          <div className="operators">
            {operators.map((op, index) => (
              <button key={index} className="btn btn-operator"  onClick={() => setInput(input + op)}>
                {op}
              </button>
            ))}
          </div>
        </div>

        <div className="bottom-buttons">
          {functions.map((func, index) => (
            <button key={index} className="btn btn-function" onClick={()=>handlar(func)}>
              {func}
            </button>
          ))}
          <button className="btn btn-equal" onClick={handlarEqual}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
